import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="space-y-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          Erro 404
        </p>
        <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl">
          Página não<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
            encontrada
          </span>
        </h1>
        <p className="mx-auto max-w-md text-slate-400">
          A rota que você tentou acessar não existe ou foi removida.
        </p>
      </div>

      <Link
        href="/"
        className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/80 hover:scale-105 active:scale-95"
      >
        <span className="material-symbols-outlined text-base">arrow_back</span>
        Voltar para o início
      </Link>
    </main>
  );
}
