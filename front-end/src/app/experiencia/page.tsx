export default function ExperienceAndStack() {
  return (
    <main className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background (Mantendo consistência com o tema) */}
      <div className="absolute top-0 right-0 -z-10 h-125 w-125 rounded-full bg-primary/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* Header da Página */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Carreira & Tech
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Trajetória <span className="text-primary">Profissional</span>
          </h1>
          <p className="text-slate-400 text-base max-w-2xl">
            A evolução cronológica de Técnico de Suporte a Engenheiro de
            Software Sênior, construindo soluções de alta criticidade.
          </p>
        </div>

        {/* Layout de Grid: Esquerda (Stats) vs Direita (Timeline) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* =================================================================================
             COLUNA ESQUERDA: ARSENAL TÉCNICO (STICKY)
             Mantivemos os gráficos pois eles refletem seu estado ATUAL (Sênior)
             ================================================================================= */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="sticky top-24 flex flex-col gap-6">
              {/* Card de Distribuição de Skills */}
              <div className="rounded-xl border border-white/5 bg-[#1a1010] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">
                    donut_small
                  </span>
                  <p className="text-white text-lg font-bold">Foco Atual</p>
                </div>

                <div className="flex flex-col gap-6 py-4">
                  {/* Backend */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300 font-medium">
                        Backend & API
                      </span>
                      <span className="text-primary font-bold">60%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  {/* DevOps */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300 font-medium">
                        DevOps & Infra
                      </span>
                      <span className="text-primary font-bold">25%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary/70 rounded-full"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>
                  {/* Legacy */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300 font-medium">
                        Legacy Migration
                      </span>
                      <span className="text-primary font-bold">15%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary/40 rounded-full"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Tags Rápidas */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-xs font-bold uppercase text-slate-500 mb-4 tracking-wider">
                    Ferramentas Diárias
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "NestJS",
                      "Docker",
                      "Oracle",
                      "PostgreSQL",
                      "PowerBuilder",
                      "Java",
                    ].map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded bg-white/5 border border-white/5 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card de Estatísticas */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/5 bg-[#1a1010] p-4 text-center">
                  <p className="text-3xl font-bold text-white">4+</p>
                  <p className="text-xs text-slate-500 uppercase">Anos Exp.</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#1a1010] p-4 text-center">
                  <p className="text-3xl font-bold text-white">Full</p>
                  <p className="text-xs text-slate-500 uppercase">Cycle Dev</p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================================================
             COLUNA DIREITA: TIMELINE DE EXPERIÊNCIA (ATUALIZADA)
             ================================================================================= */}
          <div className="lg:col-span-8 flex flex-col gap-8 relative">
            {/* Linha vertical conectora */}
            <div className="absolute left-6.75 top-4 bottom-4 w-0.5 bg-linear-to-b from-primary via-white/10 to-transparent md:left-8"></div>

            {/* JOB 1: Desenvolvedor Júnior (Atual) */}
            <div className="relative pl-20 md:pl-24 group">
              {/* Marcador Ativo */}
              <div className="absolute left-4 md:left-5 top-0 size-6 rounded-full border-4 border-obsidian bg-primary shadow-[0_0_20px_rgba(234,42,51,0.5)] z-10"></div>

              <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-[#1a1010] p-6 hover:border-primary/40 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      Desenvolvedor de Software Júnior
                    </h3>
                    <p className="text-primary font-medium">
                      Fundação José Silveira
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded w-fit">
                    Dez 2025 - Presente
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Atuação no ciclo completo (Full Cycle). Combinei a manutenção
                  de sistemas legados com a modernização da arquitetura
                  tecnológica. Responsável por garantir a qualidade do código,
                  documentação e integração entre sistemas.
                </p>

                {/* Highlights (Pontos chave do CV) */}
                <ul className="space-y-2 mt-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>{" "}
                    <strong>Modernização:</strong> APIs RESTful escaláveis com
                    NestJS/Node.js.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>{" "}
                    <strong>DevOps:</strong> Liderança na adoção de Docker
                    (Redução de 50% no setup).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>{" "}
                    <strong>Legado:</strong> Sustentação crítica em Java e
                    PowerBuilder.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>{" "}
                    <strong>DBA:</strong> Scripts complexos para Oracle,
                    PostgreSQL e MySQL.
                  </li>
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                  {[
                    "NestJS",
                    "Node.js",
                    "Docker",
                    "Java",
                    "PowerBuilder",
                    "Oracle",
                    "PostgreSQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* JOB 2: Suporte N1 com Atuação em Dev */}
            <div className="relative pl-20 md:pl-24 group">
              <div className="absolute left-4 md:left-5 top-0 size-4 rounded-full border-2 border-obsidian bg-slate-600 group-hover:bg-primary transition-colors z-10"></div>

              <div className="flex flex-col gap-4 rounded-xl border border-white/5 bg-[#1a1010]/50 p-6 hover:bg-[#1a1010] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Suporte N1 (Atuação em Desenvolvimento)
                    </h3>
                    <p className="text-slate-400 font-medium">
                      Fundação José Silveira
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded w-fit">
                    Dez 2024 - Dez 2025
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Fase de transição onde assumi responsabilidades de
                  desenvolvimento. Implementei APIs RESTful e liderei a
                  orquestração de containers, padronizando o deploy e reduzindo
                  tempo de configuração em 50%.
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300 border border-white/5">
                    NestJS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300 border border-white/5">
                    Docker
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300 border border-white/5">
                    Java Legacy
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300 border border-white/5">
                    DB Migration
                  </span>
                </div>
              </div>
            </div>

            {/* JOB 3: Suporte N1 (Infra) */}
            <div className="relative pl-20 md:pl-24 group opacity-80 hover:opacity-100 transition-opacity">
              <div className="absolute left-4 md:left-5 top-0 size-3 rounded-full bg-white/20 z-10"></div>

              <div className="flex flex-col gap-4 rounded-xl border border-white/5 bg-transparent p-6 hover:bg-white/5 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-md font-bold text-slate-300">
                      Suporte Nível 1
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Fundação José Silveira
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-600 w-fit">
                    Out 2023 - Dez 2024
                  </span>
                </div>
                <p className="text-slate-500 text-sm">
                  Gestão de chamados (GLPI), administração de Active Directory
                  (AD) e suporte a sistemas hospitalares críticos (PEP, MV2000).
                  Garantia de eficiência e estabilidade da rede.
                </p>
                <div className="flex flex-wrap gap-2 mt-1 opacity-60">
                  <span className="text-xs text-slate-600">
                    Active Directory
                  </span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-slate-600">GLPI</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-slate-600">MV2000</span>
                </div>
              </div>
            </div>

            {/* JOB 4: Técnico de Suporte (Início) */}
            <div className="relative pl-20 md:pl-24 group opacity-60 hover:opacity-100 transition-opacity">
              <div className="absolute left-4 md:left-5 top-0 size-3 rounded-full bg-white/10 z-10"></div>

              <div className="flex flex-col gap-4 rounded-xl border border-white/5 bg-transparent p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-md font-bold text-slate-400">
                      Técnico de Suporte ao Usuário
                    </h3>
                    <p className="text-slate-600 font-medium">UNINASSAU</p>
                  </div>
                  <span className="text-xs font-mono text-slate-600 w-fit">
                    Set 2022 - Out 2023
                  </span>
                </div>
                <p className="text-slate-600 text-sm">
                  Atendimento ao cliente, diagnóstico de hardware e configuração
                  de software. O início da base técnica em infraestrutura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
