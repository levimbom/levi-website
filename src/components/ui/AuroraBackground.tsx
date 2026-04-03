"use client";

import { useEffect, useRef } from "react";

interface Beam {
  color: string;
  rgb: string;
  baseY: number;       // 0..1 fraction of height
  amplitude: number;   // 0..1 fraction of height
  speed: number;
  phase: number;
  angle: number;       // radians — slight tilt
  thickness: number;   // core line width
  glowWidth: number;
  alpha: number;
}

const BEAMS: Beam[] = [
  { color: "#00e5ff", rgb: "0,229,255",    baseY: 0.18, amplitude: 0.12, speed: 0.35, phase: 0,            angle: 0.06,  thickness: 1.5, glowWidth: 120, alpha: 0.9 },
  { color: "#7c3aed", rgb: "124,58,237",   baseY: 0.38, amplitude: 0.16, speed: 0.28, phase: Math.PI * 0.7, angle: -0.05, thickness: 1.2, glowWidth: 140, alpha: 0.85 },
  { color: "#c8ff00", rgb: "200,255,0",    baseY: 0.55, amplitude: 0.10, speed: 0.42, phase: Math.PI * 1.3, angle: 0.04,  thickness: 1.0, glowWidth: 100, alpha: 0.7 },
  { color: "#ff3cac", rgb: "255,60,172",   baseY: 0.72, amplitude: 0.14, speed: 0.22, phase: Math.PI * 1.9, angle: -0.07, thickness: 1.5, glowWidth: 130, alpha: 0.8 },
  { color: "#3b82f6", rgb: "59,130,246",   baseY: 0.88, amplitude: 0.09, speed: 0.50, phase: Math.PI * 0.4, angle: 0.05,  thickness: 1.0, glowWidth: 110, alpha: 0.75 },
];

function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam, w: number, h: number, t: number) {
  const cy = (beam.baseY + beam.amplitude * Math.sin(t * beam.speed + beam.phase)) * h;
  const tilt = Math.tan(beam.angle) * w;

  const y0 = cy - tilt / 2;
  const y1 = cy + tilt / 2;

  // Glow layers — wide to narrow, outermost first
  const layers = [
    { width: beam.glowWidth * 1.8, alpha: 0.018 },
    { width: beam.glowWidth,       alpha: 0.045 },
    { width: beam.glowWidth * 0.4, alpha: 0.12  },
    { width: beam.glowWidth * 0.12,alpha: 0.35  },
    { width: beam.thickness,       alpha: beam.alpha },
  ];

  for (const layer of layers) {
    const grad = ctx.createLinearGradient(0, y0, 0, y1);
    grad.addColorStop(0, `rgba(${beam.rgb},0)`);
    grad.addColorStop(0.15, `rgba(${beam.rgb},${layer.alpha})`);
    grad.addColorStop(0.5,  `rgba(${beam.rgb},${layer.alpha})`);
    grad.addColorStop(0.85, `rgba(${beam.rgb},${layer.alpha})`);
    grad.addColorStop(1,    `rgba(${beam.rgb},0)`);

    ctx.beginPath();
    ctx.moveTo(-w * 0.05, y0);
    ctx.lineTo(w * 1.05, y1);
    ctx.strokeStyle = `rgba(${beam.rgb},${layer.alpha})`;
    ctx.lineWidth = layer.width;
    ctx.lineCap = "round";
    ctx.stroke();
  }
}

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      t += 0.008;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      for (const beam of BEAMS) {
        drawBeam(ctx, beam, w, h, t);
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
