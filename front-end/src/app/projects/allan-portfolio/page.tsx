import Link from "next/link";

export default function AllanProject() {
  return (
    <main className="relative min-h-screen bg-obsidian pt-24 pb-20 px-6 overflow-x-hidden">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-purple-500/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between mb-16">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-bold uppercase tracking-widest">
                Creative Engineering
              </span>
              <span className="text-slate-500 text-sm font-mono">
                Pixel-Perfect UI
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Allan F. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-200 via-purple-500 to-pink-500">
                Premium Media UX
              </span>
            </h1>
          </div>

          {/* Action Buttons - Repositório Privado */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0">
            <div
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-500 text-sm font-bold cursor-help group relative"
              title="Este repositório é privado por questões de direitos autorais e diretrizes de negócio."
            >
              <span className="material-symbols-outlined text-sm text-purple-500">
                lock
              </span>
              Repositório Privado
              <span className="absolute top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black border border-white/10 text-[10px] text-slate-300 px-3 py-1 rounded-md whitespace-nowrap z-30 font-sans">
                Acesso restrito
              </span>
            </div>

            <a
              href="https://allanfernando.com/"
              target="_blank"
              className="group flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white text-black text-sm font-bold hover:bg-slate-200 transition-all"
            >
              <span className="material-symbols-outlined">visibility</span>
              Visitar Site
            </a>
          </div>
        </div>

        {/* 1. VIDEO OPTIMIZATION (O PROBLEMA DO BANCO) */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Video Infrastructure Hack
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-slate-400 text-lg">
            <div className="space-y-6 leading-relaxed">
              <p>
                O maior obstáculo foi servir arquivos de vídeo nativos ({">"}
                240MB) em um ambiente de baixo custo sem comprometer a
                performance.
              </p>
              <p>
                Desenvolvi uma estratégia de{" "}
                <strong className="text-white">
                  Delivery via GitHub Releases
                </strong>{" "}
                integrada ao Supabase, permitindo que os vídeos carreguem por
                streaming direto com latência zero para o usuário final,
                poupando a largura de banda do banco de dados.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-black p-8 rounded-2xl border border-purple-500/30 flex items-center justify-center text-center">
              <div>
                <div className="text-4xl font-black text-white mb-2">98%</div>
                <div className="text-xs uppercase tracking-widest text-purple-400">
                  PageSpeed Performance Score
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. UX HIGHLIGHTS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: "brush",
              title: "Pixel Perfect",
              desc: "Implementação fiel ao Figma do designer, mantendo proporções verticais (9:16) ideais para Reels.",
            },
            {
              icon: "speed",
              title: "Lighthouse Gold",
              desc: "Otimização Core Web Vitals com Next.js Image e Video pre-fetching.",
            },
            {
              icon: "bolt",
              title: "Autonomia",
              desc: "Tabela administrativa via Supabase permitindo que o artista gerencie seu catálogo sem ajuda técnica.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <span className="material-symbols-outlined text-purple-500 mb-4">
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
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-600 font-mono">devgustavor</p>
          </div>
        </div>
      </div>
    </main>
  );
}
