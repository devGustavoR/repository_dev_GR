import Link from "next/link";

export default function WallisonPortfolioProject() {
  return (
    <main className="relative min-h-screen bg-[#050505] pt-24 pb-20 px-6 overflow-x-hidden">
      {/* Aura Esmeralda/Prata Neon (Vibe Sofisticada/Tech) */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-zinc-500/10 blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between mb-24">
          {/* COLUNA ESQUERDA: IDENTIDADE E CONCEITO */}
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Tags de Status */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                Personal Branding
              </span>
              <span className="text-slate-500 text-sm font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">
                Frontend Engineering
              </span>
            </div>

            {/* Título com Tipografia Impactante */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                Wallison <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-600 to-teal-500">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed mt-4 max-w-2xl">
                O cartão de visitas digital definitivo. Uma plataforma
                desenvolvida para unir a expertise em{" "}
                <strong className="text-emerald-300">
                  Consultoria de RH Estratégico
                </strong>{" "}
                com a engenharia de software de{" "}
                <strong className="text-emerald-300">Alto Desempenho</strong>.
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="https://seusite.com.br" // Troque pelo seu link real
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-sm font-bold hover:bg-emerald-600/30 hover:scale-105 transition-all group"
              >
                <span className="material-symbols-outlined text-sm transition-transform group-hover:-rotate-12">
                  terminal
                </span>
                Acessar Portfólio
              </a>

              <div
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-500 text-sm font-bold cursor-help"
                title="Código Aberto (Open Source)"
              >
                <span className="material-symbols-outlined text-sm text-slate-600">
                  code
                </span>
                Ver Repositório
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: TECH STACK CARD */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 flex flex-col gap-6 min-w-[300px] md:min-w-[380px] backdrop-blur-md shadow-2xl relative overflow-hidden group">
            {/* Efeito de brilho no card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[60px] group-hover:bg-emerald-500/20 transition-all"></div>

            <div className="flex items-center gap-3 text-white font-bold">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <span className="material-symbols-outlined text-emerald-400 text-base">
                  design_services
                </span>
              </div>
              <span className="uppercase tracking-widest text-xs">
                Tech Stack & UI/UX
              </span>
            </div>

            <ul className="space-y-5 text-sm">
              <li className="flex gap-3 items-start group/item">
                <span className="text-emerald-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Next.js 14 & React
                  </strong>
                  Renderização do lado do servidor (SSR) para performance máxima
                  e SEO impecável.
                </span>
              </li>
              <li className="flex gap-3 items-start group/item">
                <span className="text-emerald-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Tailwind CSS (Bento Grid)
                  </strong>
                  Design system focado em micro-interações, grids assimétricos e
                  glassmorphism.
                </span>
              </li>
              <li className="flex gap-3 items-start group/item">
                <span className="text-teal-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Framer Motion
                  </strong>
                  Animações fluidas baseadas em scroll para contar uma história
                  (Storytelling visual).
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 1. O DESAFIO & IMPACTO */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-4">
              <h2 className="text-3xl font-bold text-white">A Dualidade</h2>
              <p className="text-slate-400 leading-relaxed">
                Como apresentar um profissional que é fluente em{" "}
                <strong>Gestão de Pessoas</strong> e, ao mesmo tempo, um{" "}
                <strong>Desenvolvedor Full Stack</strong> capaz de arquitetar
                bancos de dados complexos?
              </p>
            </div>
            <div className="md:col-span-2 bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/20 p-8 rounded-3xl flex flex-col justify-center">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">
                A Solução Visual e Narrativa
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                O portfólio foi construído como um{" "}
                <em>"Showcase Interativo"</em>. Em vez de apenas dizer o que eu
                faço, a própria plataforma demonstra minhas capacidades em UX,
                animações e código limpo. A estrutura em formato{" "}
                <strong className="text-white">Bento Grid</strong> permite
                compartimentar projetos complexos (como SaaS B2B) em pílulas
                visuais de alto impacto.
              </p>
            </div>
          </div>
        </section>

        {/* 2. ECOSSISTEMA BENTO GRID */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Arquitetura do Projeto
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card UI */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-emerald-500/30 transition-colors flex flex-col h-full group">
              <span className="material-symbols-outlined text-4xl text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                palette
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Dark Mode Nativo
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Paleta de cores imersiva (#050505) com auras neon. Foco em
                contraste, legibilidade e estética futurista de alto nível.
              </p>
            </div>

            {/* Card Perf */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-teal-500/30 transition-colors flex flex-col h-full group">
              <span className="material-symbols-outlined text-4xl text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                speed
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                100/100 Lighthouse
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Otimização pesada de imagens, carregamento assíncrono (lazy
                loading) e métricas web vitals perfeitas para o Google.
              </p>
            </div>

            {/* Card Story */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-emerald-500/30 transition-colors flex flex-col h-full group">
              <span className="material-symbols-outlined text-4xl text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                auto_stories
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Case Studies
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Páginas dinâmicas que destrincham o "Como foi feito" e o "Por
                que foi feito" de cada software, revelando o pensamento do
                engenheiro.
              </p>
            </div>

            {/* Card Code */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-teal-500/30 transition-colors flex flex-col h-full group">
              <span className="material-symbols-outlined text-4xl text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                code_blocks
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Clean Code</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Componentização inteligente em React. Código modular, escalável
                e de fácil manutenção utilizando o App Router do Next.js 14.
              </p>
            </div>
          </div>
        </section>

        {/* 3. ALGORITMOS & ANIMAÇÕES */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Anatomia de um "Showcase"
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Em um mercado saturado de templates genéricos, construí minha
                identidade do zero. A utilização do{" "}
                <strong className="text-white">Tailwind CSS</strong> permite
                estilização inline altamente dinâmica, como o efeito de vidro
                (Glassmorphism) e as auras de fundo (glow effects) que seguem as
                cores do projeto.
              </p>
              <p>
                As seções de código expostas (como esta ao lado) não são apenas
                imagens, mas marcação HTML/CSS real formatada para demonstrar
                que{" "}
                <strong className="text-emerald-400">
                  não tenho medo de mostrar o que está sob o capô
                </strong>
                . É a união da estética com a engenharia pura.
              </p>
            </div>

            <div className="bg-[#0d0d0d] p-6 rounded-xl border border-white/10 font-mono text-xs space-y-2 shadow-lg shadow-emerald-900/5">
              <div className="text-emerald-400 mb-4">
                // Glassmorphism Card Component (React/Tailwind)
              </div>
              <div className="text-slate-300">
                export default function{" "}
                <span className="text-teal-400">BentoCard</span>
                () {"{"}
              </div>
              <div className="pl-4 text-slate-500 mt-2">
                // Uso de backdrop-blur e gradientes sutis
              </div>
              <div className="pl-4 text-emerald-500">{"return ("}</div>
              <div className="pl-8 text-purple-400">{'<div className="'}</div>
              <div className="pl-12 text-teal-300">
                p-8 rounded-3xl bg-white/5 <br />
                border border-white/10 <br />
                backdrop-blur-md shadow-2xl <br />
                hover:border-emerald-500/30 <br />
                transition-all duration-300
              </div>
              <div className="pl-8 text-purple-400">{'">'}</div>
              <div className="pl-12 text-slate-300">
                {'<h3 className="text-white font-bold">'} <br />
                &nbsp;&nbsp;Meu Portfólio <br />
                {"</h3>"}
              </div>
              <div className="pl-8 text-purple-400">{"</div>"}</div>
              <div className="pl-4 text-emerald-500">{");"}</div>
              <div className="text-slate-300">{"}"}</div>
            </div>
          </div>
        </section>

        {/* FOOTER NAV */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
          <Link
            href="/projects"
            className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group"
          >
            <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">
              west
            </span>
            Voltar aos Projetos
          </Link>
        </div>
      </div>
    </main>
  );
}
