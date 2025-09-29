// src/components/sections/hero/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { Button } from "@/components/ui/button";

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
      // respiro exato do header + área segura (iOS notch)
      style={{ paddingTop: "calc(var(--header-h) + env(safe-area-inset-top, 0px))" }}
      aria-label="Seção inicial"
    >
      {/* BG full-bleed com overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"              // coloque em /public/hero.jpg
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          // Removi `quality` p/ evitar warning do Next 16 sobre images.qualities
        />
        {/* overlay levemente mais forte no mobile */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40" aria-hidden />
      </div>

      {/* Wrapper com altura = (tela - header) para centralizar de verdade */}
      <div
        className="relative z-10 flex items-center justify-center px-4 sm:px-6"
        style={{
          minHeight: "calc(100svh - var(--header-h) - env(safe-area-inset-top, 0px))",
        }}
      >
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-white leading-tight tracking-tight">
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

          <p
            className="mt-5 text-white/85"
            style={{ fontSize: "clamp(0.95rem, 2.4vw, 1.125rem)" }}
          >
            Equipe completa, montagem no local e cardápio sob medida — com pontualidade garantida.
          </p>

          {/* CTAs empilhados e centrados (mobile), lado a lado no sm+ */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" variant="brand" className="w-full sm:w-auto">
              <Link href="#form" aria-label="Solicitar orçamento">
                Solicitar orçamento
              </Link>
            </Button>

            {/* Secundário claro, mantendo contraste sobre o overlay */}
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
        </div>
      </div>
    </section>
  );
}
