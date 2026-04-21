"use client";

import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import { useMemo, useState } from "react";

// Categorias simplificadas para os botões
const CATEGORIES = [
  "Todos",
  "SaaS",
  "Full Stack",
  "IA & Segurança",
  "E-commerce",
  "UX & Performance",
];

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  // Lógica de Filtragem Inteligente
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      if (activeFilter === "Todos") return true;

      const categoryMatch = project.category
        .toLowerCase()
        .includes(activeFilter.toLowerCase().split(" ")[0]);
      // Se você clicar em "IA & Segurança", ele vai procurar por "IA" ou "Segurança" nos dados
      const keywordMatch = activeFilter
        .split(" & ")
        .some((word) =>
          project.category.toLowerCase().includes(word.toLowerCase()),
        );

      return categoryMatch || keywordMatch;
    });
  }, [activeFilter]);

  // Paginação
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setCurrentPage(1);
  };

  return (
    <main className="relative min-h-screen py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho e Filtros */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Engenharia de <span className="text-primary">Impacto Real</span>
            </h1>

            <div className="flex flex-wrap gap-2 mt-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                    activeFilter === cat
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                      : "bg-white/5 text-slate-400 border-white/10 hover:border-primary/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[450px]">
          {paginatedProjects.map((project) => (
            <Link key={project.id} href={project.href} className="group block">
              <article
                className={`relative flex flex-col h-full rounded-2xl bg-[#1a1010]/80 border border-white/5 transition-all duration-500 hover:-translate-y-2 ${project.border}`}
              >
                {/* Visual */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden rounded-t-2xl`}
                >
                  {/* Badge de WIP (Work in Progress) */}
                  {"isWorkInProgress" in project &&
                    project.isWorkInProgress && (
                      <div className="absolute top-4 right-4 z-10 bg-amber-500/20 text-amber-500 border border-amber-500/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                        Em desenvolvimento
                      </div>
                    )}

                  <span className="material-symbols-outlined text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500 {project.iconColor}">
                    {project.icon}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-1 flex-col">
                  <div className="flex gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-3 mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techs.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techs.length > 3 && (
                      <span className="text-[10px] text-slate-500">
                        +{project.techs.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        check_circle
                      </span>
                      {project.stats}
                    </span>
                    <span className="material-symbols-outlined text-slate-500 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg transition-all ${
                  currentPage === i + 1
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white/5 text-slate-500 hover:bg-white/10"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
