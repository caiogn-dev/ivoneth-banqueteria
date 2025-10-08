import Image from "next/image";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/core/Reveal";

export default function Chef() {
  return (
    <section id="chef" aria-labelledby="chef-title" className="section-anchor bg-rose-50/40">
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* TÍTULO (ACIMA DA IMAGEM) */}
        <Reveal>
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wide text-brand-from">Nossa Chef</p>
            <h2 id="chef-title" className="mt-1 text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              Ivoneth, a Alma da Cozinha
            </h2>
          </div>
        </Reveal>

        {/* IMAGEM EM BOLA (CIRCULAR) */}
        <Reveal delay={0.05}>
          <div className="mt-6 flex justify-center">
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full overflow-hidden ring-1 ring-black/5 shadow-xl">
              <Image
                src="/chef.png"
                alt="Retrato da Chef Ivoneth"
                fill
                sizes="(max-width: 768px) 70vw, 320px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </Reveal>

        {/* DESCRIÇÃO + FRASE */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-6 max-w-prose text-center text-gray-700">
            <p className="text-base leading-relaxed">
              Com mais de 15 anos de experiência, nossa chef lidera a cozinha com técnica e sensibilidade,
              equilibrando sabores regionais e apresentação impecável.
            </p>
            <p className="mt-3 text-base italic text-gray-600">
              “Cozinhar para eventos é criar a atmosfera perfeita. Cada prato é parte da celebração.”
            </p>
          </div>
        </Reveal>

        {/* AÇÕES */}
        <Reveal delay={0.15}>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button variant="brand" size="lg" asChild>
              <a href="#form">Solicitar um orçamento</a>
            </Button>
            <a
              href="https://wa.me/5563984251719"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:ring-offset-2"
              aria-label="Fale no WhatsApp"
              title="Fale no WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0 11.94 11.94 0 0 0 1.56 17.39L0 24l6.83-1.8A11.94 11.94 0 0 0 12 24a11.94 11.94 0 0 0 8.52-20.52zM12 22a9.93 9.93 0 0 1-5.09-1.38l-.36-.21-4.05 1.07 1.08-3.94-.24-.4A9.93 9.93 0 1 1 12 22zm5.47-7.72c-.3-.15-1.78-.88-2.06-.98s-.48-.15-.68.15-.78.98-.96 1.18-.36.23-.66.08a8.1 8.1 0 0 1-2.4-1.48 8.9 8.9 0 0 1-1.65-2.06c-.17-.3 0-.46.13-.61s.3-.36.45-.53a2.07 2.07 0 0 0 .3-.5.55.55 0 0 0 0-.53c-.08-.15-.68-1.63-.93-2.23s-.49-.51-.68-.52H7a1.3 1.3 0 0 0-.93.44 3.92 3.92 0 0 0-1.2 2.89 6.83 6.83 0 0 0 1.44 3.36 15.57 15.57 0 0 0 5.61 5.1c.78.34 1.38.55 1.85.7a4.45 4.45 0 0 0 2.03.13 3.29 3.29 0 0 0 2.15-1.51 2.66 2.66 0 0 0 .18-1.51c-.08-.13-.27-.2-.56-.36z" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
