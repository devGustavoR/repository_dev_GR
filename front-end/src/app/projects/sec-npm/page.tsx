import Link from "next/link";

export default function SecNpmDetails() {
  return (
    <main className="relative min-h-screen bg-obsidian pt-24 pb-20 px-6 overflow-x-hidden">
      {/* Background Decorativo - Crimson Aura */}
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-red-600/10 blur-[120px]"></div>

      <section className="mx-auto max-w-7xl">
        {/* HERO SECTION */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-lg">shield</span>
              <span>Segurança Proativa • AI-Powered CLI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              sec-npm <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-600">
                The AI Security Engine
              </span>
            </h1>

            <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed mt-4">
              Uma ferramenta CLI open-source que intercepta ataques de supply
              chain no ecossistema NPM, analisando comportamentos maliciosos via
              IA antes da execução de scripts de ciclo de vida.
            </p>

            {/* Badges de Ecossistema */}
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "TypeScript",
                "Node.js (ESM)",
                "Anthropic API",
                "Shift-Left Security",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-1.5 text-sm font-semibold text-slate-300 border border-white/10"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    verified_user
                  </span>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0">
            <a
              href="https://github.com/devgustavor/sec-npm"
              target="_blank"
              className="group flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white text-black text-sm font-bold hover:bg-slate-200 transition-all"
            >
              <span className="material-symbols-outlined">code</span>
              Ver Repositório
            </a>
          </div>
        </div>

        {/* TERMINAL SHOWCASE (Demonstração Visual) */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d0d0d] relative group">
          <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center justify-between px-4 z-20">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-red-500/50"></div>
              <div className="size-3 rounded-full bg-yellow-500/50"></div>
              <div className="size-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="text-xs font-mono text-slate-500">
              terminal — sec-npm install malware-package
            </span>
          </div>

          <div className="p-8 pt-16 font-mono text-sm leading-relaxed text-slate-300 min-h-75 whitespace-pre">
            <code>
              <span className="text-green-400">➜</span>{" "}
              <span className="text-blue-400">~</span> npx @devgustavor/sec-npm
              install malicious-lib{"\n"}
              {"\n"}
              <span className="text-yellow-400">◆</span> Buscando metadados no
              registry.npmjs.org... <span className="text-green-500">✔</span>
              {"\n"}
              <span className="text-yellow-400">◆</span> Analisando tarball e
              scripts de pré-instalação...{" "}
              <span className="text-green-500">✔</span>
              {"\n"}
              <span className="text-yellow-400">◆</span> Consultando Motor de IA
              (Claude 3.5 Sonnet)... <span className="text-green-500">✔</span>
              {"\n"}
              {"\n"}
              <span className="bg-red-900/50 text-red-200 px-2 py-1 rounded">
                ⚠️ RISCO ALTO DETECTADO
              </span>
              {"\n"}
              {"\n"}
              <span className="text-red-400">┌</span>{" "}
              <span className="font-bold">Análise Comportamental:</span>
              {"\n"}
              <span className="text-red-400">│</span> • Script de
              &apos;preinstall&apos; tenta acessar /etc/passwd{"\n"}
              <span className="text-red-400">│</span> • Ofuscação de código
              detectada em &apos;index.js&apos; (base64 payload){"\n"}
              <span className="text-red-400">│</span> • Tentativa de exfiltração
              de dados para IP não catalogado.{"\n"}
              <span className="text-red-400">└</span>
              {"\n"}
              {"\n"}
              <span className="text-white font-bold">
                Deseja cancelar a instalação? (S/n) ›
              </span>{" "}
              <span className="animate-pulse">_</span>
            </code>
          </div>
        </div>
      </section>

      {/* DETALHES TÉCNICOS & ARQUITETURA */}
      <section className="mx-auto max-w-7xl mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* SIDEBAR: ESTRUTURA DE DIRETÓRIOS */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  account_tree
                </span>
                Directory Tree
              </h4>
              <nav className="font-mono text-xs space-y-3 text-slate-400">
                <div className="text-slate-200">src/</div>
                <div className="pl-4 border-l border-white/10">
                  <div
                    className="py-1 hover:text-primary transition-colors cursor-help"
                    title="Entry Point e Parsing de Args"
                  >
                    index.ts
                  </div>
                  <div
                    className="py-1 hover:text-primary transition-colors cursor-help"
                    title="Prompt Engineering e Integração Anthropic"
                  >
                    engine.ts
                  </div>
                  <div
                    className="py-1 hover:text-primary transition-colors cursor-help"
                    title="Interação com Registro NPM"
                  >
                    registry.ts
                  </div>
                  <div
                    className="py-1 hover:text-primary transition-colors cursor-help"
                    title="Extrator de Código Crítico"
                  >
                    scanner.ts
                  </div>
                  <div
                    className="py-1 hover:text-primary transition-colors cursor-help"
                    title="Interface Terminal (Clack/Prompts)"
                  >
                    ui.ts
                  </div>
                </div>
                <div className="mt-4 text-slate-500 italic">
                  BYOK Model (Bring Your Own Key)
                </div>
              </nav>
            </div>
          </div>

          {/* CONTEÚDO PRINCIPAL: O FLUXO DE DADOS */}
          <div className="lg:col-span-8 space-y-20">
            {/* Explicação da Arquitetura */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Arquitetura de Segurança Shift-Left
              </h2>
              <p className="text-lg leading-8 text-slate-400">
                Diferente do{" "}
                <code className="text-slate-200 bg-white/5 px-1 rounded">
                  npm audit
                </code>
                , que é reativo e depende de vulnerabilidades conhecidas (CVEs),
                o <strong className="text-white">sec-npm</strong> atua de forma
                heurística. Ele analisa o código &quot;vivo&quot; antes que
                qualquer script do pacote toque o sistema de arquivos local.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  {
                    icon: "search",
                    title: "Scan",
                    desc: "Varredura de scripts de ciclo de vida.",
                  },
                  {
                    icon: "psychology",
                    title: "Inference",
                    desc: "Análise por IA de padrões ofuscados.",
                  },
                  {
                    icon: "block",
                    title: "Intercept",
                    desc: "Bloqueio proativo de ameaças Zero-Day.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-lg bg-[#1a1010] border border-white/5"
                  >
                    <span className="material-symbols-outlined text-primary mb-2">
                      {item.icon}
                    </span>
                    <h4 className="text-white font-bold text-sm">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fluxo de Dados */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                O Fluxo de Dados (Pipeline)
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Fetch",
                    content:
                      "O registry.ts busca o tarball e os metadados diretamente da fonte oficial do NPM.",
                  },
                  {
                    step: "02",
                    title: "Pre-Filtering",
                    content:
                      "O scanner.ts extrai apenas arquivos críticos (install.js, index.js) para otimizar o uso de tokens da API.",
                  },
                  {
                    step: "03",
                    title: "Explainable Security",
                    content:
                      "A IA não apenas bloqueia; ela explica detalhadamente o risco detectado, educando o desenvolvedor.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-6 p-6 rounded-xl bg-white/5 border border-white/5 group hover:border-primary/20 transition-all"
                  >
                    <span className="text-3xl font-black text-primary/20 group-hover:text-primary transition-colors">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sustentabilidade */}
            <div className="p-8 rounded-2xl bg-linear-to-br from-primary/10 to-transparent border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-4">
                Sustentabilidade Open-Source
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                O projeto utiliza o modelo{" "}
                <strong className="text-white">
                  BYOK (Bring Your Own Key)
                </strong>
                , garantindo que usuários avançados utilizem sua própria
                infraestrutura de IA sem custos centralizados para o mantenedor,
                permitindo que a ferramenta permaneça gratuita e focada na
                comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION FOOTER */}
      <section className="border-t border-white/10 pt-12 mt-20 mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <Link
            href="/projects"
            className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined">west</span>
            Voltar para Projetos
          </Link>
        </div>
      </section>
    </main>
  );
}
