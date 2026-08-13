"use client";

import { gsap } from "@/lib/gsap";
import { useEffect, useRef } from "react";

/**
 * Linha vertical que se "desenha" de cima para baixo conforme o usuário
 * rola até ela, acompanhando o scroll (scrub).
 */
export function SelfDrawLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 65%",
            scrub: 0.6,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className} style={{ transformOrigin: "top" }} />
  );
}
