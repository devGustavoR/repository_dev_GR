"use client";

import { useEffect } from "react";

/**
 * Injeta um <link rel="stylesheet"> depois da hidratação, para que o
 * navegador não trate o download como bloqueante da renderização inicial.
 * Troca um pequeno atraso no aparecimento dos ícones por um FCP mais rápido.
 */
export function DeferredStylesheet({ href }: { href: string }) {
  useEffect(() => {
    if (document.querySelector(`link[href="${href}"]`)) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }, [href]);

  return null;
}
