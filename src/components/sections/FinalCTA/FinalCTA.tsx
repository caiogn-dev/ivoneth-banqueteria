// src/components/sections/FinalCTA/FinalCTA.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-clip"
      aria-label="Chamada final para orçamento"
    >
      {/* BACKGROUND estático e leve */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/hero.avif"
          alt=""
          fill
          // evita baixar 1920px à toa; ajusta ao seu container real
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
          loading="lazy"
          placeholder="empty"
          priority={false}
        />
        {/* Overlays para contraste/legibilidade (baratos) */}
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,.35), transparent 40%, rgba(0,0,0,.4))",
          }}
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 grid min-h-[60svh] place-items-center">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
            Leve uma experiência gastronômica impecável ao seu evento
          </h2>
          <p className="mt-3 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
            Equipe completa, montagem no local, apresentação caprichada e cardápio sob medida.
          </p>
          <div className="mt-6">
            <Button variant="brand" size="lg" asChild className="rounded-full shadow-md hover:shadow-lg">
              <a href="#form" aria-label="Solicitar orçamento">Solicitar orçamento</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
