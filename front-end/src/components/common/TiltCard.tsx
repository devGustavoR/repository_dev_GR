"use client";

import { gsap } from "@/lib/gsap";
import { useEffect, useRef } from "react";

/**
 * Aplica um leve tilt 3D ao card conforme o cursor se move sobre ele,
 * voltando ao repouso ao sair.
 */
export function TiltCard({
  children,
  className,
  max = 8,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const quickRotateX = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickRotateY = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    quickRotateX.current = gsap.quickTo(el, "rotateX", {
      duration: 0.4,
      ease: "power3.out",
    });
    quickRotateY.current = gsap.quickTo(el, "rotateY", {
      duration: 0.4,
      ease: "power3.out",
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    quickRotateY.current?.(px * max * 2);
    quickRotateX.current?.(-py * max * 2);
  };

  const handleMouseLeave = () => {
    quickRotateX.current?.(0);
    quickRotateY.current?.(0);
  };

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <div
        ref={ref}
        style={{ transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
  );
}
