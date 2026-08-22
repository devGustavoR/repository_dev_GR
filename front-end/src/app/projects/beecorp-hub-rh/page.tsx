import Link from "next/link";

export default function BeecorpProject() {
  return (
    <main className="relative min-h-screen bg-obsidian pt-24 pb-20 px-6 overflow-x-hidden">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-indigo-500/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between mb-20">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest">
                B2B SaaS
              </span>
              <span className="text-slate-500 text-sm font-mono">
                HR Tech
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                BeeCorp <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-indigo-500 to-violet-400">
                  Hub RH
                </span>
              </h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed mt-4">
                Plataforma de RH pensada para crescer em módulos
                independentes, sem acumular acoplamento entre domínios de
                negócio.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <div
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-500 text-sm font-bold cursor-help group relative"
                title="Este repositório é privado por questões de contrato com o cliente."
              >
                <span className="material-symbols-outlined text-sm text-indigo-400">
                  lock
                </span>
                Repositório Privado
                <span className="absolute top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black border border-white/10 text-[10px] text-slate-300 px-3 py-1 rounded-md whitespace-nowrap z-30 font-sans">
                  Acesso restrito (Cliente)
                </span>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: STATUS CARD */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 min-w-[280px] backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="material-symbols-outlined text-indigo-400">
                terminal
              </span>
              Stack Principal
            </div>
            <ul className="text-xs space-y-4 text-slate-400">
              <li className="flex gap-2 items-start">
                <span className="text-indigo-400 font-bold">•</span>
                <span>
                  <strong className="text-slate-200">
                    React / TypeScript
                  </strong>
                  <br />
                  Front-end modular
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-indigo-400 font-bold">•</span>
                <span>
                  <strong className="text-slate-200">Supabase</strong>
                  <br />
                  Micro-schemas por domínio
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-indigo-400 font-bold">•</span>
                <span>
                  <strong className="text-slate-200">n8n + Vercel</strong>
                  <br />
                  Automação e deploy contínuo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 1. O DESAFIO DE ESCALAR SEM ACOPLAR */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Crescer em Módulos, Sem Acoplamento
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
            <div className="space-y-6">
              <p>
                O desafio era construir uma plataforma de RH que pudesse
                crescer em módulos independentes — sem que a evolução de um
                domínio (como "Pessoas") travasse ou quebrasse outro (como
                "Negócios").
              </p>
              <p>
                A resposta foi desenhar o banco com{" "}
                <strong className="text-white">
                  micro-schemas isolados por módulo
                </strong>{" "}
                dentro do próprio Supabase, permitindo deploy e evolução
                independentes de cada domínio na mesma base de dados.
              </p>
            </div>
            <div className="bg-[#0d0d0d] p-6 rounded-xl border border-white/10 font-mono text-xs space-y-2">
              <div className="text-indigo-400">Isolamento por Schema</div>
              <div className="pl-2 text-slate-300">schema pessoas.*</div>
              <div className="pl-4 text-emerald-500">
                colaboradores, cargos, avaliacoes
              </div>
              <div className="pl-2 text-slate-300 mt-2">
                schema negocios.*
              </div>
              <div className="pl-4 text-emerald-500">
                clientes, contratos, faturamento
              </div>
              <div className="pl-2 text-slate-500 mt-2">
                // deploy e migração independentes por schema
              </div>
            </div>
          </div>
        </section>

        {/* 2. ENTREGA INCREMENTAL */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: "sprint",
              title: "Sprints Curtos",
              desc: "Entrega quebrada em sprints com validação incremental do cliente, reduzindo retrabalho e risco de escopo.",
            },
            {
              icon: "account_tree",
              title: "Domínios Desacoplados",
              desc: "Módulos de Pessoas e Negócios evoluem em paralelo sem gerar dependência cruzada de schema.",
            },
            {
              icon: "bolt",
              title: "Automação n8n",
              desc: "Fluxos de RH (onboarding, aprovações, notificações) automatizados fora do código da aplicação.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all"
            >
              <span className="material-symbols-outlined text-indigo-400 mb-4">
                {item.icon}
              </span>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* FOOTER NAV */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
          <Link
            href="/projects"
            className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined">west</span> Todos os
            Projetos
          </Link>
          <p className="text-xs text-slate-600 font-mono italic">
            Case Study // BeeCorp HR
          </p>
        </div>
      </div>
    </main>
  );
}
