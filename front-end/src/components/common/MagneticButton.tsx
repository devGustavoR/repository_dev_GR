"use client";

import { gsap } from "@/lib/gsap";
import { useEffect, useRef } from "react";

/**
 * Envolve um botão/link e o "atrai" sutilmente em direção ao cursor
 * enquanto o mouse está por perto, voltando ao lugar ao sair.
 */
export function MagneticButton({
  children,
  strength = 0.35,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const quickX = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickY = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    quickX.current = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    quickY.current = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    quickX.current?.(relX * strength);
    quickY.current?.(relY * strength);
  };

  const handleMouseLeave = () => {
    quickX.current?.(0);
    quickY.current?.(0);
  };

  return (
    <div
      ref={ref}
      className={`inline-block will-change-transform ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
