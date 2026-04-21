"use client";

export default function ExperienceAndStack() {
  return (
    <main className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 -z-10 h-125 w-125 rounded-full bg-primary/5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-125 w-125 rounded-full bg-blue-500/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* Header da Página */}
        <div className="flex flex-col gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-primary"></span>
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
              Carreira & Tech Stack
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            Trajetória{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Profissional
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A evolução cronológica de Técnico de Suporte a Engenheiro de
            Software, construindo soluções de{" "}
            <span className="text-white font-medium italic text-nowrap">
              alta criticidade
            </span>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* COLUNA ESQUERDA: ARSENAL TÉCNICO */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-1000">
              {/* Card de Foco Técnico */}
              <div className="rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-7xl text-white">
                    database
                  </span>
                </div>

                <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                  Especialização
                </h3>

                <div className="flex flex-col gap-7">
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-slate-300 text-[10px] font-black uppercase tracking-widest">
                        Backend & API
                      </span>
                      <span className="text-primary font-mono text-sm">
                        60%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-slate-300 text-[10px] font-black uppercase tracking-widest">
                        DevOps & Infra
                      </span>
                      <span className="text-blue-400 font-mono text-sm">
                        25%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-slate-300 text-[10px] font-black uppercase tracking-widest">
                        Legacy Migration
                      </span>
                      <span className="text-emerald-400 font-mono text-sm">
                        15%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase text-slate-500 mb-4 tracking-[0.2em]">
                    Tech Stack Diária
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["NestJS", "Docker", "Oracle", "PostgreSQL", "Java"].map(
                      (tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-slate-400 hover:text-white hover:border-primary/30 transition-all"
                        >
                          {tool}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Stats Rápidos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
                  <p className="text-3xl font-black text-white italic">4+</p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">
                    Anos Exp.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
                  <p className="text-3xl font-black text-white italic">Full</p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">
                    Cycle Dev
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: TIMELINE */}
          <div className="lg:col-span-8 flex flex-col gap-12 relative animate-in fade-in slide-in-from-right-4 duration-1000">
            {/* Linha vertical conectora */}
            <div className="absolute left-6.5 md:left-7.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-blue-500/30 to-transparent"></div>

            {/* 1. Desenvolvedor Júnior (Atual) */}
            <div className="relative pl-16 md:pl-20 group">
              <div className="absolute left-4 md:left-5 top-0 z-10">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-primary border-4 border-obsidian"></span>
                </span>
              </div>

              <div className="flex flex-col gap-4 rounded-3xl border border-primary/20 bg-primary/[0.02] p-8 hover:bg-primary/[0.04] transition-all group-hover:translate-x-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-primary transition-colors">
                      Desenvolvedor de Software Júnior
                    </h3>
                    <p className="text-primary font-bold text-sm uppercase tracking-widest mt-1">
                      Fundação José Silveira
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 w-fit">
                    Dez 2025 - Presente
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                  Responsável pelo ciclo completo de desenvolvimento. Atuação em
                  modernização de arquitetura e manutenção de sistemas
                  mission-critical.
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs text-slate-400">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">
                      rocket_launch
                    </span>{" "}
                    APIs NestJS/Node.js
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">
                      layers
                    </span>{" "}
                    Docker: Redução de 50% no setup
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">
                      database
                    </span>{" "}
                    Oracle, PostgreSQL e MySQL
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">
                      history
                    </span>{" "}
                    Sustentação Java & PowerBuilder
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Suporte N1 (Transição para Dev) - ESSA É A PARTE IMPORTANTE */}
            <div className="relative pl-16 md:pl-20 group">
              <div className="absolute left-5.5 md:left-6.5 top-0 size-3 rounded-full border-2 border-obsidian bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all z-10"></div>

              <div className="flex flex-col gap-4 rounded-3xl border border-blue-500/20 bg-blue-500/[0.02] p-8 hover:bg-blue-500/[0.04] transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Suporte N1{" "}
                      <span className="text-blue-400 font-light italic">
                        / Atuação em Desenvolvimento
                      </span>
                    </h3>
                    <p className="text-blue-500/80 text-[10px] font-black uppercase tracking-widest mt-1">
                      Fundação José Silveira
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Dez 2024 - Dez 2025
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Fase de transição onde assumi a implementação de APIs RESTful
                  e a orquestração de containers com Docker, padronizando o
                  deploy de novos projetos.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["NestJS", "Docker", "Java Legacy", "DB Migration"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[9px] font-bold border border-blue-500/10 italic"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* 3. Suporte Nível 1 (Infra) */}
            <div className="relative pl-16 md:pl-20 group opacity-70 hover:opacity-100 transition-opacity">
              <div className="absolute left-6 md:left-7 top-0 size-2.5 rounded-full bg-slate-700 z-10"></div>
              <div className="flex flex-col gap-3 rounded-3xl border border-white/5 bg-transparent p-8">
                <div className="flex justify-between items-center">
                  <h4 className="text-slate-300 font-bold">Suporte Nível 1</h4>
                  <span className="text-[10px] font-mono text-slate-600 uppercase">
                    2023 - 2024
                  </span>
                </div>
                <p className="text-slate-500 text-sm">
                  Gestão de Active Directory, GLPI e suporte a sistemas
                  hospitalares (MV2000). Garantia de disponibilidade para
                  serviços de alta criticidade.
                </p>
              </div>
            </div>

            {/* 4. Técnico de Suporte (Início) */}
            <div className="relative pl-16 md:pl-20 group opacity-40 hover:opacity-100 transition-opacity">
              <div className="absolute left-6.5 md:left-7.5 top-0 size-1.5 rounded-full bg-slate-800 z-10"></div>
              <div className="pl-8 py-2">
                <h4 className="text-slate-500 font-bold text-sm uppercase tracking-widest">
                  Técnico de Suporte ao Usuário
                </h4>
                <p className="text-slate-600 text-xs mt-1">
                  UNINASSAU // 2022 - 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
