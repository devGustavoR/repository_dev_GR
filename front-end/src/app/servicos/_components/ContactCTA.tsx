export const ContactCTA = () => (
  <section id="orcamento" className="py-24 scroll-mt-20">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
        Sua engenharia não pode ser o <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 italic px-2">
          gargalo do seu crescimento.
        </span>
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto uppercase text-[10px] tracking-[0.3em] font-bold">
        Atendimento direto com o Engenheiro Responsável.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {[
        {
          name: "Linha Direta",
          sub: "WhatsApp para diagnósticos rápidos",
          icon: "chat",
          color: "hover:border-emerald-500/50",
          link: "https://wa.me/557183831225?text=Oi%2CGustavo!%20Vi%20seu%20portfolio%20e%20quero%20falar%20sobre%20um%20projeto.",
        },
        {
          name: "Consultoria PJ",
          sub: "E-mail para propostas e RFPs",
          icon: "mail",
          color: "hover:border-blue-500/50",
          link: "mailto:devgustavor@gmail.com",
        },
        {
          name: "Briefing Técnico",
          sub: "30 min via Google Meet",
          icon: "videocam",
          color: "hover:border-primary/50",
          link: "mailto:devgustavor@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Briefing%20T%C3%A9cnico%20-%20GUSTAVO.DEV&body=Ol%C3%A1%20Gustavo%2C%0A%0AGostaria%20de%20agendar%20um%20briefing%20t%C3%A9cnico%20para%20discutir%20a%20viabilidade%20do%20meu%20projeto.%0A%0A-%20Nome%20da%20Empresa%2FProjeto%3A%20%0A-%20Objetivo%20Principal%3A%20%0A-%20Sugest%C3%A3o%20de%20Hor%C3%A1rio%20para%20Call%3A%20%0A%0AAtenciosamente%2C", // Link do seu Calendly ou similar
        },
      ].map((c) => (
        <a
          key={c.name}
          href={c.link}
          className={`group p-8 rounded-3xl bg-white/[0.02] border border-white/5 transition-all text-center flex flex-col items-center ${c.color}`}
        >
          <div className="size-16 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">
              {c.icon}
            </span>
          </div>
          <h4 className="text-white font-bold text-xl mb-1">{c.name}</h4>
          <p className="text-slate-500 text-xs mb-6 uppercase tracking-widest leading-relaxed px-4">
            {c.sub}
          </p>
          <span className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 border-b border-primary/0 group-hover:border-primary/100 transition-all">
            Falar com Gustavo{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </span>
        </a>
      ))}
    </div>

    <button className="w-full p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 flex flex-col md:flex-row items-center justify-between group hover:from-primary/20 transition-all gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-white font-bold text-2xl tracking-tight mb-1">
          Solicite um diagnóstico de viabilidade técnica
        </h3>
        <p className="text-slate-400 text-sm italic">
          Análise de arquitetura e orçamento detalhado em até 48 horas.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:block text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
          Iniciar Roadmap
        </span>
        <span className="size-14 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
          <span className="material-symbols-outlined text-3xl">analytics</span>
        </span>
      </div>
    </button>
  </section>
);
