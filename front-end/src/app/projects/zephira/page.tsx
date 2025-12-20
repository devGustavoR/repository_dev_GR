import Link from "next/link";

export default function ZephiraProject() {
  return (
    <main className="relative min-h-screen bg-obsidian pt-24 pb-20 px-6 overflow-x-hidden">
      {/* Aura Dourada (Luxury Feel) */}
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber-500/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between mb-20">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                Active Development
              </span>
              <span className="text-slate-500 text-sm font-mono">
                v0.8.4-alpha
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Zephira <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-500 to-amber-700">
                Luxe Architecture
              </span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed mt-4">
              Uma plataforma de e-commerce consultiva para o mercado de luxo,
              projetada com arquitetura Multi-schema e imutabilidade de dados
              financeiros.
            </p>
          </div>

          {/* Status Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 min-w-70">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="material-symbols-outlined text-amber-500">
                architecture
              </span>
              Foco do Sprint
            </div>
            <ul className="text-xs space-y-3 text-slate-400">
              <li className="flex gap-2">
                <span className="text-amber-500">•</span> Multi-tenant database
                layer
              </li>
              <li className="flex gap-2">
                <span className="text-amber-500">•</span> SKU Variant Logic
                (Anéis/Pulseiras)
              </li>
              <li className="flex gap-2">
                <span className="text-amber-500">•</span> Order Snapshotting
                Engine
              </li>
            </ul>
          </div>
        </div>

        {/* 1. DATA INTEGRITY (O DIFERENCIAL SÊNIOR) */}

        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Engenharia de Dados & Imutabilidade
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                O Zephira resolve o erro comum de e-commerces iniciantes: a
                dependência direta de chaves estrangeiras para dados voláteis.
              </p>
              <p>
                Implementei um sistema de{" "}
                <strong className="text-white">Snapshots de Pedidos</strong>: no
                momento da compra, o nome e preço da joia são persistidos como
                valores estáticos no item do pedido. Se o preço do ouro subir
                amanhã, o registro financeiro do cliente permanece intacto e
                auditável.
              </p>
            </div>

            <div className="bg-[#0d0d0d] p-6 rounded-xl border border-white/10 font-mono text-xs space-y-2">
              <div className="text-amber-500">Snapshot Strategy (Prisma)</div>
              <div className="text-slate-300">
                model <span className="text-blue-400">OrderItem</span> &lbrace;
              </div>
              <div className="pl-4 text-slate-500">id: String</div>
              <div className="pl-4 text-emerald-500">
                nm_produto_snapshot: String
              </div>
              <div className="pl-4 text-emerald-500">
                vl_venda_snapshot: Decimal
              </div>
              <div className="pl-4 text-slate-500">
                product_id: String // Referência histórica
              </div>
              <div className="text-slate-300">&rbrace;</div>
            </div>
          </div>
        </section>

        {/* 2. MULTI-SCHEMA ARCHITECTURE */}
        <section className="mb-24">
          <div className="p-8 md:p-12 rounded-3xl bg-linear-to-br from-amber-500/10 to-transparent border border-amber-500/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              Multi-schema & SaaS Ready
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-4xl">
              Utilizando o recurso de múltiplos esquemas do PostgreSQL/Prisma, o
              Zephira isola o domínio da joalheria em um namespace dedicado.
              Esta arquitetura prepara o sistema para ser uma plataforma SaaS,
              onde cada lojista opera em um esquema isolado dentro do mesmo
              banco.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Isolamento de Domínio",
                  desc: "Separação lógica de logs, métricas e dados transacionais.",
                },
                {
                  title: "Gestão de SKUs",
                  desc: "Variantes complexas por tamanho, quilates e estoque único.",
                },
                {
                  title: "Audit Log",
                  desc: "Rastreabilidade total de alterações via PERFIL_USUARIO.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-black/40 border border-white/5"
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

        {/* 3. UX LUXE-DIGITAL */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          {/* <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
            <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-xs uppercase tracking-widest bg-black/60 group-hover:bg-black/40 transition-all">
              Interface Preview // Luxe-Gem UI
            </div>
          </div> */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Estética vs. Conversão
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Em um ticket alto, a confiança é o ativo principal. O design foca
              em <strong className="text-white">Minimalismo Funcional</strong>.
              O Back-end NestJS atua como a garantia de integridade, enquanto o
              Front-end Next.js entrega performance com foco em Core Web Vitals
              para não prejudicar a experiência visual das joias de alta
              definição.
            </p>
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
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-500 text-xs font-bold">
              <span className="material-symbols-outlined text-sm">lock</span>
              Repo Privado (WIP)
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
