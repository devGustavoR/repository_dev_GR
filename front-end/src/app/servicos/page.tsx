"use client";

import { AmbientGlow } from "@/components/common/AmbientGlow";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ContactCTA } from "./_components/ContactCTA";
import { FAQ } from "./_components/FAQ";
import { Hero } from "./_components/Hero";
import { Process } from "./_components/Process";
import { ServiceGrid } from "./_components/ServiceGrid";
import { Testimonials } from "./_components/Testimonials";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen pb-20 pt-10 overflow-hidden">
      {/* Background Decorativo Global */}
      <div className="absolute inset-x-0 top-0 -z-10 flex justify-center pointer-events-none">
        <AmbientGlow>
          <div className="h-125 w-full max-w-7xl rounded-full bg-primary/5 blur-[120px]"></div>
        </AmbientGlow>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Hero />
        <ScrollReveal>
          <ServiceGrid />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <Process />
        </ScrollReveal>
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
        <ScrollReveal>
          <ContactCTA />
        </ScrollReveal>
      </div>
    </main>
  );
}
