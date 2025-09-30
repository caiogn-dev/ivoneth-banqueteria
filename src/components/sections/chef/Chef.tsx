// src/components/sections/chef/Chef.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/core/Reveal";

export default function Chef() {
  return (
    <section id="chef" className="section-anchor section bg-rose-50/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Layout principal de 2 colunas, alinhado ao centro */}
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-16">
          
          {/* Coluna da Imagem */}
          <Reveal>
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <Image
                src="/chef.png"
                alt="Retrato da Chef Ivoneth"
                fill
                className="rounded-full object-cover object-top shadow-xl"
                sizes="(max-width: 768px) 60vw, 33vw"
              />
            </div>
          </Reveal>

          {/* Coluna do Texto */}
          <Reveal delay={0.1}>
            <div className="space-y-6 text-center md:text-left">
              <p className="font-semibold uppercase tracking-wider text-brand-from select-none">
                Nossa Chef
              </p>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 select-none">
                Ivoneth, a Alma da Cozinha
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Com mais de 15 anos de experiência, nossa chef lidera a cozinha com técnica e sensibilidade, equilibrando sabores regionais e apresentação impecável.
              </p>

              <p className="text-lg text-gray-600 italic">
                "Cozinhar para eventos é sobre criar a atmosfera perfeita. Cada prato é uma parte da celebração."
              </p>
              
              <div className="pt-2">
                <Button variant="brand" size="lg" asChild>
                  <a href="#form">Solicitar um orçamento</a>
                </Button>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}