import Link from "next/link";

export default function EmpregaFacilProject() {
  return (
    <main className="relative min-h-screen bg-obsidian pt-24 pb-20 px-6 overflow-x-hidden">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-blue-500/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between mb-20">
          {/* COLUNA ESQUERDA: IDENTIDADE E AÇÃO */}
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Tags de Status */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-widest">
                SaaS Case Study
              </span>
              <span className="text-slate-500 text-sm font-mono text-emerald-500/80">
                v2.0 - Re-engineered
              </span>
            </div>

            {/* Título e Descrição */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                Emprega Fácil <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-emerald-400">
                  SaaS Automation
                </span>
              </h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed mt-4">
                A transformação de um portal estático em uma plataforma
                automatizada de RH, com foco em segurança de dados sensíveis e
                comunicação em tempo real via WhatsApp.
              </p>
            </div>

            {/* Botões de Ação (Abaixo da descrição) */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                href="https://www.empregafacilbrasil.com.br"
                target="_blank"
                className="group flex items-center justify-center gap-2 rounded-xl px-8 py-4 bg-white text-black text-sm font-bold hover:bg-slate-200 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-white/5"
              >
                <span className="material-symbols-outlined text-base font-bold font-icon">
                  visibility
                </span>
                Visitar Site Live
              </a>

              <div
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-500 text-sm font-bold cursor-help group relative"
                title="Este repositório é privado por questões de direitos autorais e diretrizes de negócio."
              >
                <span className="material-symbols-outlined text-sm text-blue-200">
                  lock
                </span>
                Repositório Privado
                <span className="absolute top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black border border-white/10 text-[10px] text-slate-300 px-3 py-1 rounded-md whitespace-nowrap z-30 font-sans">
                  Acesso restrito (Propriedade Comercial)
                </span>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: STATUS CARD */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 min-w-[280px] backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="material-symbols-outlined text-blue-500">
                terminal
              </span>
              Desafios Vencidos
            </div>
            <ul className="text-xs space-y-4 text-slate-400">
              <li className="flex gap-2 items-start">
                <span className="text-blue-500 font-bold">•</span>
                <span>
                  <strong className="text-slate-200">DB Refactoring</strong>
                  <br />
                  (Pro-code patterns)
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-blue-500 font-bold">•</span>
                <span>
                  <strong className="text-slate-200">Dynamic QR Code</strong>
                  <br />
                  Entry System
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-blue-500 font-bold">•</span>
                <span>
                  <strong className="text-slate-200">Event-Driven</strong>
                  <br />
                  Zap Workflows
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 1. DATABASE REENGINEERING */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Reengenharia de Banco de Dados
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
            <div className="space-y-6">
              <p>
                O maior desafio técnico foi o{" "}
                <strong className="text-white">Hard Reset do Banco</strong>.
                Migrei uma estrutura instável para um esquema corporativo com
                prefixos de controle (cd_, nm_, ts_).
              </p>
              <p>
                Implementei segurança via{" "}
                <strong className="text-white">RLS (Row Level Security)</strong>
                , garantindo que CPFs e RGs dos candidatos fossem acessíveis
                apenas por administradores autorizados, blindando o sistema
                contra vazamentos.
              </p>
            </div>
            <div className="bg-[#0d0d0d] p-6 rounded-xl border border-white/10 font-mono text-xs space-y-2">
              <div className="text-blue-400">Corporate SQL Schema</div>
              <div className="text-slate-300">
                CREATE TABLE "CANDIDATURAS" &lbrace;
              </div>
              <div className="pl-4 text-emerald-500">
                cd_candidatura: uuid PRIMARY KEY
              </div>
              <div className="pl-4 text-emerald-500">
                cd_token_qrcode: uuid UNIQUE
              </div>
              <div className="pl-4 text-slate-500">
                tp_status: type_status_candidatura
              </div>
              <div className="pl-4 text-slate-500">
                sn_presenca_confirmada: boolean
              </div>
              <div className="text-slate-300">&rbrace;</div>
            </div>
          </div>
        </section>

        {/* 2. AUTOMATION STACK */}
        <section className="mb-24 p-8 md:p-12 rounded-3xl bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Workflow Baseado em Eventos
          </h3>
          <p className="text-slate-400 text-lg mb-8 max-w-4xl">
            Através da integração entre Supabase Webhooks, Make.com e Z-API,
            construí 6 robôs inteligentes que cuidam da jornada do usuário,
            enviando convites, lembretes de 2h30 anti-falta e broadcasting
            automático de vagas em massa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "QR Code Entry",
                desc: "Check-in via token único que valida a chegada do candidato no banco em tempo real.",
              },
              {
                title: "Retention Engine",
                desc: "Lembretes dinâmicos antes da entrevista reduzem o No-Show em 80%.",
              },
              {
                title: "Broadcast Automation",
                desc: "Envio síncrono de novas vagas para múltiplos grupos regionais no DF.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-black/40 border border-white/5"
              >
                <h4 className="text-blue-400 font-bold text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
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
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-600 font-mono">devgustavor</p>
          </div>
        </div>
      </div>
    </main>
  );
}
