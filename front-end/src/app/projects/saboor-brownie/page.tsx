import Link from "next/link";

export default function SaboorBrownieProject() {
  return (
    <main className="relative min-h-screen bg-[#050505] pt-24 pb-20 px-6 overflow-x-hidden">
      {/* Aura Lilás Neon (Vibe Saboor) */}
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-purple-600/10 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between mb-20">
          {/* COLUNA ESQUERDA: IDENTIDADE E CONCEITO */}
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Tags de Status */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                Live Production
              </span>
              <span className="text-slate-500 text-sm font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">
                v1.2.0-stable
              </span>
            </div>

            {/* Título com Tipografia Impactante */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                Saboor <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-600">
                  brownie
                </span>
              </h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed mt-4 max-w-2xl">
                Micro-SaaS de contabilidade real-time para gestão de vendas
                escolares. Arquitetura{" "}
                <strong className="text-purple-300">Serverless</strong> focada
                em margem de lucro, controle de lotes (batches) e projeção
                financeira automatizada.
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                href="https://saboorbrownie.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-bold hover:bg-purple-600/30 hover:scale-105 transition-all group"
              >
                <span className="material-symbols-outlined text-sm">
                  rocket_launch
                </span>
                Ver Live Demo
              </a>

              <div
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-500 text-sm font-bold cursor-help"
                title="Código proprietário"
              >
                <span className="material-symbols-outlined text-sm text-slate-600">
                  code
                </span>
                Private Repo
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: TECH STACK CARD */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 flex flex-col gap-6 min-w-[300px] backdrop-blur-md shadow-2xl relative overflow-hidden group">
            {/* Efeito de brilho no card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 blur-[60px] group-hover:bg-purple-500/20 transition-all"></div>

            <div className="flex items-center gap-3 text-white font-bold">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <span className="material-symbols-outlined text-purple-400 text-base">
                  query_stats
                </span>
              </div>
              <span className="uppercase tracking-widest text-xs">
                Financial Engine
              </span>
            </div>

            <ul className="space-y-5 text-sm">
              <li className="flex gap-3 items-start group/item">
                <span className="text-purple-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Supabase BaaS
                  </strong>
                  Zero infra cost. Auth, DB e Realtime em uma única camada.
                </span>
              </li>
              <li className="flex gap-3 items-start group/item">
                <span className="text-purple-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Batch Logic
                  </strong>
                  Rastreabilidade de lucro por fornada e controle de insumos.
                </span>
              </li>
              <li className="flex gap-3 items-start group/item">
                <span className="text-purple-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Mobile-First UX
                  </strong>
                  Interface otimizada para lançamentos rápidos (Recreio Mode).
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 1. DATA DRIVEN DECISIONS */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Engenharia de Lucro & Lotes
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                O maior desafio de pequenos empreendimentos não é vender, é
                saber se está lucrando. O{" "}
                <strong className="text-white">saboorbrownie</strong> elimina o
                "achismo" financeiro.
              </p>
              <p>
                Modelei um sistema de{" "}
                <strong className="text-purple-400">Batches (Lotes)</strong> que
                vincula cada venda a uma fornada específica. Isso permite
                calcular o custo exato dos insumos daquele dia (ex: variação do
                preço do leite condensado) versus o faturamento real, entregando
                o ROI líquido em tempo real.
              </p>
            </div>

            <div className="bg-[#0d0d0d] p-6 rounded-xl border border-white/10 font-mono text-xs space-y-2 shadow-lg shadow-purple-900/5">
              <div className="text-purple-400">
                Profit Calculation Logic (SQL/JS)
              </div>
              <div className="text-slate-300">
                const <span className="text-blue-400">batchProfit</span> =
                (batchId) ={">"} &lbrace;
              </div>
              <div className="pl-4 text-slate-500">
                // Agrega vendas vinculadas ao Batch ID
              </div>
              <div className="pl-4 text-emerald-500">
                const revenue = await sales.sum('price').eq('batch_id',
                batchId);
              </div>
              <div className="pl-4 text-red-400">
                const costs = ingredients + packaging_rate + gas_rate;
              </div>
              <div className="pl-4 text-purple-300">
                return revenue - costs; // Net Profit Real
              </div>
              <div className="text-slate-300">&rbrace;</div>
            </div>
          </div>
        </section>

        {/* 2. STACK & AESTHETICS */}
        <section className="mb-24">
          <div className="p-8 md:p-12 rounded-3xl bg-linear-to-br from-purple-600/10 to-transparent border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              Full Stack "Pleno" Mindset
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-4xl">
              Mais do que um app, é uma ferramenta de gestão. A interface foi
              desenhada pensando na usabilidade em movimento (corredores da
              escola), enquanto o back-end no Supabase garante integridade dos
              dados e segurança via RLS (Row Level Security).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Supabase Auth",
                  desc: "Login seguro para garantir que apenas a diretoria (nós) acesse os dados.",
                },
                {
                  title: "Dashboard Realtime",
                  desc: "Gráficos de meta semanal que atualizam a cada brownie vendido.",
                },
                {
                  title: "Gestão de Estoque",
                  desc: "Alerta automático de gramatura de recheio por unidade.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-black/40 border border-white/5 hover:border-purple-500/30 transition-colors"
                >
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
