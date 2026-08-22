import Link from "next/link";

export default function AlfaProject() {
  return (
    <main className="relative min-h-screen bg-obsidian pt-24 pb-20 px-6 overflow-x-hidden">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-teal-500/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between mb-16">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-bold uppercase tracking-widest">
                AI & Automation
              </span>
              <span className="text-slate-500 text-sm font-mono">
                Legal Tech
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              App ALFA <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-200 via-teal-500 to-cyan-400">
                Advocacia Piran
              </span>
            </h1>

            <p className="text-xl text-slate-400 font-light leading-relaxed mt-4">
              Um agente de IA único, orientado a estado, que capta e
              qualifica leads jurídicos direto no WhatsApp — inclusive fora
              do horário comercial.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              {["n8n", "Evolution API", "Claude API", "Whisper", "Autentique", "Chatwoot"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-1.5 text-sm font-semibold text-slate-300 border border-white/10"
                  >
                    <span className="material-symbols-outlined text-[16px] text-teal-400">
                      verified_user
                    </span>
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Action Buttons - Repositório Privado */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0">
            <div
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-500 text-sm font-bold cursor-help group relative"
              title="Este repositório é privado por questões de contrato e sigilo com o cliente."
            >
              <span className="material-symbols-outlined text-sm text-teal-400">
                lock
              </span>
              Repositório Privado
              <span className="absolute top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black border border-white/10 text-[10px] text-slate-300 px-3 py-1 rounded-md whitespace-nowrap z-30 font-sans">
                Acesso restrito (Cliente)
              </span>
            </div>
          </div>
        </div>

        {/* 1. O PROBLEMA: GARGALO HUMANO */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              O Gargalo do Atendimento Manual
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-slate-400 text-lg">
            <div className="space-y-6 leading-relaxed">
              <p>
                O escritório dependia de atendimento humano no WhatsApp para
                captar e qualificar leads. Fora do horário comercial, cada
                minuto sem resposta era um caso perdido para a concorrência.
              </p>
              <p>
                A solução precisava fazer mais do que responder: tinha que{" "}
                <strong className="text-white">
                  conduzir uma conversa jurídica
                </strong>{" "}
                do primeiro contato até a assinatura do contrato, sem
                depender de fluxos condicionais frágeis que quebram no
                primeiro desvio de assunto.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-black p-8 rounded-2xl border border-teal-500/30 flex items-center justify-center text-center">
              <div>
                <div className="text-4xl font-black text-white mb-2">
                  24/7
                </div>
                <div className="text-xs uppercase tracking-widest text-teal-400">
                  Captação e Qualificação de Leads
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ARQUITETURA DO AGENTE */}
        <section className="mb-24 p-8 md:p-12 rounded-3xl bg-linear-to-br from-teal-500/10 to-transparent border border-teal-500/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Agente Único Orientado a Estado
          </h3>
          <p className="text-slate-400 text-lg mb-8 max-w-4xl">
            Em vez de encadear dezenas de fluxos condicionais engessados
            (frágeis a qualquer mensagem fora do script), o agente opera
            como uma <strong className="text-white">máquina de estados com 13 estágios</strong>,
            mantendo contexto e decidindo o próximo passo da conversa de
            forma resiliente — do primeiro "oi" até o fechamento do caso.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "graphic_eq",
                title: "Transcrição em Tempo Real",
                desc: "Áudios recebidos no WhatsApp são transcritos via Whisper, permitindo qualificação por voz sem fricção para o lead.",
              },
              {
                icon: "hub",
                title: "Orquestração via n8n",
                desc: "Todo o roteamento de estado, chamadas à Claude API e integrações externas rodam em workflows n8n versionados.",
              },
              {
                icon: "draw",
                title: "Fechamento com Assinatura",
                desc: "O funil termina com assinatura eletrônica via API da Autentique, sem o lead precisar sair do WhatsApp.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-black/40 border border-white/5"
              >
                <span className="material-symbols-outlined text-teal-400 mb-3 block">
                  {item.icon}
                </span>
                <h4 className="text-white font-bold text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
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
          <p className="text-xs text-slate-600 font-mono italic">
            Case Study // ALFA Legal AI
          </p>
        </div>
      </div>
    </main>
  );
}
