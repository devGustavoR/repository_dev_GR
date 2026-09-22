"use client";

import { useEffect } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    // Carrega GSAP/Lenis sob demanda, fora do bundle principal do layout
    // (que roda em toda página), reduzindo JS baixado antes de ser usado.
    Promise.all([import("@/lib/gsap"), import("lenis")]).then(
      ([{ gsap, ScrollTrigger }, { default: Lenis }]) => {
        if (cancelled) return;

        const lenis = new Lenis({
          autoRaf: false,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time: number) => {
          lenis.raf(time * 1000);
        };
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        cleanup = () => {
          gsap.ticker.remove(raf);
          lenis.destroy();
        };
      },
    );

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
