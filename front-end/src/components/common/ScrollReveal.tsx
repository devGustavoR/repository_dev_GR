"use client";

import { gsap, ScrollTrigger } from "@/lib/gsapScroll";
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Distância (px) de onde os elementos partem no eixo Y. */
  y?: number;
  /** Delay (s) entre a entrada de cada filho direto. */
  stagger?: number;
  /** Ponto da viewport em que a animação dispara. */
  start?: string;
  /** Recria a animação quando esses valores mudam (ex: filtros, paginação). */
  deps?: unknown[];
}

export function ScrollReveal({
  children,
  className,
  y = 40,
  stagger = 0.1,
  start = "top 85%",
  deps = [],
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = Array.from(container.children);
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(targets, { autoAlpha: 0, y });

      ScrollTrigger.batch(targets, {
        start,
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger,
          }),
      });
    }, container);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
