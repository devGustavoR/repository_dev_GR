import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MATERIAL_SYMBOLS_URL } from "@/lib/icons";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

// 1. Configuração da Fonte de UI (Plus Jakarta Sans)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// 2. Configuração da Fonte de Código (JetBrains Mono)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Gustavo Ribeiro",
    default: "Gustavo Ribeiro | Backend Developer Senior",
  },
  description:
    "Portfólio de Desenvolvedor Backend especializado em NestJS, Docker e Arquitetura de Microsserviços.",
  keywords: [
    "Backend",
    "NestJS",
    "Docker",
    "Java",
    "DevOps",
    "Gustavo Ribeiro",
  ],
  authors: [{ name: "Gustavo Ribeiro" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.devgustavor.com.br",
    siteName: "Gustavo Ribeiro",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Material Symbols - subset com apenas os ícones usados no site,
            evitando baixar a fonte inteira (~7MB -> ~80KB). Ver src/lib/icons.ts */}
        <link
          rel="preload"
          href={MATERIAL_SYMBOLS_URL}
          as="style"
        />
        <link rel="stylesheet" href={MATERIAL_SYMBOLS_URL} />
      </head>

      <body
        className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans bg-obsidian text-slate-300 antialiased selection:bg-primary/30 selection:text-white`}
      >
        <SmoothScroll>
          <Header />

          {children}

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
