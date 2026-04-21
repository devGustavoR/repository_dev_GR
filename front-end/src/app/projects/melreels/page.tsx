import Link from "next/link";

export default function MelreelsProject() {
  return (
    <main className="relative min-h-screen bg-[#050505] pt-24 pb-20 px-6 overflow-x-hidden">
      {/* Aura Vermelha Neon (Vibe Streaming/Cinema) */}
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-red-600/10 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between mb-20">
          {/* COLUNA ESQUERDA: IDENTIDADE E CONCEITO */}
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Tags de Status */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                Live Production
              </span>
              <span className="text-slate-500 text-sm font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">
                v2.0.0-stable
              </span>
            </div>

            {/* Título com Tipografia Impactante */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                Mel
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-rose-700">
                  reels
                </span>
              </h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed mt-4 max-w-2xl">
                Plataforma de VOD (Video on Demand) rodando 100% como um{" "}
                <strong className="text-red-400">Telegram Mini App</strong>.
                Arquitetura orientada a eventos com gateway de pagamento nativo,
                player de vídeo customizado e delivery de conteúdo automatizado.
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                href="https://t.me/Melreels_bot" // Mude para o @ do seu bot
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-red-600/20 border border-red-500/30 text-red-300 text-sm font-bold hover:bg-red-600/30 hover:scale-105 transition-all group"
              >
                <span className="material-symbols-outlined text-sm">
                  smart_display
                </span>
                Abrir Mini App
              </a>

              <div
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-500 text-sm font-bold cursor-help"
                title="Código proprietário e seguro bancário"
              >
                <span className="material-symbols-outlined text-sm text-slate-600">
                  lock
                </span>
                Private Core
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: TECH STACK CARD */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 flex flex-col gap-6 min-w-[300px] backdrop-blur-md shadow-2xl relative overflow-hidden group">
            {/* Efeito de brilho no card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 blur-[60px] group-hover:bg-red-500/20 transition-all"></div>

            <div className="flex items-center gap-3 text-white font-bold">
              <div className="p-2 rounded-lg bg-red-500/20">
                <span className="material-symbols-outlined text-red-400 text-base">
                  memory
                </span>
              </div>
              <span className="uppercase tracking-widest text-xs">
                Streaming Engine
              </span>
            </div>

            <ul className="space-y-5 text-sm">
              <li className="flex gap-3 items-start group/item">
                <span className="text-red-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Node.js & Telegraf
                  </strong>
                  Backend orquestrando webhooks e interações diretas via API do
                  Telegram.
                </span>
              </li>
              <li className="flex gap-3 items-start group/item">
                <span className="text-red-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Efí Bank API (mTLS)
                  </strong>
                  Gateway de pagamentos Pix com conciliação bancária em tempo
                  real e certificado de segurança.
                </span>
              </li>
              <li className="flex gap-3 items-start group/item">
                <span className="text-red-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Supabase
                  </strong>
                  Banco de dados relacional mapeando transações, assinaturas VIP
                  e catálogo dinâmico.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 1. DATA DRIVEN DECISIONS -> INTEGRAÇÃO BANCÁRIA */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Gateway Pix & Auto-Cura (Self-Healing)
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                O maior desafio de sistemas de pagamento é garantir que o
                cliente receba o acesso instantaneamente, mesmo que a rede ou os
                webhooks falhem.
              </p>
              <p>
                Para o <strong className="text-white">Melreels</strong>, eu
                construí uma arquitetura de{" "}
                <strong className="text-red-400">Redundância Ativa</strong>. Se
                o Webhook oficial do banco sofrer bloqueios (ex:
                WAF/Cloudflare), o sistema inicia um mecanismo de "Polling" no
                front-end que consulta a API Bancária ativamente pelo TXID
                gerado, garantindo 100% de precisão na liberação de acessos.
              </p>
            </div>

            <div className="bg-[#0d0d0d] p-6 rounded-xl border border-white/10 font-mono text-[11px] md:text-xs space-y-2 shadow-lg shadow-red-900/5 overflow-x-auto">
              <div className="text-red-400 mb-2">
                // Redundância de Pagamento (Node.js)
              </div>
              <div className="text-slate-300">
                const <span className="text-blue-400">infoPix</span> ={" "}
                <span className="text-purple-400">await</span>{" "}
                efiService.consultarPix(txid);
              </div>
              <br />
              <div className="text-slate-300">
                <span className="text-purple-400">if</span> (infoPix.status ==={" "}
                <span className="text-emerald-400">"CONCLUIDA"</span>) &lbrace;
              </div>
              <div className="pl-4 text-slate-500">
                // Webhook falhou, mas o Polling salvou a venda!
              </div>
              <div className="pl-4 text-yellow-300">
                await <span className="text-blue-400">supabase</span>
                .from('VENDAS')
              </div>
              <div className="pl-8 text-yellow-300">
                .update(&lbrace; tp_status:{" "}
                <span className="text-emerald-400">'APROVADA'</span> &rbrace;)
              </div>
              <div className="pl-8 text-yellow-300">.eq('ds_txid', txid);</div>
              <br />
              <div className="pl-4 text-slate-500">
                // Libera o filme na interface do Mini App
              </div>
              <div className="pl-4 text-blue-300">
                bot.telegram.sendMessage(userId,{" "}
                <span className="text-emerald-400">
                  "🎉 PAGAMENTO CONFIRMADO!"
                </span>
                );
              </div>
              <div className="text-slate-300">&rbrace;</div>
            </div>
          </div>
        </section>

        {/* 2. STACK & AESTHETICS */}
        <section className="mb-24">
          <div className="p-8 md:p-12 rounded-3xl bg-linear-to-br from-red-600/10 to-transparent border border-red-500/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              Full Stack "Pleno" Mindset
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-4xl">
              A experiência do usuário (UX) precisava espelhar gigantes do
              streaming, mas rodando de forma embutida e leve no Telegram. Criei
              um algoritmo inteligente de ranking e um painel de administração
              via chat para gestão total do negócio sem precisar de um dashboard
              web externo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "bar_chart",
                  title: "Ranking Inteligente",
                  desc: "Algoritmo em memória (Cache TTL) que ordena o catálogo automaticamente com base no volume de vendas aprovadas (Top 12).",
                },
                {
                  icon: "admin_panel_settings",
                  title: "Telegram Admin Panel",
                  desc: "Sistema de gerenciamento completo por comandos (add filme, dar acesso VIP, gerar relatórios de auditoria e métricas).",
                },
                {
                  icon: "security",
                  title: "Segurança de Conteúdo",
                  desc: "Sistema de validação de rota (Middlewares) e geração de IDs não rastreáveis para blindar o streaming de vídeos não autorizados.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-black/40 border border-white/5 hover:border-red-500/30 transition-colors"
                >
                  <div className="mb-3">
                    <span className="material-symbols-outlined text-red-500">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER NAV */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
          <Link
            href="/projects"
            className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined">west</span> Voltar aos
            Projetos
          </Link>
        </div>
      </div>
    </main>
  );
}
