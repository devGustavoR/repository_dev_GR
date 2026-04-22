"use client";

const SERVICES = [
  {
    id: "saas",
    title: "Plataformas SaaS & B2B",
    description:
      "Arquitetura de sistemas multi-tenant com permissões granulares (RLS). Foco em dashboards analíticos e gestão complexa de dados corporativos.",
    icon: "dashboard", // Ícone de dashboard (Responsa Edu / Quality Watch)
    tags: ["Next.js", "Supabase", "ApexCharts", "Multi-tenant"],
    color: "group-hover:text-blue-400",
    border: "group-hover:border-blue-400/30",
    bg: "bg-blue-400/5",
  },
  {
    id: "ai-automation",
    title: "IA & Automação Inteligente",
    description:
      "Integração de LLMs (Gemini/Claude) para processamento de dados, OCR de documentos e automação de fluxos via WhatsApp e APIs de eventos.",
    icon: "smart_toy", // Ícone de IA (AVD / Emprega Fácil)
    tags: ["Gemini AI", "OCR", "Make.com", "Python/Node"],
    color: "group-hover:text-primary",
    border: "group-hover:border-primary/30",
    bg: "bg-primary/5",
  },
  {
    id: "bots-mini-apps",
    title: "Bots & Telegram Mini Apps",
    description:
      "Desenvolvimento de aplicações nativas para Telegram com sistemas de pagamento Pix, entrega de conteúdo (VOD) e ferramentas de CLI seguras.",
    icon: "robot_2", // Ícone de Robô/Bot (Melreels / sec-npm)
    tags: ["Telegraf", "Webhooks", "Pix API", "CLI Tools"],
    color: "group-hover:text-emerald-500",
    border: "group-hover:border-emerald-500/30",
    bg: "bg-emerald-500/5",
  },
  {
    id: "performance",
    title: "Performance & Infraestrutura",
    description:
      "Otimização de entrega de ativos pesados (vídeos/CDNs), dockerização de ambientes e modernização de sistemas legados para arquitetura serverless.",
    icon: "speed", // Ícone de Velocidade (Allan F. / Docker)
    tags: ["Docker", "CDN", "Core Web Vitals", "Legacy Migration"],
    color: "group-hover:text-purple-500",
    border: "group-hover:border-purple-500/30",
    bg: "bg-purple-500/5",
  },
];

export const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
      {SERVICES.map((service) => (
        <div
          key={service.id}
          className={`group p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${service.border}`}
        >
          {/* Ícone com fundo dinâmico no hover */}
          <div
            className={`size-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${service.color}`}
          >
            <span className="material-symbols-outlined text-4xl">
              {service.icon}
            </span>
          </div>

          <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-white transition-colors">
            {service.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
            {service.description}
          </p>

          {/* Tags de Tecnologias (Sincronizadas com seus projetos) */}
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg group-hover:border-white/10 group-hover:text-slate-200 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
