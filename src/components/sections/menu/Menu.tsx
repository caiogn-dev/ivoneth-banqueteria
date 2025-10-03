// src/components/sections/menu/Menu.tsx
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
    {
      id: "coqueteis",
      title: "Coquetéis",
      desc: "Canapés finos, finger foods e mini porções que encantam pela apresentação e sabor, perfeitos para eventos dinâmicos.",
      images: Array(6).fill({ base: "/menu/coqueteis-1" }),
    },
    {
      id: "almoco-jantar",
      title: "Almoço e Jantar",
      desc: "Pratos principais e acompanhamentos que formam um banquete completo, com opções que vão do clássico ao contemporâneo.",
      images: Array(6).fill({ base: "/menu/almoco-1" }),
    },
    {
      id: "coffee",
      title: "Coffee Break",
      desc: "Uma seleção equilibrada de assados, frutas frescas e doces artesanais para energizar pausas em eventos corporativos.",
      images: Array(6).fill({ base: "/menu/coffee-1" }),
    },
];

const resolve = (base: string) => {
  return base.endsWith(".avif") || base.endsWith(".webp") || base.endsWith(".jpg") || base.endsWith(".png")
    ? base
    : `${base}.avif`;
};

function CategoryGallery({ images, title, onOpenAt }: { images: MenuImage[]; title: string; onOpenAt: (i: number) => void; }) {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
      {images.slice(0, 6).map((img, i) => (
        <button
          key={`${title}-${i}`}
          type="button"
          onClick={() => onOpenAt(i)}
          className="group relative aspect-square w-full overflow-hidden rounded-lg sm:rounded-xl ring-1 ring-black/5 transition-all duration-300 hover:ring-brand-from hover:ring-2 hover:shadow-lg"
          aria-label={`Abrir ${title} imagem ${i + 1}`}
        >
          <Image
            src={resolve(img.base)}
            alt={img.alt ?? `${title} imagem ${i + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
            priority={i < 3}
            unoptimized={process.env.NODE_ENV !== "production"}
          />
        </button>
      ))}
    </div>
  );
}

function Category({ id, title, desc, images }: MenuCategory) {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(0);

  const lbImages: LightboxImage[] = images.slice(0, 6).map((img, i) => ({
    src: resolve(img.base),
    alt: img.alt ?? `${title} imagem ${i + 1}`,
  }));

  return (
    // ✅ AJUSTE 1: Card se torna um container flexível em coluna
    <div id={id} className="flex h-full w-full flex-col rounded-2xl border bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-xl scroll-mt-20">
      
      {/* Bloco de texto que pode crescer */}
      <div className="flex-grow">
        <Reveal>
          <h3 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 select-none">{title}</h3>
        </Reveal>
        <Reveal delay={0.05}>
          {/* ✅ AJUSTE 2: Altura mínima para o parágrafo para estabilizar o layout */}
          <p className="mt-2 text-center text-gray-600 max-w-md mx-auto min-h-[4.5rem]">
            {desc}
          </p>
        </Reveal>
      </div>

      {/* Galeria empurrada para o final */}
      <Reveal delay={0.1}>
        <CategoryGallery
          title={title}
          images={images}
          onOpenAt={(i) => {
            setStart(i);
            setOpen(true);
          }}
        />
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
    <section id="menu" className="section section-anchor bg-rose-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
            <Reveal>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 select-none">
                Conheça nosso <span className="text-[color:var(--brand-from)]">menu</span>
            </h2>
            </Reveal>
            <Reveal delay={0.06}>
            <p className="mt-4 text-lg text-gray-600">
                Selecione o formato ideal para o seu evento. Personalizamos combinações e porções conforme o número de convidados.
            </p>
            </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={0.15 + i * 0.1}>
                <Category {...c} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 grid place-items-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#form">Solicitar orçamento</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}