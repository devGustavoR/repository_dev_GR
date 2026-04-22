"use client";

const FAQS = [
  {
    q: "Como é precificado um projeto técnico na GUSTAVO.DEV?",
    a: "Minha precificação é baseada no valor gerado e na robustez da arquitetura proposta. Não entrego apenas linhas de código; entrego ativos tecnológicos que resolvem gargalos de negócio. Trabalho com orçamentos fechados por etapas (milestones), garantindo transparência total sobre custos de infraestrutura e APIs.",
  },
  {
    q: "Como você garante prazos de entrega tão ágeis?",
    a: "Minha agilidade é fruto de senioridade e de uma stack tecnológica ultra-moderna (Next.js, Bun, Vercel). Ao utilizar arquiteturas de alta performance e fluxos de trabalho otimizados, elimino burocracias técnicas desnecessárias e foco 100% na entrega de valor e na lógica de negócio do seu sistema.",
  },
  {
    q: "Quem detém a propriedade do código e dos dados?",
    a: "A propriedade intelectual é 100% do cliente. Ao contrário de agências que criam dependência técnica, eu entrego a solução documentada e configurada nas suas próprias contas (Vercel/Supabase). Formalizo essa transferência em contrato, garantindo sua total autonomia e posse sobre o software.",
  },
  {
    q: "Qual o seu protocolo para segurança e sigilo de dados?",
    a: "Minha base técnica foi moldada no setor de saúde (Fundação José Silveira), onde o rigor com dados sensíveis é extremo. Implemento padrões corporativos de segurança, como Row Level Security (RLS) e criptografia em repouso, garantindo conformidade total com a LGPD e blindagem contra acessos indevidos.",
  },
  {
    q: "Você realiza manutenção de sistemas já existentes ou iniciados por IA?",
    a: "Sim. Sou especialista em Resgate Técnico. Atuo saneando bases de dados mal estruturadas e otimizando códigos de protótipos (incluindo apps gerados por builders de IA), elevando-os para um padrão de infraestrutura profissional, estável e escalável para o mundo real.",
  },
  {
    q: "Como funciona o suporte após a implantação?",
    a: "Ofereço o modelo de 'CTO as a Service'. Além do suporte técnico pós-entrega, disponho de planos de manutenção contínua para monitoramento 24/7, backups automatizados e evolução constante do sistema. Meu objetivo é garantir que sua engenharia esteja sempre à frente do seu crescimento comercial.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
      {/* Cabeçalho do FAQ */}
      <div className="text-center mb-16">
        <h2 className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Dúvidas Frequentes
        </h2>
        <h3 className="text-4xl font-black text-white tracking-tighter italic">
          Engenharia & <span className="text-primary">Negócios</span>
        </h3>
      </div>

      {/* Lista de Accordions */}
      <div className="space-y-3">
        {FAQS.map((faq, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden transition-all hover:bg-white/[0.03] open:bg-white/[0.03] open:border-primary/20"
          >
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none outline-none">
              <span className="text-white font-bold text-sm md:text-base tracking-tight group-hover:text-primary transition-colors">
                {faq.q}
              </span>
              <span className="material-symbols-outlined text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:text-primary">
                expand_more
              </span>
            </summary>

            <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      {/* Rodapé do FAQ sutil */}
      <div className="mt-12 text-center">
        <p className="text-slate-600 text-xs uppercase tracking-widest font-medium">
          Ainda tem dúvidas?{" "}
          <a
            href="#orcamento"
            className="text-primary hover:underline underline-offset-4"
          >
            Fale comigo diretamente
          </a>
        </p>
      </div>
    </section>
  );
};
