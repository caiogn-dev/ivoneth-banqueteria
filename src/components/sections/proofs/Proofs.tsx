
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/core/Reveal";

const logos = [
  { src: "/logos/logo1.svg", alt: "Logo 1" },
  { src: "/logos/logo2.svg", alt: "Logo 2" },
  { src: "/logos/logo3.svg", alt: "Logo 3" },
  { src: "/logos/logo4.svg", alt: "Logo 4" },
  { src: "/logos/logo5.svg", alt: "Logo 5" },
  { src: "/logos/logo6.svg", alt: "Logo 6" },
];

export default function Proofs() {
  return (
    <section
      id="provas"
      aria-labelledby="provas-heading"
      className="section bg-rose-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Título centralizado + subtítulo opcional */}
        <Reveal delay={0.05}>
          <header className="text-center">
            <h2
              id="provas-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Marcas que já saborearam nossos serviços
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Excelência comprovada em eventos corporativos e sociais.
            </p>
          </header>
        </Reveal>

        {/* Logos */}
        <Reveal delay={0.12}>
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 items-stretch">
            {logos.map(({ src, alt }) => (
              <Card
                key={src}
                className="group aspect-[3/2] md:aspect-[5/3] grid place-items-center rounded-2xl border border-gray-200/70 shadow-sm hover:shadow-md bg-white/60 backdrop-blur-[2px] transition"
                aria-label={alt}
              >
                <CardContent className="p-0 grid place-items-center w-full h-full">
                  <Image
                    src={src}
                    alt={alt}
                    width={360}
                    height={160}
                    // tamanhos responsivos para nitidez sem estourar CLS
                    sizes="(min-width: 1024px) 180px, (min-width: 640px) 160px, 140px"
                    className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain opacity-95 grayscale-[18%] contrast-125 group-hover:grayscale-0 group-hover:opacity-100 transition will-change-transform"
                    loading="lazy"
                    draggable={false}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-10 sm:mt-12 flex justify-center">
            <Button
              asChild
              size="lg"
              variant="brand"
              className="w-50 sm:w-auto px-8 rounded-full shadow-md hover:shadow-lg"
            >
              <Link href="#form" aria-label="Solicitar orçamento" prefetch={false}>
                Solicitar orçamento
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
