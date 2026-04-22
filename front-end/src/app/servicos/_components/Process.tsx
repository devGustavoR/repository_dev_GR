const STEPS = [
  {
    id: "01",
    title: "Diagnóstico",
    desc: "Auditoria técnica detalhada para mapear requisitos, arquitetura e gargalos operacionais.",
    time: "30 min",
  },
  {
    id: "02",
    title: "Roadmap",
    desc: "Planejamento estrutural e envio de proposta formal com cronograma blindado por marcos (milestones).",
    time: "24-48h",
  },
  {
    id: "03",
    title: "Execução",
    desc: "Desenvolvimento de alta performance com entregas incrementais e transparência total via Dashboard.",
    time: "1-4 sem",
  },
  {
    id: "04",
    title: "Handoff",
    desc: "Deploy em infraestrutura de alta disponibilidade, documentação técnica e transferência de autonomia.",
    time: "Suporte",
  },
];

export const Process = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Como Funciona
        </h2>
        <h3 className="text-4xl font-black text-white tracking-tighter leading-none">
          Fluxo Simples e{" "}
          <span className="text-primary italic">Transparente</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {STEPS.map((step) => (
          <div key={step.id} className="relative">
            <span className="text-6xl font-black text-white/5 absolute -top-8 left-0">
              {step.id}
            </span>
            <div className="relative z-10">
              <h4 className="text-white font-bold text-lg mb-2">
                {step.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {step.desc}
              </p>
              <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded-sm uppercase tracking-widest">
                {step.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
