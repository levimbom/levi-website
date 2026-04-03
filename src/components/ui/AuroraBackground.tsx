"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  speed: number;
  offset: number;
  layer: number; // 0 = back, 1 = mid, 2 = front
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
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;

    const COLS = 120;
    const ROWS = 40;
    const LAYERS = 3;

    function initParticles() {
      particles = [];
      for (let layer = 0; layer < LAYERS; layer++) {
        const layerCols = COLS - layer * 20;
        const layerRows = ROWS - layer * 8;
        for (let i = 0; i < layerCols; i++) {
          for (let j = 0; j < layerRows; j++) {
            const baseX = (i / (layerCols - 1)) * w * 1.2 - w * 0.1;
            const baseY = h * 0.3 + (j / (layerRows - 1)) * h * 0.4;
            particles.push({
              x: baseX,
              y: baseY,
              baseX,
              baseY,
              speed: 0.3 + layer * 0.15 + Math.random() * 0.1,
              offset: (i * 0.08) + (j * 0.12) + layer * 1.5,
              layer,
            });
          }
        }
      }
    }

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      w = canvas.width = parent?.offsetWidth ?? window.innerWidth;
      h = canvas.height = parent?.offsetHeight ?? window.innerHeight;
      initParticles();
    }

    function draw() {
      if (!ctx) return;
      t += 0.006;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // Multi-frequency wave displacement
        const wave1 = Math.sin(t * p.speed + p.offset) * 40;
        const wave2 = Math.sin(t * p.speed * 0.7 + p.offset * 1.3) * 25;
        const wave3 = Math.sin(t * p.speed * 1.4 + p.offset * 0.6) * 15;

        p.x = p.baseX + Math.sin(t * 0.3 + p.offset * 0.5) * 3;
        p.y = p.baseY + wave1 + wave2 + wave3;

        // Fade at edges horizontally
        const edgeFade = Math.min(
          p.x / (w * 0.15),
          (w - p.x) / (w * 0.15),
          1
        );

        // Layer-based sizing and opacity
        const layerAlpha = [0.06, 0.12, 0.25][p.layer];
        const layerSize = [0.8, 1.2, 1.6][p.layer];

        const alpha = Math.max(0, layerAlpha * Math.max(0, edgeFade));

        // Slight brightness variation per particle
        const brightness = 200 + Math.sin(t * 0.5 + p.offset) * 55;

        ctx.beginPath();
        ctx.arc(p.x, p.y, layerSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${brightness},${brightness},${Math.min(255, brightness + 20)},${alpha})`;
        ctx.fill();
      }

      // Draw connecting glow ribbons between rows for the front layer
      ctx.globalCompositeOperation = "lighter";

      for (let layer = 1; layer < LAYERS; layer++) {
        const layerParticles = particles.filter((p) => p.layer === layer);
        const layerCols = COLS - layer * 20;
        const layerRows = ROWS - layer * 8;

        for (let j = 0; j < layerRows; j++) {
          const rowParticles = layerParticles.slice(
            j * layerCols,
            (j + 1) * layerCols
          );
          if (rowParticles.length < 2) continue;

          // Only draw every few rows
          if (j % (layer === 1 ? 4 : 3) !== 0) continue;

          const ribbonAlpha = layer === 1 ? 0.008 : 0.015;

          ctx.beginPath();
          ctx.moveTo(rowParticles[0].x, rowParticles[0].y);

          for (let i = 1; i < rowParticles.length - 1; i += 2) {
            const xc = (rowParticles[i].x + rowParticles[i + 1].x) / 2;
            const yc = (rowParticles[i].y + rowParticles[i + 1].y) / 2;
            ctx.quadraticCurveTo(rowParticles[i].x, rowParticles[i].y, xc, yc);
          }

          ctx.strokeStyle = `rgba(220,225,255,${ribbonAlpha})`;
          ctx.lineWidth = layer === 1 ? 1.5 : 2;
          ctx.stroke();
        }
      }

      ctx.globalCompositeOperation = "source-over";

      animId = requestAnimationFrame(draw);
    }

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
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
