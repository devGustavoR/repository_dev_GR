import Link from "next/link";

export default function QualityWatchGuideProject() {
  return (
    <main className="relative min-h-screen bg-[#050505] pt-24 pb-20 px-6 overflow-x-hidden">
      {/* Aura Cyan Neon (Vibe Tech Corporativa) */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-700/10 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO SECTION */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between mb-24">
          {/* COLUNA ESQUERDA: IDENTIDADE E CONCEITO */}
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Tags de Status */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                Enterprise Production
              </span>
              <span className="text-slate-500 text-sm font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
                v2.0-refactored
              </span>
              <span className="text-blue-400 text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                B2B SaaS
              </span>
            </div>

            {/* Título com Tipografia Impactante */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
                Quality Watch <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-500 to-blue-600">
                  Guide
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed mt-6 max-w-2xl">
                Sistema corporativo de gestão de qualidade industrial e
                faturamento B2B. Arquitetura Full Stack robusta focada em
                alocação de times dinâmicos, cálculos de balanço operacional em
                tempo real e{" "}
                <strong className="text-cyan-300 font-medium">
                  Geração Automatizada de Relatórios Oficiais
                </strong>
                .
              </p>
            </div>

            {/* Status de Proteção (Sem Live Demo) */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 bg-white/5 border border-white/10 text-slate-400 text-sm font-medium cursor-help hover:bg-white/10 transition-colors"
                title="Este sistema é de uso interno e o código é protegido por NDA."
              >
                <span className="material-symbols-outlined text-[18px] text-cyan-500">
                  lock
                </span>
                Protected Enterprise App & Private Repo
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: TECH STACK CARD */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 flex flex-col gap-6 min-w-[320px] backdrop-blur-md shadow-2xl relative overflow-hidden group lg:mt-0 mt-8">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[60px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>

            <div className="flex items-center gap-3 text-white font-bold">
              <div className="p-2.5 rounded-lg bg-cyan-500/20 ring-1 ring-cyan-500/30">
                <span className="material-symbols-outlined text-cyan-400 text-lg block">
                  architecture
                </span>
              </div>
              <span className="uppercase tracking-widest text-xs font-bold text-slate-200">
                Enterprise Stack
              </span>
            </div>

            <ul className="space-y-6 text-sm mt-2">
              <li className="flex gap-4 items-start group/item">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                <div className="flex flex-col gap-1">
                  <strong className="text-slate-200 text-xs uppercase tracking-wider">
                    PostgreSQL Re-engineering
                  </strong>
                  <span className="text-slate-400 group-hover/item:text-slate-300 transition-colors leading-relaxed">
                    Migração estrutural no Supabase para arrays (
                    <code className="text-cyan-400 text-[10px] bg-cyan-400/10 px-1 py-0.5 rounded">
                      uuid[]
                    </code>
                    ) com RLS em cascata.
                  </span>
                </div>
              </li>
              <li className="flex gap-4 items-start group/item">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                <div className="flex flex-col gap-1">
                  <strong className="text-slate-200 text-xs uppercase tracking-wider">
                    Smart Engine Export
                  </strong>
                  <span className="text-slate-400 group-hover/item:text-slate-300 transition-colors leading-relaxed">
                    Manipulação binária de templates nativos (ExcelJS) com
                    proteção dinâmica de rodapés e assinaturas.
                  </span>
                </div>
              </li>
              <li className="flex gap-4 items-start group/item">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                <div className="flex flex-col gap-1">
                  <strong className="text-slate-200 text-xs uppercase tracking-wider">
                    React + TypeScript
                  </strong>
                  <span className="text-slate-400 group-hover/item:text-slate-300 transition-colors leading-relaxed">
                    Prevenção de <em>Crash</em> (Null-Safe) e algoritmos de
                    cálculo de balanço operacional em tempo real.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* METRICS ROW (Impacto do Projeto) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
          {[
            { value: "Multi-Team", label: "Alocação Dinâmica por OS" },
            { value: "Zero-Crash", label: "Exportação Null-Safe" },
            { value: "100%", label: "Precisão de Faturamento (Real vs Meta)" },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center gap-2"
            >
              <span className="text-3xl font-black text-white">
                {metric.value}
              </span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* FEATURE 1: EXPORT ENGINE (O Grande Desafio) */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Motor de Exportação Oficial
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                O maior gargalo do cliente era a geração de relatórios manuais.
                Sistemas comuns fazem "despejo" de dados em CSV, mas o setor
                corporativo exige planilhas com{" "}
                <strong>
                  validade legal, layout travado, logos e áreas de assinatura
                </strong>
                .
              </p>
              <p>
                A solução de nível sênior foi descartar bibliotecas de
                exportação simples e implementar o{" "}
                <strong className="text-cyan-400">ExcelJS</strong>. Construí um
                "Hidratador de Templates": o sistema baixa um arquivo binário
                invisível (o template vazio da empresa), mapeia as células
                mescladas (
                <code className="text-sm bg-white/10 px-1 rounded">
                  !merges
                </code>
                ) e injeta os dados cirurgicamente.
              </p>
              <p>
                <strong>O detalhe de mestre:</strong> O script possui um{" "}
                <em>scanner</em> que desce as linhas buscando a palavra
                "TOTAIS". Ele insere os apontamentos e para examente ali,
                garantindo que o rodapé com CNPJ e Textos Legais jamais seja
                sobrescrito.
              </p>
            </div>

            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 font-mono text-xs sm:text-sm space-y-2.5 shadow-2xl shadow-cyan-900/20 overflow-x-auto">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-slate-500">exportService.ts</span>
              </div>
              <div className="text-slate-500">
                // Scanner dinâmico para proteção do rodapé corporativo
              </div>
              <div className="text-slate-300">
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-400">totalsRow</span> ={" "}
                <span className="text-orange-300">14</span>;
              </div>
              <div className="text-slate-300">
                <span className="text-purple-400">while</span> (totalsRow &lt;{" "}
                <span className="text-orange-300">100</span>) &lbrace;
              </div>
              <div className="pl-6 text-slate-300">
                <span className="text-purple-400">const</span> cell =
                worksheet.getRow(totalsRow).getCell(
                <span className="text-orange-300">1</span>);
              </div>
              <div className="pl-6 text-slate-500">
                // Null-safe check para evitar crash no ExcelJS
              </div>
              <div className="pl-6 text-emerald-400">
                <span className="text-purple-400">const</span> cellVal =
                cell.value ? String(cell.value).toUpperCase() :{" "}
                <span className="text-green-300">""</span>;
              </div>
              <div className="pl-6 mt-2 text-cyan-300">
                <span className="text-purple-400">if</span> (cellVal.includes(
                <span className="text-green-300">"TOTAIS"</span>)){" "}
                <span className="text-purple-400">break</span>;
              </div>
              <div className="pl-6 text-slate-300">totalsRow++;</div>
              <div className="text-slate-300">&rbrace;</div>
            </div>
          </div>
        </section>

        {/* FEATURE 2: DB RE-ENGINEERING & BUSINESS LOGIC */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4 flex-row-reverse">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-right">
              Engenharia de Dados & RLS
            </h2>
            <span className="h-px flex-1 bg-gradient-to-l from-blue-500/50 to-transparent"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 font-mono text-xs sm:text-sm space-y-3 shadow-2xl shadow-blue-900/20 order-2 lg:order-1">
              <div className="text-blue-400 font-bold mb-2">
                Supabase RLS Policy (Array Auth)
              </div>
              <div className="text-slate-300">
                <span className="text-purple-400">CREATE POLICY</span>{" "}
                "Inspetores veem suas OSs"
              </div>
              <div className="text-slate-300">
                <span className="text-purple-400">ON</span> public."INSPECOES"
              </div>
              <div className="text-slate-300">
                <span className="text-purple-400">FOR SELECT USING</span> (
              </div>
              <div className="pl-4 text-emerald-400">
                <span className="text-slate-500">
                  -- auth.uid() deve estar dentro do array de UUIDs
                </span>
              </div>
              <div className="pl-4 text-cyan-300">
                auth.uid() = <span className="text-orange-300">ANY</span>
                (cd_inspetor)
              </div>
              <div className="text-slate-300">);</div>
            </div>

            <div className="space-y-6 text-slate-400 leading-relaxed text-lg order-1 lg:order-2">
              <p>
                O escopo inicial não suportava alocação de equipes. Fiz uma
                reengenharia profunda no banco de dados (Supabase/PostgreSQL),
                alterando as chaves estrangeiras para tipos complexos de Array (
                <code className="text-cyan-400 bg-cyan-400/10 px-1 rounded text-sm">
                  uuid[]
                </code>
                ).
              </p>
              <p>
                Isso exigiu a reescrita total das políticas de segurança{" "}
                <strong className="text-white">RLS (Row Level Security)</strong>
                . O banco agora avalia em tempo real se o ID logado está{" "}
                <em>"dentro"</em> do array de inspetores daquela linha,
                garantindo que funcionários não vejam fotos, defeitos e dados
                financeiros de plantas concorrentes.
              </p>
              <p>
                Também implementei validações no Frontend para{" "}
                <strong>Prevenção de Overlap</strong>: algoritmos que cruzam
                horários e impedem que a operação escale o mesmo funcionário em
                duas Ordens de Serviço simultâneas, processando também
                abatimentos de intervalos no cálculo de Horas Úteis.
              </p>
            </div>
          </div>
        </section>

        {/* 3. MINDSET PLENO (Cards finais) */}
        <section className="mb-24">
          <div className="p-8 md:p-12 rounded-3xl bg-linear-to-br from-cyan-600/10 via-blue-900/5 to-transparent border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Padrão Corporativo (Enterprise Grade)
            </h3>
            <p className="text-slate-400 text-lg mb-10 max-w-3xl">
              Diferente de sistemas B2C, softwares B2B de faturamento não
              toleram inconsistências. Cada linha de código foi pensada para
              blindar a operação contra erros humanos e falhas de banco.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "verified_user",
                  title: "Null-Safe Architecture",
                  desc: "Se um registro antigo de 2023 estiver incompleto no banco, as funções de renderização usam fallbacks seguros, evitando o temido 'crash da tela branca'.",
                },
                {
                  icon: "insights",
                  title: "Balanço Operacional",
                  desc: "Módulo React que processa em tempo real: (Peças Totais / Horas Trabalhadas), comparando com a Meta Contratada para entregar o índice exato de Eficiência.",
                },
                {
                  icon: "rule",
                  title: "Constraint Integrity",
                  desc: "Tratamento de Defaults no Supabase, garantindo que colunas obrigatórias como 'ts_inspecao' sempre recebam timestamps válidos da API, mantendo a auditoria limpa.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group/card"
                >
                  <span className="material-symbols-outlined text-3xl text-cyan-500/50 mb-4 group-hover/card:text-cyan-400 transition-colors">
                    {item.icon}
                  </span>
                  <h4 className="text-white font-bold text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
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
            className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors font-medium"
          >
            <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">
              west
            </span>{" "}
            Voltar aos Projetos
          </Link>
          <div className="text-slate-600 text-sm font-mono">
            Full Stack Engineering
          </div>
        </div>
      </div>
    </main>
  );
}
