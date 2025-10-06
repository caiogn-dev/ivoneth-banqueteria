// src/components/sections/hero/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/core/Reveal";
import { Star, Users } from "lucide-react";

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Seção inicial"
      className="relative w-full min-h-[100svh] overflow-clip"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/hero.avif"
          alt="Ivoneth Banqueteria — luxo como experiência"
          fill
          priority
          fetchPriority="high"
          placeholder="empty"
          // ⬇️ capamos a largura efetiva fora do mobile para 1280px
          sizes="(max-width: 640px) 100vw,
                (max-width: 768px) 100vw,
                (max-width: 1024px) 100vw,
                (max-width: 1280px) 100vw,
                1280px"
          className="object-cover"
        />
        {/* Gradiente principal barato */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        {/* Radial suave (menos pesado) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(115% 62% at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,.44) 68%, rgba(0,0,0,.64) 100%)",
          }}
        />
        {/* Backdrop-blur só ≥ sm (mobile não paga esse custo) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-transparent sm:supports-[backdrop-filter]:backdrop-blur-[1.5px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 grid min-h-[100svh] place-content-center px-4 sm:px-6 pt-[calc(var(--header-h)+env(safe-area-inset-top,0px))] pb-16 text-center">
        <div className="w-full max-w-[72ch] mx-auto">
          {/* H1 */}
          <Reveal>
            <h1
              className="text-white select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]"
              style={{ fontSize: "clamp(2rem,5vw,3.3rem)", lineHeight: 1.12, letterSpacing: "-0.015em" }}
            >
              <span className="font-extrabold">
                <span className="inline-block align-baseline" style={{ fontSize: "0.92em" }}>
                  Buffet e Coffee Break para eventos corporativos com{" "}
                </span>
                <span
                  className={`${vibes.className} inline-block align-baseline whitespace-nowrap text-rose-200 sm:[text-shadow:0_2px_12px_rgba(0,0,0,0.45)]`}
                  style={{ fontSize: "1.86em" }}
                >
                  sofisticação artesanal
                </span>
              </span>
            </h1>
          </Reveal>

          {/* H2 */}
          <Reveal delay={0.08}>
            <p
              className="mt-6 text-white/95 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)]"
              style={{ fontSize: "clamp(1rem,2.2vw,1.18rem)", lineHeight: 1.55 }}
            >
              Atendemos demandas específicas com equipe completa, pontualidade e cardápio sob medida no seu endereço.
            </p>
          </Reveal>

          {/* Prova social */}
          <Reveal delay={0.16}>
            <div className="mt-7 inline-flex items-center justify-center gap-6 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-sm ring-1 ring-white/15">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <span className="font-medium text-sm">4,9 de 5 estrelas</span>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-rose-300" />
                <span className="font-medium text-sm">+1000 eventos realizados</span>
              </div>
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" variant="brand" className="w-full sm:w-auto">
                <Link href="#form" aria-label="Solicitar orçamento">
                  Solicitar orçamento
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white text-[color:var(--brand-ink)] border-white hover:bg-white/90"
              >
                <Link href="#menu" aria-label="Ver opções de cardápio">
                  Ver opções de cardápio
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
