export const PROJECTS = [
  {
    id: 1,
    title: "sec-npm CLI Tool",
    href: "/projects/sec-npm", // Podemos criar o Deep Dive depois
    category: "Segurança & IA",
    techs: ["TypeScript", "Node.js", "Anthropic AI", "CLI"],
    description:
      "Ferramenta de defesa proativa contra ataques de supply chain. Analisa dependências NPM em tempo real usando IA para identificar malwares antes da instalação.",
    stats: "Proactive Security",
    icon: "security",
    color: "from-red-600/20 to-orange-500/5",
    border: "group-hover:border-red-500/50",
    iconColor: "text-red-500",
  },
  {
    id: 2,
    title: "Restaurante Digital Full Stack",
    href: "/projects/restaurant-cara-coroa",
    category: "Full Stack & Architecture",
    techs: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
    description:
      "Plataforma ponta a ponta com menu digital performático e Dashboard administrativo. Foco em SEO, SSR e estabilidade em ambientes Serverless.",
    stats: "Mobile-First UX",
    icon: "restaurant",
    color: "from-emerald-500/20 to-teal-500/5",
    border: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-500",
  },
  {
    id: 3,
    title: "AVD - Assistente Virtual de Docência",
    href: "/projects/avd",
    category: "AI & Computer Vision",
    techs: ["React Native", "NestJS", "Python (FastAPI)", "Gemini 2.5 Flash"],
    description:
      "App SaaS que utiliza OCR local e IA generativa para correção pedagógica de provas dissertativas manuscritas em segundos.",
    stats: "Burnout Prevention",
    icon: "school",
    color: "from-blue-600/20 to-indigo-500/5",
    border: "group-hover:border-blue-500/50",
    iconColor: "text-blue-500",
  },
  {
    id: 4,
    title: "Zephira - Joalheria de Luxo",
    href: "/projects/zephira",
    category: "E-commerce & SaaS Architecture",
    techs: ["Next.js", "NestJS", "Prisma Multi-schema", "PostgreSQL"],
    description:
      "Plataforma de e-commerce consultiva com arquitetura multi-tenant ready. Foco em imutabilidade de pedidos e gestão complexa de SKUs/Variantes.",
    stats: "WIP - High Fidelity",
    icon: "diamond",
    color: "from-amber-500/20 to-yellow-600/5",
    border: "group-hover:border-amber-500/50",
    iconColor: "text-amber-500",
    isWorkInProgress: true, // Tag para o componente renderizar o badge "Em desenvolvimento"
  },
  {
    id: 5,
    title: "Emprega Fácil Brasil - SaaS",
    href: "/projects/emprega-facil",
    category: "SaaS & Automation Architecture",
    techs: ["Next.js", "Supabase", "Make.com", "Z-API"],
    description:
      "Reengenharia total de um portal de empregos. Implementação de arquitetura baseada em eventos com automações de WhatsApp, QR Code para check-in de entrevistas e banco de dados corporativo blindado.",
    stats: "Full Scalability",
    icon: "work",
    color: "from-blue-600/20 to-emerald-500/5",
    border: "group-hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    id: 6,
    title: "Allan F. - Premium Portfolio",
    href: "/projects/allan-portfolio",
    category: "Performance & Video UX",
    techs: ["Next.js 14", "React", "Supabase Storage", "CDN Optimization"],
    description:
      "Portfolio de alta performance para editor de vídeo. Solução personalizada de delivery de vídeos pesados (>240MB) com custo zero de infraestrutura e fidelidade visual 'Pixel Perfect'.",
    stats: "100/100 Core Web Vitals",
    icon: "play_circle",
    color: "from-purple-600/20 to-pink-500/5",
    border: "group-hover:border-purple-500/50",
    iconColor: "text-purple-400",
  },
  {
    id: 7, // Ajuste o ID conforme sua sequência
    title: "Saboorbrownie",
    href: "/projects/saboor-brownie",
    category: "Micro-SaaS & Serverless",
    techs: ["Next.js", "Supabase", "Tailwind", "Recharts"],
    description:
      "Sistema de contabilidade e gestão de produção para microempreendimento. Controle de lotes (batches), cálculo automático de margem de lucro e dashboard mobile-first para operação em tempo real.",
    stats: "Profit Optimized",
    icon: "monitoring", // Ícone de gráfico/monitoramento
    color: "from-purple-600/20 to-indigo-500/5",
    border: "group-hover:border-purple-500/50",
    iconColor: "text-purple-400",
  },
];
