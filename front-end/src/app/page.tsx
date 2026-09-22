import { AmbientGlow } from "@/components/common/AmbientGlow";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { GitHubIcon, LinkedInIcon } from "@/components/common/BrandIcons";
import { MagneticButton } from "@/components/common/MagneticButton";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfólio de Gustavo Ribeiro, Engenheiro Backend especializado em NestJS, Docker e modernização de sistemas de alta criticidade.",
};

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-[calc(100vh-80px)] py-10 md:py-20 px-6 overflow-hidden">
      {/* Background Decorativo - Aumentei a opacidade para dar profundidade */}
      <AmbientGlow>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      </AmbientGlow>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        {/* COLUNA ESQUERDA: Texto */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                Disponível para novos desafios
              </span>
            </div>

            <div className="space-y-4">
              <AnimatedHeading className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                Gustavo <br />
                <span className="text-white bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-emerald-400">
                  Ribeiro
                </span>
              </AnimatedHeading>
              <p className="text-lg md:text-xl text-slate-400 font-light max-w-xl leading-relaxed">
                Engenheiro de Software focado em{" "}
                <span className="text-white border-b border-primary/40">
                  infraestrutura e performance
                </span>
                . Especialista em NestJS e modernização de sistemas de alta
                criticidade.
              </p>
            </div>
          </div>

          {/* Destaques com ícones melhores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 w-full border-l-2 border-white/5 pl-6">
            {[
              { text: "Especialista NestJS & Node.js", icon: "terminal" },
              { text: "Docker & Kubernetes Ready", icon: "layers" },
              {
                text: "Sistemas de Saúde (Mission Critical)",
                icon: "health_and_safety",
              },
              { text: "Legacy Migration (Java/Oracle)", icon: "update" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-slate-300 text-sm"
              >
                <span className="material-symbols-outlined text-primary text-lg">
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            <MagneticButton>
              <Link
                href="/projects"
                className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              >
                Ver Projetos
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </MagneticButton>

            <div className="flex items-center gap-4">
              <MagneticButton strength={0.5}>
                <a
                  href={PORTFOLIO_DATA.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all block"
                >
                  <LinkedInIcon className="size-5" />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.5}>
                <a
                  href={PORTFOLIO_DATA.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all block"
                >
                  <GitHubIcon className="size-5" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Bento Grid Refinado */}
        <div className="lg:col-span-5 w-full">
          <div className="grid grid-cols-2 gap-4">
            {/* Status Card */}
            <div className="col-span-2 bg-[#121212] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                  Engenheiro Backend
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded">
                    Senior Mindset
                  </span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Focado em resolver gargalos de banco de dados e automação de
                  deploys em ambientes complexos.
                </p>
              </div>
            </div>

            {/* Exp Card */}
            <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-6 hover:bg-white/[0.05] transition-all">
              <span className="material-symbols-outlined text-3xl text-primary mb-2">
                schedule
              </span>
              <h3 className="text-4xl font-black text-white italic">4+</h3>
              <p className="text-[10px] text-slate-500 uppercase tracking-[2px] mt-1">
                Anos no Mercado
              </p>
            </div>

            {/* Performance Card */}
            <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-6 hover:bg-white/[0.05] transition-all">
              <span className="text-blue-500 font-mono text-sm mb-2 material-symbols-outlined">
                rocket_launch
              </span>
              <h3 className="text-4xl font-black text-white italic">50%</h3>
              <p className="text-[10px] text-slate-500 uppercase tracking-[2px] mt-1">
                Faster Deploys
              </p>
            </div>

            {/* Tech Stack Horizontal */}
            <div className="col-span-2 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 rounded-3xl p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Main Stack
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
                </div>
              </div>

              <div className="flex justify-around items-center">
                {[
                  { src: "/icons/nestjs-original.svg", alt: "NestJS" },
                  { src: "/icons/typescript-plain.svg", alt: "TypeScript" },
                  { src: "/icons/docker-plain.svg", alt: "Docker" },
                  { src: "/icons/postgresql-plain.svg", alt: "PostgreSQL" },
                  { src: "/icons/java-plain.svg", alt: "Java" },
                ].map((tech) => (
                  <Image
                    key={tech.alt}
                    src={tech.src}
                    alt={tech.alt}
                    title={tech.alt}
                    width={32}
                    height={32}
                    unoptimized
                    className="size-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all cursor-help"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
