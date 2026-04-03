"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (opts: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export default function CalendlyEmbed() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      window.Calendly?.initBadgeWidget({
        url: "https://calendly.com/levimbom/30min",
        text: "Schedule time with me",
        color: "#a0ce0c",
        textColor: "#ffffff",
        branding: true,
      });
    };
    document.body.appendChild(script);

    // Auto-popup at 40% scroll on homepage
    let popupTriggered = false;
    const handleScroll = () => {
      if (popupTriggered) return;
      if (window.location.pathname !== "/") return;

      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent >= 0.4) {
        popupTriggered = true;
        window.Calendly?.initPopupWidget({
          url: "https://calendly.com/levimbom/30min",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeChild(script);
      document.head.removeChild(link);
      const badge = document.querySelector(".calendly-badge-widget");
      if (badge) badge.remove();
    };
  }, []);

  return null;
}
