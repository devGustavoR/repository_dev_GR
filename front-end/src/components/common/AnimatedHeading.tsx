"use client";

import { gsap } from "@/lib/gsap";
import { useEffect, useRef } from "react";

/**
 * Título com reveal por caractere ao montar, dando impacto tipográfico
 * ao primeiro contato sem depender de elementos 3D.
 *
 * O SplitText é carregado sob demanda (import dinâmico) porque é o maior
 * plugin do GSAP e só esse componente precisa dele.
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

    let split: InstanceType<
      typeof import("gsap/SplitText").SplitText
    > | null = null;
    let ctx: gsap.Context | null = null;
    let cancelled = false;

    import("gsap/SplitText").then(({ SplitText }) => {
      if (cancelled || !el) return;

      gsap.registerPlugin(SplitText);
      split = new SplitText(el, { type: "chars" });
      ctx = gsap.context(() => {
        // Anima só a posição (sem opacity) para não atrasar o LCP: o
        // navegador já pinta o texto totalmente opaco no primeiro frame,
        // só deslizando para a posição final.
        gsap.fromTo(
          split!.chars,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.02,
          },
        );
      });
    });

    return () => {
      cancelled = true;
      ctx?.revert();
      split?.revert();
    };
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}
