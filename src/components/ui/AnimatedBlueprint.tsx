"use client";

import { useEffect, useRef } from "react";

/* ── Animated Blueprint ─────────────────────────────────────────────
   Route-map style customer journey: two motion paths (PLG / SLG)
   that converge, with a glowing dot "driving" along each route.
   Neural-style ambient particles + grid in the background.
   ──────────────────────────────────────────────────────────────── */

const ACCENT_RGB = "200,255,0";
const ACCENT = "#c8ff00";
const PLG_RGB = "100,200,255"; // cool blue for PLG path
const SLG_RGB = "200,255,0";  // lime for SLG path

// 6 journey stops left → right
const stops = [
  { label: "Identify", x: 0.06 },
  { label: "Target", x: 0.22 },
  { label: "Connect", x: 0.38 },
  { label: "Qualify", x: 0.55 },
  { label: "Land", x: 0.72 },
  { label: "Expand", x: 0.90 },
];

// Route waypoints for SLG (sales-led) — curves through the lower half
function slgRoute(t: number, W: number, H: number): [number, number] {
  const x = t * W;
  const base = H * 0.58;
  const wave = Math.sin(t * Math.PI * 2.2) * H * 0.10;
  const drift = Math.sin(t * Math.PI * 0.8) * H * 0.04;
  return [x, base + wave + drift];
}

// Route waypoints for PLG (product-led) — curves through the upper half
function plgRoute(t: number, W: number, H: number): [number, number] {
  const x = t * W;
  const base = H * 0.32;
  const wave = Math.sin(t * Math.PI * 2.5 + 1) * H * 0.08;
  const drift = Math.cos(t * Math.PI * 0.6) * H * 0.05;
  return [x, base + wave + drift];
}

// Sample a route into points
function sampleRoute(
  fn: (t: number, W: number, H: number) => [number, number],
  W: number,
  H: number,
  n = 200
): [number, number][] {
  const pts: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    pts.push(fn(i / n, W, H));
  }
  return pts;
}

// Get position along sampled route at progress 0..1
function posOnRoute(pts: [number, number][], progress: number): [number, number] {
  const idx = Math.min(Math.floor(progress * (pts.length - 1)), pts.length - 2);
  const frac = progress * (pts.length - 1) - idx;
  return [
    pts[idx][0] + (pts[idx + 1][0] - pts[idx][0]) * frac,
    pts[idx][1] + (pts[idx + 1][1] - pts[idx][1]) * frac,
  ];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  pulseSpeed: number;
}

export default function AnimatedBlueprint() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let slgPts: [number, number][] = [];
    let plgPts: [number, number][] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      slgPts = sampleRoute(slgRoute, W, H);
      plgPts = sampleRoute(plgRoute, W, H);
      initParticles();
    };

    const initParticles = () => {
      const particles: Particle[] = [];
      // Scatter particles along both routes
      for (let i = 0; i < 40; i++) {
        const t = Math.random();
        const route = Math.random() > 0.5 ? slgRoute : plgRoute;
        const [bx, by] = route(t, W, H);
        particles.push({
          x: bx + (Math.random() - 0.5) * 50,
          y: by + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          r: Math.random() * 1.2 + 0.4,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.006 + Math.random() * 0.012,
        });
      }
      // Ambient fill
      for (let i = 0; i < 15; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() * 0.6 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.004 + Math.random() * 0.008,
        });
      }
      particlesRef.current = particles;
    };

    // ── Draw route path ──
    function drawRoute(
      pts: [number, number][],
      rgb: string,
      baseAlpha: number,
      dotProgress: number
    ) {
      if (!ctx) return;

      // Route line
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(pts[i][0], pts[i][1]);
      }
      ctx.strokeStyle = `rgba(${rgb},${baseAlpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Glow trail behind the dot
      const trailLen = 0.12;
      for (let i = 1; i < pts.length; i++) {
        const t = i / (pts.length - 1);
        const behind = dotProgress - t;
        if (behind > 0 && behind < trailLen) {
          const intensity = 1 - behind / trailLen;
          ctx.beginPath();
          ctx.moveTo(pts[i - 1][0], pts[i - 1][1]);
          ctx.lineTo(pts[i][0], pts[i][1]);
          ctx.strokeStyle = `rgba(${rgb},${intensity * 0.5})`;
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }
      }

      // Driving dot
      const [dx, dy] = posOnRoute(pts, dotProgress);

      // Outer glow
      const grad = ctx.createRadialGradient(dx, dy, 0, dx, dy, 22);
      grad.addColorStop(0, `rgba(${rgb},0.35)`);
      grad.addColorStop(1, `rgba(${rgb},0)`);
      ctx.beginPath();
      ctx.arc(dx, dy, 22, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(dx, dy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb},0.95)`;
      ctx.fill();
    }

    // ── Draw stop markers ──
    function drawStops(frame: number) {
      if (!ctx) return;

      for (let i = 0; i < stops.length; i++) {
        const sx = stops[i].x * W;

        // Vertical dashed line spanning the map
        ctx.setLineDash([3, 5]);
        ctx.strokeStyle = `rgba(${ACCENT_RGB},0.06)`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(sx, H * 0.12);
        ctx.lineTo(sx, H * 0.82);
        ctx.stroke();
        ctx.setLineDash([]);

        // Small diamond marker where routes cross the stop
        const slgY = slgRoute(stops[i].x, W, H)[1];
        const plgY = plgRoute(stops[i].x, W, H)[1];

        for (const y of [slgY, plgY]) {
          ctx.beginPath();
          ctx.moveTo(sx, y - 4);
          ctx.lineTo(sx + 4, y);
          ctx.lineTo(sx, y + 4);
          ctx.lineTo(sx - 4, y);
          ctx.closePath();
          ctx.fillStyle = `rgba(${ACCENT_RGB},0.15)`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${ACCENT_RGB},0.3)`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }

        // Label
        ctx.font = "600 11px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = `rgba(${ACCENT_RGB},0.30)`;
        ctx.fillText(stops[i].label.toUpperCase(), sx, H * 0.92);
      }

      // Directional chevrons between stops
      for (let i = 0; i < stops.length - 1; i++) {
        const x1 = stops[i].x * W + 24;
        const x2 = stops[i + 1].x * W - 24;
        const cy = H * 0.92 - 3;
        ctx.strokeStyle = `rgba(${ACCENT_RGB},0.08)`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(x1, cy);
        ctx.lineTo(x2 - 4, cy);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2 - 7, cy - 2.5);
        ctx.lineTo(x2 - 3, cy);
        ctx.lineTo(x2 - 7, cy + 2.5);
        ctx.stroke();
      }
    }

    // ── Draw motion labels ──
    function drawMotionLabels() {
      if (!ctx) return;

      // PLG label (top)
      ctx.font = "500 10px system-ui, sans-serif";
      ctx.textAlign = "left";
      ctx.fillStyle = `rgba(${PLG_RGB},0.35)`;
      ctx.fillText("PLG  ·  Product-Led Growth", W * 0.06, H * 0.12);

      // SLG label (bottom)
      ctx.fillStyle = `rgba(${SLG_RGB},0.35)`;
      ctx.fillText("SLG  ·  Sales-Led Growth", W * 0.06, H * 0.80);

      // Convergence hint near "Land"
      const cx = stops[4].x * W;
      const cy = (slgRoute(stops[4].x, W, H)[1] + plgRoute(stops[4].x, W, H)[1]) / 2;
      ctx.font = "500 9px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = `rgba(${ACCENT_RGB},0.18)`;
      ctx.fillText("CONVERGE", cx, cy);
    }

    const draw = () => {
      if (!ctx) return;
      const frame = frameRef.current;
      ctx.clearRect(0, 0, W, H);

      // ── Grid dots ──
      for (let gx = 20; gx < W; gx += 36) {
        for (let gy = 16; gy < H; gy += 36) {
          ctx.fillStyle = `rgba(${ACCENT_RGB},0.025)`;
          ctx.beginPath();
          ctx.arc(gx, gy, 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── Update particles ──
      const particles = particlesRef.current;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      // ── Particle connections ──
      const CONN_DIST = 70;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONN_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${ACCENT_RGB},${(1 - d / CONN_DIST) * 0.08})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // ── Draw particles ──
      for (const p of particles) {
        const glow = (Math.sin(p.pulse) + 1) / 2;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * (3 + glow * 3));
        grad.addColorStop(0, `rgba(${ACCENT_RGB},${0.06 * glow})`);
        grad.addColorStop(1, `rgba(${ACCENT_RGB},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (3 + glow * 3), 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_RGB},${0.15 + glow * 0.25})`;
        ctx.fill();
      }

      // ── Stop markers & labels ──
      drawStops(frame);

      // ── Routes ──
      // Dot progress: loops 0→1 over ~12 seconds at 60fps
      const CYCLE = 720;
      const progress = (frame % CYCLE) / CYCLE;
      // Offset the two dots so they don't overlap
      const slgProgress = progress;
      const plgProgress = (progress + 0.15) % 1;

      drawRoute(plgPts, PLG_RGB, 0.08, plgProgress);
      drawRoute(slgPts, SLG_RGB, 0.10, slgProgress);

      // ── Convergence lines near "Land" and "Expand" ──
      for (let si = 4; si <= 5; si++) {
        const sx = stops[si].x * W;
        const slgY = slgRoute(stops[si].x, W, H)[1];
        const plgY = plgRoute(stops[si].x, W, H)[1];
        ctx.setLineDash([2, 4]);
        ctx.strokeStyle = `rgba(${ACCENT_RGB},0.10)`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(sx, plgY + 6);
        ctx.lineTo(sx, slgY - 6);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // ── Motion labels ──
      drawMotionLabels();

      // ── Light sweep ──
      const SWEEP_W = W * 0.22;
      const sweepX = ((frame * 0.5) % (W + SWEEP_W * 2)) - SWEEP_W;
      const grad2 = ctx.createLinearGradient(sweepX - SWEEP_W, 0, sweepX + SWEEP_W, 0);
      grad2.addColorStop(0, "rgba(200,255,0,0)");
      grad2.addColorStop(0.5, "rgba(200,255,0,0.012)");
      grad2.addColorStop(1, "rgba(200,255,0,0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, W, H);

      frameRef.current++;
      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="mt-20 relative">
      <p
        className="text-xs uppercase tracking-widest mb-4"
        style={{ color: `rgba(${ACCENT_RGB},0.4)` }}
      >
        Blueprint — Go-to-Market Motion
      </p>

      <div
        className="rounded-2xl overflow-hidden relative"
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          border: `1px solid rgba(${ACCENT_RGB},0.08)`,
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full"
          style={{ display: "block", height: "320px" }}
          aria-hidden="true"
        />

        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 w-12 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(8,8,8,0.7), transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-12 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(8,8,8,0.7), transparent)" }}
        />
      </div>

      <p className="text-[10px] mt-3" style={{ color: "rgba(255,255,255,0.12)" }}>
        Simplified visualization — actual blueprints contain full property mapping, automation logic, and reporting layers.
      </p>
    </div>
  );
}
