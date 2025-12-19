import Link from "next/link";

export default function RestaurantProject() {
  return (
    <main className="relative min-h-screen bg-obsidian pt-24 pb-20 px-6 overflow-x-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 -z-10 h-125 w-125 rounded-full bg-emerald-500/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between mb-16">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-lg">
                restaurant
              </span>
              <span>Full Stack Ecosystem</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Digital Restaurant <br />
              <span className="text-primary text-2xl md:text-4xl">
                Performance & Estabilidade
              </span>
            </h1>
          </div>

          {/* Action Buttons - Repositório Privado */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0">
            <div
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-500 text-sm font-bold cursor-help group relative"
              title="Este repositório é privado por questões de direitos autorais e diretrizes de negócio."
            >
              <span className="material-symbols-outlined text-sm">lock</span>
              Repositório Privado
              <span className="absolute top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black border border-white/10 text-[10px] text-slate-300 px-3 py-1 rounded-md whitespace-nowrap z-30 font-sans">
                Acesso restrito (Propriedade Comercial)
              </span>
            </div>

            <a
              href="https://cara-coroa-theta.vercel.app/"
              target="_blank"
              className="group flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white text-black text-sm font-bold hover:bg-slate-200 transition-all"
            >
              <span className="material-symbols-outlined">visibility</span>
              Visitar Site
            </a>
          </div>
        </div>

        {/* 1. VISÃO DE NEGÓCIO (O &quot;PORQUÊ&quot;) */}
        <section className="mb-20 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white text-nowrap">
              Propósito de Negócio
            </h2>
            <span className="h-px w-full bg-white/10"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                O projeto nasceu para digitalizar um estabelecimento tradicional
                &quot;pé na areia&quot; em Salvador, transicionando de um
                cardápio físico para uma{" "}
                <strong className="text-white">Vitrine Digital Dinâmica</strong>
                .
              </p>
              <p>
                O foco central é a conversão: garantir que o menu carregue
                instantaneamente em conexões móveis (3G/4G) instáveis,
                eliminando a fricção curiosidade do cliente.
              </p>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-2xl">
              <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">payments</span>
                Foco em Conversão
              </h4>
              <p className="text-sm text-slate-300">
                Diferente de soluções &quot;no-code&quot;, o uso de Next.js SSR
                garante que o cliente não desista do pedido por lentidão
                técnica, mantendo a percepção de valor &quot;premium&quot; da
                marca.
              </p>
            </div>
          </div>
        </section>

        {/* 2. BENTO GRID DE ENGENHARIA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-emerald-500/50 transition-colors">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                analytics
              </span>
              SSR & SEO
            </h4>
            <p className="text-slate-400 text-sm">
              Server Components buscam dados diretamente no servidor, garantindo
              indexação máxima e eliminando o layout shift (CLS).
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-emerald-500/50 transition-colors">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                storage
              </span>
              Prisma Library Engine
            </h4>
            <p className="text-slate-400 text-sm">
              Downgrade estratégico para v6.12.0 para garantir estabilidade do
              motor WASM em ambientes Docker/Render.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-emerald-500/50 transition-colors">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                security
              </span>
              Infra Segura
            </h4>
            <p className="text-slate-400 text-sm">
              VPC lógica com SSL forçado e restrições de rede entre Render e
              Supabase para tráfego de dados sensíveis.
            </p>
          </div>
        </div>

        {/* 3. TERMINAL & CÓDIGO */}
        <div className="space-y-12 mb-24">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Maturidade Técnica
            </h3>
            <p className="text-slate-400 leading-relaxed">
              O projeto foi concebido como um{" "}
              <strong className="text-white">boilerplate sólido</strong>. Prova
              disso é sua evolução para o projeto <strong>Zephira</strong>{" "}
              (joalheria), onde o motor foi reaproveitado para gerenciar
              estoques e variantes complexas.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/10 shadow-2xl">
            <div className="p-4 bg-white/5 border-b border-white/5 text-xs font-mono text-slate-500 flex justify-between">
              <span>schema.prisma</span>
              <span className="text-emerald-500">Stable Build</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm text-slate-300 leading-relaxed">
                <code>
                  generator client {"{"}
                  {"\n"}
                  {"  "}provider = &quot;prisma-client-js&quot;{"\n"}
                  {"  "}
                  <span className="text-primary">
                    engineType = &quot;library&quot;
                  </span>{" "}
                  Override para estabilidade em Docker{"\n"}
                  {"}"}
                  {"\n\n"}
                  datasource db {"{"}
                  {"\n"}
                  {"  "}provider = &quot;postgresql&quot;{"\n"}
                  {"  "}url = env(&quot;DATABASE_URL&quot;){"\n"}
                  {"  "}directUrl = env(&quot;DIRECT_URL&quot;) // Transaction
                  Pooling{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* 4. UX & DESIGN SYSTEM */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Hierarquia Visual Seletiva
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-emerald-500">
                  check_circle
                </span>
                <p className="text-slate-400">
                  <strong className="text-slate-200">Sticky Navigation:</strong>{" "}
                  Barra de categorias fixa para navegação fluida em menus
                  extensos.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-emerald-500">
                  check_circle
                </span>
                <p className="text-slate-400">
                  <strong className="text-slate-200">Visual Imersivo:</strong>{" "}
                  UI Dark Mode com detalhes dourados para elevar a percepção de
                  valor dos produtos.
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-emerald-500/5 border border-white/5">
            <h4 className="text-white font-bold mb-2">
              Single Source of Truth
            </h4>
            <p className="text-slate-400 text-sm">
              NestJS servindo como núcleo de integridade, permitindo gestão
              segura do catálogo sem riscos de corrupção de dados via dashboard
              administrativo.
            </p>
          </div>
        </section>

        {/* FOOTER NAV */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
          <Link
            href="/projects"
            className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined">west</span> Voltar para
            Projetos
          </Link>
          <p className="text-xs text-slate-600 font-mono">
            devgustavor // Full Stack Case Study
          </p>
        </div>
      </div>
    </main>
  );
}
