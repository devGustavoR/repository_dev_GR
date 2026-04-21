import Link from "next/link";

export default function ResponsaEduProject() {
  return (
    <main className="relative min-h-screen bg-[#050505] pt-24 pb-20 px-6 overflow-x-hidden">
      {/* Aura Azul/Laranja Neon (Vibe Responsa Edu) */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-blue-900/5 blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between mb-24">
          {/* COLUNA ESQUERDA: IDENTIDADE E CONCEITO */}
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Tags de Status */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                B2B SaaS Platform
              </span>
              <span className="text-slate-500 text-sm font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">
                Enterprise Grade
              </span>
            </div>

            {/* Título com Tipografia Impactante */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                Responsa <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-orange-500">
                  Edu
                </span>
              </h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed mt-4 max-w-2xl">
                Plataforma B2B para Consultoria de RH e Gestão de Pessoas. Um
                verdadeiro{" "}
                <strong className="text-blue-300">Hub de Ferramentas</strong>{" "}
                que automatiza Mapeamento DISC, Pesquisas de Clima, Diagnósticos
                NR-1 e gera laudos corporativos em tempo real.
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="https://www.responsaedu.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-bold hover:bg-blue-600/30 hover:scale-105 transition-all group"
              >
                <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-12">
                  public
                </span>
                Acessar Plataforma
              </a>

              <div
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-500 text-sm font-bold cursor-help"
                title="Código proprietário sob NDA"
              >
                <span className="material-symbols-outlined text-sm text-slate-600">
                  lock
                </span>
                Private Source
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: TECH STACK CARD */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 flex flex-col gap-6 min-w-[300px] md:min-w-[380px] backdrop-blur-md shadow-2xl relative overflow-hidden group">
            {/* Efeito de brilho no card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[60px] group-hover:bg-blue-500/20 transition-all"></div>

            <div className="flex items-center gap-3 text-white font-bold">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <span className="material-symbols-outlined text-blue-400 text-base">
                  architecture
                </span>
              </div>
              <span className="uppercase tracking-widest text-xs">
                Core Architecture
              </span>
            </div>

            <ul className="space-y-5 text-sm">
              <li className="flex gap-3 items-start group/item">
                <span className="text-blue-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Supabase & RLS
                  </strong>
                  Engenharia de segurança (Row Level Security) para formulários
                  públicos anônimos.
                </span>
              </li>
              <li className="flex gap-3 items-start group/item">
                <span className="text-blue-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Dynamic PDF Engine
                  </strong>
                  Renderização de relatórios premium (gráficos de pizza/barras)
                  usando apenas CSS e `window.print`.
                </span>
              </li>
              <li className="flex gap-3 items-start group/item">
                <span className="text-orange-500 font-black mt-0.5">•</span>
                <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  <strong className="text-slate-200 block text-xs uppercase tracking-wider">
                    Lead Gen Tooling
                  </strong>
                  Ferramentas atuam como ímãs de leads para prospecção
                  corporativa.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 1. O DESAFIO & IMPACTO (NOVA SEÇÃO) */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-4">
              <h2 className="text-3xl font-bold text-white">O Desafio</h2>
              <p className="text-slate-400 leading-relaxed">
                Consultorias de RH tradicionais perdem milhares de horas
                tabulando resultados de planilhas Excel e formatando relatórios
                no Word para apresentar aos clientes.
              </p>
            </div>
            <div className="md:col-span-2 bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20 p-8 rounded-3xl flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-300 mb-4">
                A Solução Responsa Edu
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Desenvolvi um ecossistema completo onde o consultor gera um{" "}
                <strong className="text-white">link público e seguro</strong> em
                2 cliques. O colaborador responde pelo celular com uma UX fluida
                e, no mesmo instante, o sistema processa cálculos complexos
                (como a matriz DISC de 20 competências) e cospe um laudo
                executivo impecável.
              </p>
            </div>
          </div>
        </section>

        {/* 2. ECOSSISTEMA BENTO GRID (NOVA SEÇÃO) */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Ecossistema de Ferramentas
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card DISC */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-blue-500/30 transition-colors flex flex-col h-full group">
              <span className="material-symbols-outlined text-4xl text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                psychology
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Mapeamento DISC
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Formulário adaptativo de 50 questões. Algoritmo processa Perfil
                Natural, Adaptado e Exigência do Meio em gráficos renderizados
                via CSS.
              </p>
            </div>

            {/* Card NR-1 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-red-500/30 transition-colors flex flex-col h-full group">
              <span className="material-symbols-outlined text-4xl text-red-400 mb-4 group-hover:scale-110 transition-transform">
                health_and_safety
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Diagnóstico NR-1
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Auditoria de Riscos Psicossociais (GRO). Avalia 60 critérios e
                injeta automaticamente Planos de Ação baseados na faixa de risco
                da empresa.
              </p>
            </div>

            {/* Card Rosa Krausz */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-purple-500/30 transition-colors flex flex-col h-full group">
              <span className="material-symbols-outlined text-4xl text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                update
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Inventário de Tempo
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Metodologia Rosa Krausz. 96 perguntas que mapeiam 16 ladrões de
                tempo, pontuando os gargalos de produtividade de lideranças.
              </p>
            </div>

            {/* Card Clima */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-orange-500/30 transition-colors flex flex-col h-full group">
              <span className="material-symbols-outlined text-4xl text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                thermostat
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Pesquisa de Clima
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Termômetro organizacional 100% anônimo. Agrega respostas de
                centenas de funcionários em Dashboards Realtime (ApexCharts).
              </p>
            </div>
          </div>
        </section>

        {/* 3. DATA DRIVEN DECISIONS & ALGORITMOS */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Geração de Laudos & Algoritmos
            </h2>
            <span className="h-px flex-1 bg-white/5"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                O maior diferencial técnico do{" "}
                <strong className="text-white">Responsa Edu</strong> é sua
                capacidade de dispensar softwares de terceiros ou bibliotecas
                pesadas de PDF no backend.
              </p>
              <p>
                Desenvolvi um motor de cálculo client-side que injeta o
                resultado dos questionários diretamente em um{" "}
                <strong className="text-blue-400">
                  template HTML/CSS virtual
                </strong>
                . Gráficos de pizza perfeitos são gerados com{" "}
                <code>conic-gradient</code>, e matrizes complexas via flexbox. O
                resultado é um laudo corporativo gerado no navegador em
                milissegundos.
              </p>
            </div>

            <div className="bg-[#0d0d0d] p-6 rounded-xl border border-white/10 font-mono text-xs space-y-2 shadow-lg shadow-blue-900/5">
              <div className="text-blue-400 mb-4">
                // Dynamic Print Engine Logic (JS/CSS)
              </div>
              <div className="text-slate-300">
                const <span className="text-orange-400">gerarLaudoPDF</span> =
                (respostas, scores) {"=>"} {"{"}
              </div>
              <div className="pl-4 text-slate-500 mt-2">
                // Gráficos gerados via CSS Nativo (Zero dependências)
              </div>
              <div className="pl-4 text-emerald-500">
                {"const pieChart = `conic-gradient("} <br />
                &nbsp;&nbsp;{"#FF0000 0% ${scores.D}%, "} <br />
                &nbsp;&nbsp;{"#FFC000 ${scores.D}% ... "} <br />
                {")`"}
              </div>
              <div className="pl-4 text-purple-400 mt-2">
                {
                  "const html = `<html> ... <div style='background: ${pieChart}'></div> ... </html>`;"
                }
              </div>
              <div className="pl-4 text-slate-500 mt-2">
                // Abre aba isolada, injeta HTML e força impressão
              </div>
              <div className="pl-4 text-blue-300">
                const janela = window.open("", ""); <br />
                janela.document.write(html);
                <br />
                setTimeout(() {"=>"} janela.print(), 500);
              </div>
              <div className="text-slate-300">{"}"}</div>
            </div>
          </div>
        </section>

        {/* 4. INFRA E SEGURANÇA */}
        <section className="mb-24">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              Infraestrutura & Segurança (Supabase)
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-4xl">
              Como o sistema lida com dados sensíveis (saúde mental, avaliação
              comportamental), arquitetamos o banco utilizando{" "}
              <strong className="text-white">Enums</strong> para tipagem forte,
              Triggers de auditoria e{" "}
              <strong className="text-white">Row Level Security (RLS)</strong>{" "}
              para garantir que links públicos anônimos possam apenas inserir
              respostas, sem jamais vazar os dados da organização.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Segurança RLS Dinâmica",
                  desc: "Políticas (Policies) granulares no PostgreSQL. O usuário anônimo só tem acesso UPDATE na linha específica que contém o seu token único (UUID).",
                  icon: "security",
                },
                {
                  title: "Data Integrity & Enums",
                  desc: "Tipagem forte direto no banco de dados. Status como 'PENDENTE' ou 'CONCLUIDO' são bloqueados contra strings inválidas.",
                  icon: "database",
                },
                {
                  title: "Dashboards Realtime",
                  desc: "Uso de bibliotecas modernas (ApexCharts) para renderizar mapas de radar e rankings que mudam em tempo real conforme as pesquisas chegam.",
                  icon: "monitoring",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <span className="material-symbols-outlined text-blue-500 mb-3 text-3xl">
                    {item.icon}
                  </span>
                  <h4 className="text-white font-bold text-sm mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
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
