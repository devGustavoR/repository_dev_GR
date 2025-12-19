import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/40 py-8">
      <div className="px-6 md:px-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-600 text-sm">
          © {currentYear} {PORTFOLIO_DATA.personal.name}. Todos os direitos
          reservados.
        </p>
        <div className="flex items-center gap-6">
          <a
            className="text-slate-600 hover:text-[#0077b5] transition-colors duration-300"
            href={PORTFOLIO_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil LinkedIn"
          >
            <span className="material-symbols-outlined">work</span>
          </a>
          <a
            className="text-slate-600 hover:text-emerald-500 transition-colors duration-300"
            href={PORTFOLIO_DATA.links.email}
            aria-label="Enviar Email"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
