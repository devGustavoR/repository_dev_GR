import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços de engenharia de software: desenvolvimento de SaaS, automações com IA, bots e otimização de performance. Atendimento direto com o engenheiro responsável.",
};

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
