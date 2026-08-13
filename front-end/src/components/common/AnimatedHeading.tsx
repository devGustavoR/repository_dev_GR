"use client";

import { gsap, SplitText } from "@/lib/gsap";
import { useEffect, useRef } from "react";

/**
 * Título com reveal por caractere ao montar, dando impacto tipográfico
 * ao primeiro contato sem depender de elementos 3D.
 */
export function AnimatedHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const split = new SplitText(el, { type: "chars" });
    const ctx = gsap.context(() => {
      gsap.fromTo(
        split.chars,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.02,
        },
      );
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}
