"use client";

import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="section-lg bg-rose-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Leve uma experiência gastronômica impecável ao seu evento
        </h2>
        <p className="mt-3 text-gray-600">
          Equipe completa, montagem no local, apresentação caprichada e cardápio sob medida.
        </p>
        <div className="mt-6">
          <Button variant="brand" size="lg" asChild>
            <a href="#form">Solicitar orçamento</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
