import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const script = Dancing_Script({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-screen"
      // dá espaço exato do header + área segura (iPhone notch)
      style={{ paddingTop: "calc(var(--header-h) + env(safe-area-inset-top, 0px))" }}
      aria-label="Seção inicial"
    >
      {/* Imagem full-bleed */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"  // /public/hero.jpg
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={70}
        />
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40" aria-hidden="true" />
      </div>

      {/* Wrapper com altura = (tela - header) para centralizar de verdade */}
      <div
        className="relative z-10 flex items-center justify-center px-4 sm:px-6"
        style={{
          minHeight:
            "calc(100svh - var(--header-h) - env(safe-area-inset-top, 0px))",
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

          <p className="mt-5 text-white/85"
             style={{ fontSize: "clamp(0.95rem, 2.4vw, 1.125rem)" }}>
            Equipe completa, montagem no local e cardápio sob medida — com pontualidade garantida.
          </p>

          {/* CTAs empilhados e centrados */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link href="#form" className="btn btn-primary">
              Solicitar orçamento
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold
                         bg-white text-[color:var(--brand-ink)] border border-white/0 hover:bg-white/90
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ boxShadow: "0 0 0 0 var(--ring)" }}
            >
              Ver opções de cardápio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
