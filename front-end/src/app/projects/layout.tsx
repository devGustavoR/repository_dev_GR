import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Cases de engenharia real: SaaS, automação, IA, e-commerce e plataformas full-stack construídas com NestJS, Next.js, Docker e PostgreSQL.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
