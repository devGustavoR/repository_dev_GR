"use client";

export const Hero = () => {
  return (
    <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Badge Superior */}
      <div className="flex justify-center mb-6">
        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.4em] text-primary">
          <span className="h-1 w-1 rounded-full bg-primary animate-pulse"></span>
          Soluções de Engenharia
        </span>
      </div>

      {/* Título Principal */}
      <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
        Transformando Código em <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-400 italic">
          Vantagem Competitiva
        </span>
      </h1>

      {/* Descrição */}
      <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
        Desenvolvimento de software de{" "}
        <span className="text-white font-medium">alta performance</span> para
        quem não aceita menos que o excepcional. Foco em sistemas resilientes,
        seguros e escaláveis.
      </p>

      {/* Indicador de Rolagem Sutil */}
      <div className="mt-12 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          Explore os serviços
        </span>
        <span className="material-symbols-outlined animate-bounce">
          expand_more
        </span>
      </div>
    </div>
  );
};
