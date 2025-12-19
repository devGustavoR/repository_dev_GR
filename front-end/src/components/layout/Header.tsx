"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projetos", href: "/projects" },
  { label: "Experiência", href: "/experiencia" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <>
      {/* HEADER FIXO */}
      <header
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 transition-opacity ${
          isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        } bg-obsidian/95`}
      >
        <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="size-8 flex items-center justify-center bg-white/5 rounded-md border border-white/10">
              <span className="material-symbols-outlined text-xl text-white">
                terminal
              </span>
            </div>
            <h2 className="text-white text-lg font-bold">
              GUSTAVO<span className="text-primary">.DEV</span>
            </h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href
                    ? "text-primary font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={PORTFOLIO_DATA.links.linkedin}
              target="_blank"
              className="px-4 py-1.5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/5"
            >
              LinkedIn
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white"
            aria-label="Abrir menu"
          >
            <span className="material-symbols-outlined text-4xl">menu</span>
          </button>
        </div>
      </header>

      {/* OVERLAY MOBILE */}
      <div
        className={`fixed inset-0 z-100 bg-obsidian flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Botão fechar */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-white"
          aria-label="Fechar menu"
        >
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>

        {/* Navegação */}
        <nav className="flex flex-col items-center gap-14">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={`text-4xl font-black tracking-tighter transition-transform active:scale-95 ${
                pathname === item.href ? "text-primary" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="w-12 h-px bg-white/10" />

          <a
            href={PORTFOLIO_DATA.links.linkedin}
            target="_blank"
            className="flex items-center gap-3 text-slate-400 text-lg hover:text-white"
          >
            <span className="material-symbols-outlined">link</span>
            LinkedIn
          </a>
        </nav>

        {/* Footer Tag */}
        <div className="absolute bottom-10 text-slate-700 font-mono text-[10px] tracking-[0.35em] uppercase">
          Gustavo Ribeiro // Portfolio
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20" aria-hidden />
    </>
  );
};
