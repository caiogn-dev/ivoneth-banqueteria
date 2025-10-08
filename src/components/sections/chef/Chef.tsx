import Image from "next/image";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/core/Reveal";

export default function Chef() {
  return (
    <section id="chef" className="section-anchor section bg-rose-50/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-10 md:gap-x-16">

          {/* BLOCO 1: Título + Subtítulo */}
          <Reveal delay={0.1}>
            <div className="text-center md:text-left order-1 md:order-2">
              <p className="font-semibold uppercase tracking-wider text-brand-from select-none">
                Nossa Chef
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 select-none">
                Ivoneth, a Alma da Cozinha
              </h2>
            </div>
          </Reveal>

          {/* BLOCO 2: Imagem */}
          <Reveal>
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 order-2 md:order-1">
              <Image
                src="/chef.png"
                alt="Retrato da Chef Ivoneth"
                fill
                className="rounded-full object-cover object-top shadow-xl"
                sizes="(max-width: 768px) 60vw, 33vw"
              />
            </div>
          </Reveal>

          {/* BLOCO 3: Descrição + Frase + Botões */}
          <Reveal delay={0.2}>
            <div className="space-y-6 text-center md:text-left order-3 md:order-2 md:col-span-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                Com mais de 15 anos de experiência, nossa chef lidera a cozinha com técnica e sensibilidade, equilibrando sabores regionais e apresentação impecável.
              </p>
              <p className="text-lg text-gray-600 italic">
                &ldquo;Cozinhar para eventos é sobre criar a atmosfera perfeita. Cada prato é uma parte da celebração.&rdquo;
              </p>
              <div className="flex justify-center md:justify-start gap-4 pt-2">
                <Button variant="brand" size="lg" asChild>
                  <a href="#form">Solicitar um orçamento</a>
                </Button>
                <a
                  href="https://wa.me/5563984251719"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white w-12 h-12 transition-all"
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0a11.94 11.94 0 0 0-10.44 17.39L0 24l6.83-1.8A11.94 11.94 0 0 0 12 24a11.94 11.94 0 0 0 8.52-20.52zM12 22a9.93 9.93 0 0 1-5.09-1.38l-.36-.21-4.05 1.07 1.08-3.94-.24-.4A9.93 9.93 0 1 1 12 22zm5.47-7.72c-.3-.15-1.78-.88-2.06-.98s-.48-.15-.68.15-.78.98-.96 1.18-.36.23-.66.08a8.1 8.1 0 0 1-2.4-1.48 8.9 8.9 0 0 1-1.65-2.06c-.17-.3 0-.46.13-.61s.3-.36.45-.53a2.07 2.07 0 0 0 .3-.5.55.55 0 0 0 0-.53c-.08-.15-.68-1.63-.93-2.23s-.49-.51-.68-.52H7a1.3 1.3 0 0 0-.93.44 3.92 3.92 0 0 0-1.2 2.89 6.83 6.83 0 0 0 1.44 3.36 15.57 15.57 0 0 0 5.61 5.1c.78.34 1.38.55 1.85.7a4.45 4.45 0 0 0 2.03.13 3.29 3.29 0 0 0 2.15-1.51 2.66 2.66 0 0 0 .18-1.51c-.08-.13-.27-.2-.56-.36z" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
