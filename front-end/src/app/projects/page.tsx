import { PROJECTS } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background Decorativo (Herdado do Tema) */}
      <div className="absolute top-0 right-0 -z-10 h-125 w-125 rounded-full bg-primary/5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-75 w-75 rounded-full bg-blue-500/5 blur-[100px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              Portfolio 2024-2025
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

          {/* Filtros Visuais (Estéticos) */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium shadow-lg shadow-primary/20 border border-primary">
              Todos
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/5 text-slate-400 text-sm font-medium border border-white/10 hover:border-primary/50 hover:text-primary transition-all">
              Backend
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/5 text-slate-400 text-sm font-medium border border-white/10 hover:border-primary/50 hover:text-primary transition-all">
              DevOps
            </button>
          </div>
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            // ENCAPSULAMENTO COM LINK AQUI
            <Link
              key={project.id}
              href={project.href}
              className="group block h-full"
            >
              <article
                className={`project-card relative flex flex-col h-full overflow-hidden rounded-2xl bg-[#1a1010]/80 border border-white/5 shadow-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] ${project.border}`}
              >
                {/* Área Visual Abstrata (Substitui Prints) */}
                <div
                  className={`relative h-56 overflow-hidden bg-linear-to-br ${project.color} flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                  {/* Ícone Central Grande */}
                  <div
                    className={`p-6 rounded-full bg-black/20 backdrop-blur-md border border-white/10 ${project.iconColor} transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    <span className="material-symbols-outlined text-5xl">
                      {project.icon}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white group-hover:bg-primary group-hover:border-primary transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-lg">
                        arrow_outward
                      </span>
                    </div>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                      {project.category}
                    </span>
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-slate-400 ring-1 ring-inset ring-white/10"
                      >
                        {tech}
                      </span>
                    ))}
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
          ))}
        </div>

        {/* Paginação (Visual) */}
        <div className="mt-16 flex items-center justify-center gap-4 opacity-50">
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-500 hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-sm">west</span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">
            1
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-500 hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-sm">east</span>
          </button>
        </div>
      </div>
    </main>
  );
}
