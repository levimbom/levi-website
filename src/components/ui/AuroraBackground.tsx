"use client";

import { useEffect, useRef } from "react";

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
      t += 0.003;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Draw 3 overlapping light waves, each drifting at different speeds
      const waves = [
        { x: w * (0.3 + Math.sin(t * 0.7) * 0.25), y: h * (0.2 + Math.cos(t * 0.5) * 0.15), r: w * 0.55, color: "38,99,235",   alpha: 0.055 }, // blue
        { x: w * (0.7 + Math.cos(t * 0.6) * 0.2),  y: h * (0.5 + Math.sin(t * 0.4) * 0.2),  r: w * 0.5,  color: "124,58,237",  alpha: 0.045 }, // violet
        { x: w * (0.5 + Math.sin(t * 0.5) * 0.3),  y: h * (0.8 + Math.cos(t * 0.8) * 0.1),  r: w * 0.45, color: "200,255,0",   alpha: 0.025 }, // accent lime — very subtle
      ];

      for (const wave of waves) {
        const grad = ctx.createRadialGradient(wave.x, wave.y, 0, wave.x, wave.y, wave.r);
        grad.addColorStop(0,   `rgba(${wave.color},${wave.alpha})`);
        grad.addColorStop(0.5, `rgba(${wave.color},${wave.alpha * 0.4})`);
        grad.addColorStop(1,   `rgba(${wave.color},0)`);
        ctx.beginPath();
        ctx.ellipse(wave.x, wave.y, wave.r, wave.r * 0.55, t * 0.1, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
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
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 1,
      }}
    />
  );
}
