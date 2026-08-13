"use client";

import { gsap } from "@/lib/gsap";
import { useEffect, useRef } from "react";

/**
 * Anima cada filho direto (ex: blobs de blur decorativos) com um flutuar
 * lento e contínuo, dando profundidade ao fundo sem chamar atenção.
 */
export function AmbientGlow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = Array.from(container.children);
    const ctx = gsap.context(() => {
      targets.forEach((target, index) => {
        gsap.to(target, {
          x: index % 2 === 0 ? 30 : -30,
          y: index % 2 === 0 ? -20 : 20,
          scale: 1.08,
          duration: 8 + index * 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
