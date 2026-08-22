interface Project {
  id: number;
  title: string;
  href: string;
  category: string;
  techs: string[];
  description: string;
  stats: string;
  icon: string;
  color: string;
  border: string;
  iconColor: string;
  isWorkInProgress?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Emprega Fácil Brasil - SaaS",
    href: "/projects/emprega-facil",
    category: "SaaS & Automation Architecture",
    techs: ["Next.js", "Supabase", "Make.com", "Z-API"],
    description:
      "Reengenharia total de um portal de empregos. Arquitetura baseada em eventos com automações de WhatsApp e banco de dados blindado.",
    stats: "Full Scalability",
    icon: "work",
    color: "from-blue-600/20 to-emerald-500/5",
    border: "group-hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    id: 2,
    title: "AVD - Assistente Virtual de Docência",
    href: "/projects/avd",
    category: "AI & Computer Vision",
    techs: ["React Native", "NestJS", "Python", "Gemini 2.5 Flash"],
    description:
      "App SaaS que utiliza OCR local e IA generativa para correção pedagógica de provas dissertativas manuscritas em segundos.",
    stats: "Burnout Prevention",
    icon: "school",
    color: "from-blue-600/20 to-indigo-500/5",
    border: "group-hover:border-blue-500/50",
    iconColor: "text-blue-500",
  },
  {
    id: 3, // NOVO: Responsa Edu
    title: "Responsa Edu",
    href: "/projects/responsa-edu",
    category: "B2B SaaS & Consulting",
    techs: ["Next.js", "Supabase (RLS)", "Tailwind", "ApexCharts"],
    description:
      "Plataforma B2B para consultoria de RH. Hub com Mapeamento DISC, Pesquisa de Clima e dashboards em tempo real com geração de laudos em PDF.",
    stats: "Enterprise Grade",
    icon: "corporate_fare",
    color: "from-blue-600/20 to-orange-500/5",
    border: "group-hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    id: 4, // Quality Watch Guide
    title: "Quality Watch Guide",
    href: "/projects/quality-watch-guide",
    category: "Enterprise SaaS & Automation",
    techs: ["React", "TypeScript", "Supabase", "ExcelJS"],
    description:
      "Sistema corporativo para gestão de inspeções de qualidade. Cálculo de horas operacionais e motor avançado de exportação para templates Excel.",
    stats: "Enterprise Ready",
    icon: "fact_check",
    color: "from-cyan-600/20 to-blue-500/5",
    border: "group-hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
  },
  {
    id: 5,
    title: "sec-npm CLI Tool",
    href: "/projects/sec-npm",
    category: "Segurança & IA",
    techs: ["TypeScript", "Node.js", "Anthropic AI", "CLI"],
    description:
      "Ferramenta de defesa proativa contra ataques de supply chain. Analisa dependências NPM em tempo real para identificar malwares.",
    stats: "Proactive Security",
    icon: "security",
    color: "from-red-600/20 to-orange-500/5",
    border: "group-hover:border-red-500/50",
    iconColor: "text-red-500",
  },
  {
    id: 6,
    title: "Zephira - Joalheria de Luxo",
    href: "/projects/zephira",
    category: "E-commerce & SaaS Architecture",
    techs: ["Next.js", "NestJS", "Prisma Multi-schema", "PostgreSQL"],
    description:
      "Plataforma de e-commerce consultiva com arquitetura multi-tenant ready. Foco em imutabilidade de pedidos e gestão de SKUs.",
    stats: "High Fidelity",
    icon: "diamond",
    color: "from-amber-500/20 to-yellow-600/5",
    border: "group-hover:border-amber-500/50",
    iconColor: "text-amber-500",
    isWorkInProgress: true,
  },
  {
    id: 7,
    title: "Melreels",
    href: "/projects/melreels",
    category: "Telegram Mini App & VOD",
    techs: ["Node.js", "Supabase", "Telegraf", "API Bancária"],
    description:
      "Plataforma de streaming autônoma integrada ao Telegram com gateway de pagamento Pix nativo e conciliação bancária self-healing.",
    stats: "Automated Streaming",
    icon: "play_circle",
    color: "from-red-600/20 to-rose-900/5",
    border: "group-hover:border-red-500/50",
    iconColor: "text-red-500",
  },
  {
    id: 8,
    title: "Restaurante Digital Full Stack",
    href: "/projects/restaurant-cara-coroa",
    category: "Full Stack & Architecture",
    techs: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
    description:
      "Plataforma ponta a ponta com menu digital performático e Dashboard administrativo. Foco em SEO e estabilidade Serverless.",
    stats: "Mobile-First UX",
    icon: "restaurant",
    color: "from-emerald-500/20 to-teal-500/5",
    border: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-500",
  },
  {
    id: 9,
    title: "Saboorbrownie",
    href: "/projects/saboor-brownie",
    category: "Micro-SaaS & Serverless",
    techs: ["Next.js", "Supabase", "Tailwind", "Recharts"],
    description:
      "Sistema de contabilidade e gestão de produção. Controle de lotes, cálculo automático de margem de lucro e dashboard mobile-first.",
    stats: "Profit Optimized",
    icon: "monitoring",
    color: "from-purple-600/20 to-indigo-500/5",
    border: "group-hover:border-purple-500/50",
    iconColor: "text-purple-400",
  },
  {
    id: 10,
    title: "Allan F. - Premium Portfolio",
    href: "/projects/allan-portfolio",
    category: "Performance & Video UX",
    techs: ["Next.js 14", "React", "Supabase Storage", "CDN Optimization"],
    description:
      "Portfolio de alta performance para editor de vídeo. Solução de delivery de vídeos pesados com custo zero de infraestrutura.",
    stats: "100/100 Core Web Vitals",
    icon: "play_circle",
    color: "from-purple-600/20 to-pink-500/5",
    border: "group-hover:border-purple-500/50",
    iconColor: "text-purple-400",
  },
  {
    id: 11,
    title: "App ALFA - Advocacia Piran",
    href: "/projects/alfa-advocacia-piran",
    category: "Legal Tech & AI Automation",
    techs: ["n8n", "Evolution API", "Claude API", "Autentique"],
    description:
      "Agente de IA único orientado a estado que capta e qualifica leads jurídicos direto no WhatsApp, com transcrição de áudio em tempo real e fechamento por assinatura eletrônica sem o lead sair do canal.",
    stats: "24/7 Lead Capture",
    icon: "gavel",
    color: "from-teal-600/20 to-cyan-500/5",
    border: "group-hover:border-teal-500/50",
    iconColor: "text-teal-400",
  },
  {
    id: 12,
    title: "BeeCorp Hub RH",
    href: "/projects/beecorp-hub-rh",
    category: "B2B SaaS & HR Tech",
    techs: ["React/TypeScript", "Supabase", "n8n", "Vercel"],
    description:
      "Plataforma de RH modular com micro-schemas isolados por domínio no Supabase, permitindo evoluir os módulos de Pessoas e Negócios de forma desacoplada.",
    stats: "Decoupled by Design",
    icon: "groups",
    color: "from-indigo-600/20 to-violet-500/5",
    border: "group-hover:border-indigo-500/50",
    iconColor: "text-indigo-400",
  },
  {
    id: 13,
    title: "Custo de Receita",
    href: "/projects/custo-de-receita",
    category: "Enterprise SaaS & Food Tech",
    techs: ["Multi-tenant", "RBAC"],
    description:
      "Motor de cálculo automático de CMV a partir de fichas técnicas estruturadas, sobre arquitetura multi-tenant com RBAC — cada unidade opera isolada na mesma base.",
    stats: "Real-Time CMV",
    icon: "receipt_long",
    color: "from-orange-600/20 to-red-500/5",
    border: "group-hover:border-orange-500/50",
    iconColor: "text-orange-400",
  },
  {
    id: 14,
    title: "g-hub",
    href: "/projects/g-hub",
    category: "SaaS Architecture & Dev Tools",
    techs: ["Next.js", "NestJS", "Prisma", "Railway"],
    description:
      "Monorepo full-stack para centralizar clientes freelance: CRM, gestão de projetos e vault self-hosted planejado, com deploy em Railway.",
    stats: "Full-Cycle Ops",
    icon: "hub",
    color: "from-sky-600/20 to-blue-500/5",
    border: "group-hover:border-sky-500/50",
    iconColor: "text-sky-400",
  },
];
