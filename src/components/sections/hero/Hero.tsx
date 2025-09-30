// src/components/sections/hero/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/core/Reveal";
import { Star, Users } from "lucide-react"; // Importe os ícones

const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full"
      style={{ paddingTop: "calc(var(--header-h) + env(safe-area-inset-top, 0px))" }}
      aria-label="Seção inicial"
    >
      <div className="absolute inset-0">
        <Image src="/hero.jpg" alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40" aria-hidden />
      </div>

      <div
        className="relative z-10 flex items-center justify-center px-4 sm:px-6"
        style={{ minHeight: "calc(100svh - var(--header-h) - env(safe-area-inset-top, 0px))" }}
      >
        <div className="w-full max-w-3xl text-center">
          <Reveal>
            <h1 className="text-white leading-tight tracking-tight select-none">
              <span
                className={`${script.className} block font-bold`}
                style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
              >
                Buffet Premium
              </span>
              <span
                className="block font-extrabold mt-2"
                style={{ fontSize: "clamp(1.4rem, 4.5vw, 2.5rem)" }}
              >
                para eventos corporativos e sociais
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="mt-5 text-white/85"
              style={{ fontSize: "clamp(0.95rem, 2.4vw, 1.125rem)" }}
            >
              Equipe completa, montagem no local e cardápio sob medida — com pontualidade garantida.
            </p>
          </Reveal>
          
          {/* ✅ NOVO BADGE DE PROVA SOCIAL ADICIONADO AQUI */}
          <Reveal delay={0.2}>
            <div className="mt-8 inline-flex items-center justify-center gap-6 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                    <span className="font-medium text-sm">4.9 de 5 estrelas</span>
                </div>
                <div className="h-6 w-px bg-white/20"></div>
                <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-rose-300" />
                    <span className="font-medium text-sm">+1000 eventos realizados</span>
                </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
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