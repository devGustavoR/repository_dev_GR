import Link from "next/link";

export default function AvdProject() {
  return (
    <main className="relative min-h-screen bg-obsidian pt-24 pb-20 px-6 overflow-x-hidden">
      {/* Background Decorativo - Blue Aura */}
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-blue-600/10 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-lg">
                psychology
              </span>
              <span>EdTech & Generative AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              AVD: Assistente Virtual <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-600">
                de Docência
              </span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed mt-4">
              &quot;Correção pedagógica de provas dissertativas em segundos,
              combatendo o burnout docente com Inteligência Artificial.&quot;
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "React Native",
                "NestJS",
                "Python (FastAPI)",
                "Gemini 2.5 Flash",
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
            <div
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-slate-500 text-sm font-bold cursor-help group relative"
              title="Este repositório é privado por questões de direitos autorais e diretrizes acadêmicas."
            >
              <span className="material-symbols-outlined text-sm">lock</span>
              Repositório Privado
              {/* Tooltip elegante que aparece no hover */}
              <span className="absolute top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black border border-white/10 text-[10px] text-slate-300 px-3 py-1 rounded-md whitespace-nowrap z-30">
                Acesso restrito (Projeto Acadêmico/TCM)
              </span>
            </div>

            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 border border-primary/50 text-primary text-sm font-bold hover:bg-primary/10 transition-all"
            >
              Ver Outros Projetos
            </Link>
          </div>
        </div>

        {/* 1. ARQUITETURA HÍBRIDA */}

        <section className="mt-20 mb-20 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white text-nowrap">
              Arquitetura Híbrida
            </h2>
            <span className="h-px w-full bg-white/10"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
              <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-lg">
                <span className="material-symbols-outlined">edgesys</span>
                Etapa 1: Edge Computing
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                Extração de texto (OCR) via <strong>EasyOCR</strong> em
                microserviço Python local. Garante custo zero de processamento
                de imagem e funcionamento offline-first para digitalização em
                áreas com conectividade instável.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all">
              <h4 className="text-indigo-400 font-bold mb-4 flex items-center gap-2 text-lg">
                <span className="material-symbols-outlined">cloud_done</span>
                Etapa 2: Cloud Intelligence
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                O texto extraído é enviado ao{" "}
                <strong>Google Gemini 2.5 Flash</strong>. Utilizamos{" "}
                <strong>JSON Mode</strong> para receber correções estruturadas e
                feedbacks motivadores com baixo custo de tokens.
              </p>
            </div>
          </div>
        </section>

        {/* 2. ESTRUTURA DE DIRETÓRIOS & WORKER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Ecossistema Modular
            </h3>
            <div className="font-mono text-[11px] space-y-4 p-6 rounded-xl bg-[#0d0d0d] border border-white/10">
              <div className="text-blue-400">📂 back-end (NestJS)</div>
              <div className="pl-4 text-slate-500">
                /Orquestração e Gestão SaaS
              </div>
              <div className="text-indigo-400">📂 front-end (React Native)</div>
              <div className="pl-4 text-slate-500">
                /UX de Captura e Visualização
              </div>
              <div className="text-emerald-400">📂 worker-python (FastAPI)</div>
              <div className="pl-4 text-slate-500">
                /Motor de IA e Vision (OCR)
              </div>
              <div className="text-amber-400">📂 dados-compartilhados</div>
              <div className="pl-4 text-slate-500">
                /Contratos DTO e Interfaces
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl font-bold text-white text-sm md:text-2xl">
              O Coração da IA (Python Inference)
            </h3>
            <div className="relative rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/10 shadow-2xl">
              <div className="p-4 bg-white/5 border-b border-white/5 text-xs font-mono text-slate-500">
                worker-python // ocr_processor.py
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-xs md:text-sm text-slate-300 leading-relaxed">
                  <code>
                    <span className="text-purple-400">import</span> easyocr
                    {"\n"}
                    <span className="text-purple-400">from</span>{" "}
                    google.generativeai{" "}
                    <span className="text-purple-400">import</span>{" "}
                    GenerativeModel{"\n\n"}
                    <span className="text-slate-500">
                      # Etapa Local (Economia de Infra)
                    </span>
                    {"\n"}
                    reader = easyocr.Reader([&apos;pt&apos;]){"\n"}
                    raw_text = reader.readtext(image_path, detail=0){"\n\n"}
                    <span className="text-slate-500">
                      # Etapa Cloud (Inteligência Semântica)
                    </span>
                    {"\n"}
                    prompt ={" "}
                    <span className="text-green-400">
                      f&quot;Atue como corretor pedagógico:
                      &lbrace;raw_text&rbrace;&quot;
                    </span>
                    {"\n"}
                    response = model.generate_content(prompt,
                    generation_config=&lbrace;&quot;response_mime_type&quot;:
                    &quot;application/json&quot;&rbrace;){"\n"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* 3. FOOTER NAV */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
          <Link
            href="/projects"
            className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined">west</span> Todos os
            Projetos
          </Link>
          <p className="text-xs text-slate-600 font-mono italic">
            Case Study // AVD EdTech
          </p>
        </div>
      </div>
    </main>
  );
}
