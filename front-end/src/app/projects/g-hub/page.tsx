import Link from "next/link";

export default function GHubProject() {
  return (
    <main className="relative min-h-screen bg-obsidian pt-24 pb-20 px-6 overflow-x-hidden">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-sky-500/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between mb-20">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-bold uppercase tracking-widest">
                SaaS & Architecture
              </span>
              <span className="text-slate-500 text-sm font-mono">
                Dev Tools
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                g-hub <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-500 to-blue-400">
                  Freelance Ops
                </span>
              </h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed mt-4">
                A central que gerencia clientes, entregas e cobrança de
                múltiplos projetos freelance em um único lugar.
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                href="https://crm.devgustavor.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl px-8 py-4 bg-white text-black text-sm font-bold hover:bg-slate-200 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-white/5"
              >
                <span className="material-symbols-outlined text-base font-bold">
                  visibility
                </span>
                Visitar Site Live
              </a>

              <a
                href="https://github.com/devGustavoR/g-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-300 text-sm font-bold hover:bg-white/10 hover:border-sky-500/30 transition-all"
              >
                <span className="material-symbols-outlined text-sm">
                  code
                </span>
                Ver Repositório
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA: STATUS CARD */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 min-w-[280px] backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="material-symbols-outlined text-sky-400">
                terminal
              </span>
              Monorepo Full-Stack
            </div>
            <ul className="text-xs space-y-4 text-slate-400">
              <li className="flex gap-2 items-start">
                <span className="text-sky-400 font-bold">•</span>
                <span>
                  <strong className="text-slate-200">
                    Next.js + NestJS
                  </strong>
                  <br />
                  Front-end e API separados
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-sky-400 font-bold">•</span>
                <span>
                  <strong className="text-slate-200">
                    Prisma + PostgreSQL
                  </strong>
                  <br />
                  Camada de dados tipada
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-sky-400 font-bold">•</span>
                <span>
                  <strong className="text-slate-200">Railway</strong>
                  <br />
                  Deploy contínuo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 1. O DESAFIO DE GERENCIAR MÚLTIPLOS CLIENTES */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Um Freelancer, Vários Clientes, Zero Ferramenta
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
            <div className="space-y-6">
              <p>
                Gerenciar múltiplos clientes freelance ao mesmo tempo sem uma
                ferramenta centralizada significa CRM espalhado em
                planilhas, prazos perdidos e entregas sem rastreabilidade.
              </p>
              <p>
                O g-hub nasceu como{" "}
                <strong className="text-white">
                  monorepo full-stack (NestJS + Next.js + Prisma)
                </strong>
                , com deploy em Railway, cobrindo CRM e gestão de projetos —
                pensado para crescer conforme a operação freelance escala.
              </p>
            </div>
            <div className="font-mono text-[11px] space-y-4 p-6 rounded-xl bg-[#0d0d0d] border border-white/10">
              <div className="text-sky-400">📂 apps/api (NestJS + Prisma)</div>
              <div className="pl-4 text-slate-500">
                /CRM, projetos e autenticação
              </div>
              <div className="text-blue-400">📂 apps/web (Next.js)</div>
              <div className="pl-4 text-slate-500">
                /Dashboard e gestão de entregas
              </div>
              <div className="text-emerald-400">
                📂 packages/shared
              </div>
              <div className="pl-4 text-slate-500">
                /Tipos e contratos compartilhados
              </div>
              <div className="text-amber-400">
                🔒 vault self-hosted (planejado)
              </div>
              <div className="pl-4 text-slate-500">
                /Secrets isolados por cliente
              </div>
            </div>
          </div>
        </section>

        {/* 2. FRENTES DO PRODUTO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: "contacts",
              title: "CRM de Clientes",
              desc: "Histórico de contato, propostas e status de cada cliente freelance em um só painel.",
            },
            {
              icon: "checklist",
              title: "Gestão de Projetos",
              desc: "Acompanhamento de entregas e prazos por cliente, sem depender de planilhas paralelas.",
            },
            {
              icon: "lock",
              title: "Vault Self-Hosted",
              desc: "Próxima frente: cofre de secrets self-hosted para isolar credenciais por projeto/cliente.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all"
            >
              <span className="material-symbols-outlined text-sky-400 mb-4">
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
            Case Study // g-hub
          </p>
        </div>
      </div>
    </main>
  );
}
