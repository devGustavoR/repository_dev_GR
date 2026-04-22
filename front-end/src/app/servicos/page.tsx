"use client";

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-125 w-full max-w-7xl rounded-full bg-primary/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-6">
        <Hero />
        <ServiceGrid />
        <Testimonials />
        <Process />
        <FAQ />
        <ContactCTA />
      </div>
    </main>
  );
}
