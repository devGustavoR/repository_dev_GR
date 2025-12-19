import { PORTFOLIO_DATA } from "@/data/portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-[calc(100vh-80px)] py-20 px-6 overflow-hidden">
      {/* Background Glows (Sutil) */}
      <div className="absolute top-[-20%] right-[-10%] w-125 h-125 bg-primary/20 rounded-full blur-[128px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[128px] opacity-40 pointer-events-none" />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* COLUNA ESQUERDA: Texto e Apresentação */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          {/* Badges Superiores */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              Salvador, Brasil
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
              <span className="material-symbols-outlined text-sm">
                terminal
              </span>
              Engenheiro Backend
            </div>
          </div>

          {/* Títulos */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
              Desenvolvedor & Otimizador
            </h2>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Gustavo Ribeiro
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
              Engenheiro de Software focado em performance. Especialista em
              <span className="text-white font-medium">
                {" "}
                NestJS, Docker e Migração de Legado
              </span>
              . De suporte técnico a arquitetura de alta criticidade.
            </p>
          </div>

          {/* Lista de Destaques */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {[
              "Especialista em NestJS & Node.js",
              "Docker: Deploy 50% mais rápido",
              "Setor de Saúde (Alta Criticidade)",
              "Migração Java/Oracle Legacy",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-slate-300 text-sm font-medium"
              >
                <span className="material-symbols-outlined text-emerald-500 text-xl">
                  star
                </span>
                {item}
              </div>
            ))}
          </div>

          {/* CTAs e Social */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/projects"
              className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-bold hover:bg-slate-200 transition-all"
            >
              <span className="material-symbols-outlined text-xl">
                folder_open
              </span>
              Ver Projetos
            </Link>

            <a
              href={PORTFOLIO_DATA.links.linkedin}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-all"
            >
              <span className="material-symbols-outlined text-xl">link</span>
              LinkedIn
            </a>

            <div className="flex items-center gap-4 ml-4 px-4 py-2 border-l border-white/10">
              {/* Ícones sociais minimalistas */}
              <span className="material-symbols-outlined text-slate-500 hover:text-white cursor-pointer transition-colors">
                code
              </span>
              <span className="material-symbols-outlined text-slate-500 hover:text-white cursor-pointer transition-colors">
                alternate_email
              </span>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Bento Grid */}
        <div className="lg:col-span-5 w-full">
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1: Status (Disponível) */}
            <div className="col-span-2 bg-obsidian border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">
                  person_check
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-wider">
                  Disponível para Projetos
                </span>
              </div>
              <p className="text-slate-300 text-sm">
                Pronto para atuar em arquitetura de microsserviços e liderança
                técnica.
              </p>
            </div>

            {/* Card 2: Experiência */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary mb-2">
                schedule
              </span>
              <h3 className="text-3xl font-bold text-white">4+</h3>
              <p className="text-xs text-slate-400 uppercase tracking-wide">
                Anos de Exp.
              </p>
            </div>

            {/* Card 3: Otimização */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-blue-500 mb-2">
                rocket_launch
              </span>
              <h3 className="text-3xl font-bold text-white">50%</h3>
              <p className="text-xs text-slate-400 uppercase tracking-wide">
                Deploys mais rápidos
              </p>
            </div>

            {/* Card 4: Stack Visual (Premium & Realista) */}
            <div className="col-span-2 bg-[#0F1115] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/30 transition-all group">
              <div className="flex justify-between items-start">
                <p className="text-xs text-slate-500 font-mono mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  CORE_STACK.JSON
                </p>
                <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">
                  terminal
                </span>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
                  {/* NestJS */}
                  <div
                    className="w-12 h-12 rounded-full bg-[#1c1c1c] border-2 border-[#0F1115] flex items-center justify-center hover:scale-110 hover:z-10 transition-transform relative z-0"
                    title="NestJS"
                  >
                    <i className="devicon-nestjs-original text-2xl text-[#E0234E]"></i>
                  </div>

                  {/* TypeScript */}
                  <div
                    className="w-12 h-12 rounded-full bg-[#1c1c1c] border-2 border-[#0F1115] flex items-center justify-center hover:scale-110 hover:z-10 transition-transform relative z-0"
                    title="TypeScript"
                  >
                    <i className="devicon-typescript-plain text-2xl text-[#3178C6]"></i>
                  </div>

                  {/* Docker */}
                  <div
                    className="w-12 h-12 rounded-full bg-[#1c1c1c] border-2 border-[#0F1115] flex items-center justify-center hover:scale-110 hover:z-10 transition-transform relative z-0"
                    title="Docker"
                  >
                    <i className="devicon-docker-plain text-2xl text-[#2496ED]"></i>
                  </div>

                  {/* PostgreSQL */}
                  <div
                    className="w-12 h-12 rounded-full bg-[#1c1c1c] border-2 border-[#0F1115] flex items-center justify-center hover:scale-110 hover:z-10 transition-transform relative z-0"
                    title="PostgreSQL"
                  >
                    <i className="devicon-postgresql-plain text-2xl text-[#336791]"></i>
                  </div>

                  {/* Java (Legado/Extra) */}
                  <div
                    className="w-12 h-12 rounded-full bg-[#1c1c1c] border-2 border-[#0F1115] flex items-center justify-center hover:scale-110 hover:z-10 transition-transform relative z-0"
                    title="Java"
                  >
                    <i className="devicon-java-plain text-2xl text-orange-500"></i>
                  </div>
                </div>

                <div className="text-right">
                  <span className="material-symbols-outlined text-slate-600 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
