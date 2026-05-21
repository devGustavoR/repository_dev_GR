const REVIEWS = [
  {
    project: "Bot de Telegram para Locadora",
    text: "Excelente profissional. Sou muito perfeccionista, mas ele atendeu tudo que foi solicitado com precisão técnica.",
    rating: 5.0,
    date: "Abril 2026",
  },
  {
    project: "App Empresarial: Ajustes e Publicação",
    text: "Atencioso e entregou exatamente o que prometeu dentro do combinado.",
    rating: 4.8,
    date: "Março 2026",
  },
  {
    project: "Robô de Automação de Apostas",
    text: "Trabalho impecável do início ao fim. O Gustavo foi extremamente profissional, cumpriu prazos, entregou com qualidade e tivemos uma ótima comunicação.",
    rating: 5.0,
    date: "Março 2026",
  },
  {
    project: "Exclusão de Token: Google Console",
    text: "Espero que no futuro possamos realizar outros projetos. Esse de agora ficou excelente.",
    rating: 5.0,
    date: "Março 2026",
  },
  {
    project: "CRM de Gestão no Lovable",
    text: "Gustavo foi super prestativo, comprometido e entregou mais do que o esperado. Nosso trabalho em conjunto com certeza será de longa data.",
    rating: 5.0,
    date: "Março 2026",
  },
  {
    project: "Portal de Empregos (Brasília)",
    text: "Muito bom e atencioso, sempre disponível e com paciência para o trabalho e entender todo o projeto.",
    rating: 4.8,
    date: "Fevereiro 2026",
  },
  {
    project: "Portfólio Profissional (Figma)",
    text: "Extremamente profissional do início ao fim. Explicou tudo de forma clara, sem deixar dúvidas, e entregou exatamente o combinado com ótima performance.",
    rating: 5.0,
    date: "Janeiro 2026",
  },
];

export const Testimonials = () => (
  <section className="py-24 border-t border-white/5">
    <div className="flex flex-col items-center text-center mb-16">
      <h2 className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">
        Feedback Real
      </h2>
      <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">
        Resultados que geram <span className="text-primary">confiança</span>
      </h3>
    </div>

    {/* Grid ajustado para suportar mais itens de forma harmônica */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {REVIEWS.map((t) => (
        <div
          key={t.project}
          className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-primary/20 transition-all hover:-translate-y-1 duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, star) => (
                  <span
                    key={star}
                    className={`material-symbols-outlined text-sm ${
                      star < Math.floor(t.rating)
                        ? "text-amber-500"
                        : "text-slate-600"
                    }`}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                {t.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-slate-400 text-xs italic leading-relaxed mb-6">
              "{t.text}"
            </p>
          </div>

          <div className="pt-4 border-t border-white/5">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-wider">
              {t.project}
            </h4>
            <div className="flex justify-between items-center mt-2">
              <span className="text-slate-600 text-[9px] uppercase font-mono">
                {t.date}
              </span>
              <span className="flex items-center gap-1 text-emerald-500 text-[9px] font-black uppercase tracking-tighter">
                <span className="material-symbols-outlined text-[10px]">
                  verified
                </span>{" "}
                Verificado
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
