"use client";

import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = [
  "Todos",
  "Backend",
  "Full Stack",
  "Segurança & IA",
  "DevOps",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Lógica de Filtragem: Se for "Todos", mostra tudo, senão filtra pela categoria
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "Todos") return true;
    return project.category.includes(activeFilter);
  });

  return (
    <main className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 -z-10 h-125 w-125 rounded-full bg-primary/5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-75 w-75 rounded-full bg-blue-500/5 blur-[100px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              Portfolio 2024-2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Engenharia de <br />
              <span className="text-primary">Impacto Real</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Uma seleção de desafios técnicos resolvidos com precisão. Focando
              na invisível, porém crucial, camada de lógica, dados e
              infraestrutura.
            </p>
          </div>

          {/* Filtros Funcionais */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20 border-primary"
                    : "bg-white/5 text-slate-400 border-white/10 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PROJETOS (Renderizando o array filtrado) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group block h-full animate-in fade-in zoom-in duration-500"
              >
                <article
                  className={`project-card relative flex flex-col h-full overflow-hidden rounded-2xl bg-[#1a1010]/80 border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] ${project.border}`}
                >
                  {/* Área Visual */}
                  <div
                    className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div
                      className={`p-6 rounded-full bg-black/20 backdrop-blur-md border border-white/10 ${project.iconColor} transform group-hover:scale-110 transition-transform duration-500`}
                    >
                      <span className="material-symbols-outlined text-5xl">
                        {project.icon}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-1 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-auto border-t border-white/5 pt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>
                        {project.stats}
                      </span>
                      <span className="material-symbols-outlined text-slate-500 text-sm group-hover:translate-x-1 transition-transform">
                        chevron_right
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-500 italic">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
