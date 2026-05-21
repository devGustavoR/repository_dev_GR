"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projetos", href: "/projects" },
  { label: "Experiência", href: "/experiencia" },
  { label: "Serviços", href: "/servicos" }, // Novo item
];

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-obsidian/80 backdrop-blur-lg border-b border-white/5 py-3"
            : "bg-transparent py-5"
        } ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="px-6 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-9 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
              <span className="material-symbols-outlined text-xl text-white group-hover:text-primary transition-colors">
                terminal
              </span>
            </div>
            <h2 className="text-white text-base md:text-lg font-black tracking-tighter uppercase">
              Gustavo<span className="text-primary">.Dev</span>
            </h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 border-r border-white/10 pr-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative group ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-1 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]" />
                  )}
                </Link>
              ))}
            </div>

            {/* Links de Ação */}
            <div className="flex items-center gap-4">
              <a
                href={PORTFOLIO_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 text-slate-400 hover:text-[#0a66c2] transition-colors"
                title="LinkedIn"
              >
                <LinkedInIcon className="size-5" />
              </a>

              <Link
                href="/servicos#orcamento"
                className="px-5 py-2.5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              >
                Orçamento
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden size-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </header>

      {/* OVERLAY MOBILE */}
      <div
        className={`fixed inset-0 z-[100] bg-obsidian transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-end p-8">
          <button
            onClick={closeMenu}
            className="size-12 flex items-center justify-center rounded-full bg-white/5 text-white"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center h-[70vh] gap-8">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`text-4xl font-black tracking-tighter transition-all ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } ${pathname === item.href ? "text-primary italic" : "text-white"}`}
            >
              {item.label}
            </Link>
          ))}

          <div className="h-px w-12 bg-white/10 my-4" />

          {/* Botão de Orçamento no Mobile */}
          <Link
            href="/servicos#orcamento"
            onClick={closeMenu}
            className="px-10 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20"
          >
            Solicitar Orçamento
          </Link>

          <a
            href={PORTFOLIO_DATA.links.linkedin}
            target="_blank"
            className="group flex items-center gap-3 text-slate-400 text-sm mt-4"
          >
            <LinkedInIcon className="size-5 group-hover:text-[#0a66c2] transition-colors" />
            <span className="group-hover:text-white transition-colors">
              LinkedIn
            </span>
          </a>
        </nav>
      </div>

      <div className="h-20 md:h-24" aria-hidden />
    </>
  );
};
