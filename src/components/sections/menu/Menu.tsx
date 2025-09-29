"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/core/Reveal";
import { Button } from "@/components/ui/button";
import Lightbox, { type LightboxImage } from "@/components/core/LightBox";

type MenuImage = { base: string; alt?: string };
type MenuCategory = {
  id: string;
  title: string;
  desc: string;
  images: MenuImage[];
};

const CATEGORIES: MenuCategory[] = [
  { id: "coqueteis", title: "Coquetéis", desc: "…", images: Array(6).fill({ base: "/menu/coqueteis-1" }) },
  { id: "almoco-jantar", title: "Almoço e Jantar", desc: "…", images: Array(6).fill({ base: "/menu/almoco-1" }) },
  { id: "coffee", title: "Coffee break", desc: "…", images: Array(6).fill({ base: "/menu/coffee-1" }) },
  { id: "buffet", title: "Buffet", desc: "…", images: Array(6).fill({ base: "/menu/buffet-1" }) },
];

const resolve = (base: string) => {
  const resolved = base.endsWith(".avif") || base.endsWith(".webp") || base.endsWith(".jpg") || base.endsWith(".png")
    ? base
    : `${base}.avif`;
  console.log("Resolved image path:", resolved); // Depuração
  return resolved;
};

/* Grade 3×2 fixa */
function CategoryGallery({
  images,
  title,
  onOpenAt,
}: {
  images: MenuImage[];
  title: string;
  onOpenAt: (i: number) => void;
}) {
  return (
    <div className="mt-7 grid grid-cols-3 gap-4 sm:gap-6 justify-items-center">
      {images.slice(0, 6).map((img, i) => (
        <button
          key={`${title}-${i}`}
          type="button"
          onClick={() => onOpenAt(i)}
          className="relative aspect-square w-28 sm:w-36 lg:w-40 overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm transition-transform duration-300 hover:scale-[1.03]"
          aria-label={`Abrir ${title} imagem ${i + 1}`}
        >
          <Image
            src={resolve(img.base)}
            alt={img.alt ?? `${title} imagem ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width:640px) 33vw, (max-width:1024px) 18vw, 12vw"
            priority={i < 2}
            unoptimized={process.env.NODE_ENV !== "production"}
            onError={() => console.error(`Erro ao carregar imagem de galeria: ${resolve(img.base)}`)} // Depuração
          />
        </button>
      ))}
    </div>
  );
}

function Category({ title, desc, images }: MenuCategory) {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(0);

  const lbImages: LightboxImage[] = images.slice(0, 6).map((img, i) => ({
    src: resolve(img.base),
    alt: img.alt ?? `${title} imagem ${i + 1}`,
  }));

  return (
    <div className="py-10">
      <Reveal>
        <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">{title}</h3>
      </Reveal>
      <Reveal delay={0.06}>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">{desc}</p>
      </Reveal>

      <Reveal delay={0.08}>
        <CategoryGallery
          title={title}
          images={images}
          onOpenAt={(i) => {
            console.log("Abrindo Lightbox na imagem:", i); // Depuração
            setStart(i);
            setOpen(true);
          }}
        />
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-10 flex justify-center">
          <div className="section-divider w-[76%] sm:w-[58%]" />
        </div>
      </Reveal>

      <Lightbox
        open={open}
        onOpenChange={setOpen}
        images={lbImages}
        startIndex={start}
        title={title}
        maxW={{ sm: 700, md: 820 }}
        maxHsvh={78}
      />
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="section section-anchor bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900">
            Conheça nosso <span className="text-[color:var(--brand-from)]">menu</span>
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-3 text-center text-gray-600 max-w-3xl mx-auto">
            Selecione o formato ideal para o seu evento. Personalizamos combinações e porções conforme o número de convidados.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {CATEGORIES.map((c) => (
            <div key={c.id} style={{ scrollMarginTop: "calc(var(--header-h) + 12px)" }}>
              <Category {...c} />
            </div>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 grid place-items-center">
            <Button asChild size="lg" className="rounded-full px-8 py-3">
              <a href="#form">Solicitar orçamento</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}