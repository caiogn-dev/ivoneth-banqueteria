// src/components/Menu.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
    desc:
      "Um buffet de coquetel inclui opções como: finger food, canapés, salgadinhos, mini-sanduíches e docinhos, ilha de queijos e frios.",
    images: Array(6).fill({ base: "/menu/coqueteis-1" }),
  },
  {
    id: "almoco-jantar",
    title: "Almoço e Jantar",
    desc:
      "Um buffet de almoço inclui opções como: Saladas e pratos frios, aperitivos, pratos quentes, sobremesas e bebidas.",
    images: Array(6).fill({ base: "/menu/almoco-1" }),
  },
  {
    id: "coffee",
    title: "Coffee break",
    desc:
      "Bebidas quentes e frias, itens doces e salgados, frutas e estações de apoio. Reposição contínua durante o evento.",
    images: Array(6).fill({ base: "/menu/coffee-1" }),
  },
  {
    id: "buffet",
    title: "Buffet",
    desc:
      "Um buffet inclui opções como: carnes, acompanhamentos como arroz, saladas frescas, sobremesas, Ilhas personalizadas, Mesa de frios e quentes.",
    images: Array(6).fill({ base: "/menu/buffet-1" }),
  },
];

/* ===== Lightbox compacto ===== */
function Lightbox({
  open,
  onClose,
  images,
  index,
  setIndex,
  maxWidthPx = 900,
  maxHeightVh = 80,
}: {
  open: boolean;
  onClose: () => void;
  images: MenuImage[];
  index: number;
  setIndex: (i: number) => void;
  maxWidthPx?: number;
  maxHeightVh?: number;
}) {
  if (!open) return null;

  const goPrev = () => setIndex((index + images.length - 1) % images.length);
  const goNext = () => setIndex((index + 1) % images.length);
  const src = `${images[index].base}.avif`;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/75" onClick={onClose} />
      <div
        className="relative bg-black/70 rounded-2xl shadow-2xl overflow-hidden w-[92vw] sm:w-[88vw]"
        style={{
          maxWidth: `${maxWidthPx}px`,
          maxHeight: `min(${maxHeightVh}vh, 100svh - 3rem)`,
        }}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/80"
        >
          <X className="h-5 w-5" />
        </button>

        <button
          onClick={goPrev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goNext}
          aria-label="Próxima"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/70"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div
          className="relative"
          style={{
            aspectRatio: "4/3",
            maxHeight: `min(${maxHeightVh}vh, 100svh - 3rem)`,
          }}
        >
          <Image
            src={src}
            alt={images[index].alt ?? ""}
            fill
            className="object-contain"
            unoptimized={process.env.NODE_ENV !== "production"}
            priority
          />
        </div>
      </div>
    </div>
  );
}

/* ===== Grade SEMPRE 3×2 (mobile e desktop) ===== */
function CategoryGallery({ images, title }: { images: MenuImage[]; title: string }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <>
      {/* largura total no mobile; limita no md+ pra não ficar gigante */}
      <div className="mt-7 mx-auto w-full md:max-w-[860px]">
        <div className="grid grid-cols-3 gap-4 sm:gap-6 place-items-center">
          {images.map((img, i) => (
            <button
              key={`${title}-${i}`}
              type="button"
              onClick={() => { setIdx(i); setOpen(true); }}
              className="relative w-full overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm transition-transform duration-300 hover:scale-[1.03]"
              style={{ aspectRatio: "1 / 1" }} // quadrada, travada
            >
              <Image
                src={`${img.base}.avif`}
                alt={img.alt ?? `${title} imagem ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width:640px) 30vw, (max-width:1024px) 26vw, 18vw"
                unoptimized={process.env.NODE_ENV !== "production"}
                priority={i < 2}
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        images={images}
        index={idx}
        setIndex={setIdx}
      />
    </>
  );
}

/* ===== Bloco de categoria ===== */
function Category({ title, desc, images }: MenuCategory) {
  return (
    <div className="py-10">
      <Reveal>
        <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
          {title}
        </h3>
      </Reveal>
      <Reveal delay={0.06}>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          {desc}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <CategoryGallery images={images} title={title} />
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-10 flex justify-center">
          <div className="section-divider w-[76%] sm:w-[58%]" />
        </div>
      </Reveal>
    </div>
  );
}

/* ===== Componente principal ===== */
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
            Selecione o formato ideal para o seu evento. Personalizamos combinações e porções
            conforme o número de convidados.
          </p>
        </Reveal>

        {/* 2 colunas (categorias) no desktop, 1 no mobile — isso NÃO altera a grade 3×2 de cada galeria */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {CATEGORIES.map((c) => (
            <div key={c.id} style={{ scrollMarginTop: "calc(var(--header-h) + 12px)" }}>
              <Category {...c} />
            </div>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 grid place-items-center">
            <a href="#form" className="btn btn-primary rounded-full px-8 py-3 leading-none">
              Solicitar orçamento
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
