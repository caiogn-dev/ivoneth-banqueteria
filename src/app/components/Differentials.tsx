// src/components/Differentials.tsx
"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const GALLERY = [
  "/story/1.avif",
  "/story/2.avif",
  "/story/3.avif",
  "/story/4.avif",
  "/story/5.avif",
  "/story/6.avif",
];

/* Lightbox compacto */
function Lightbox({
  open,
  onClose,
  images,
  index,
  setIndex,
  maxWidthPx = 980,
  maxHeightVh = 82,
}: {
  open: boolean;
  onClose: () => void;
  images: string[];
  index: number;
  setIndex: (i: number) => void;
  maxWidthPx?: number;
  maxHeightVh?: number;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((index + images.length - 1) % images.length);
      if (e.key === "ArrowRight") setIndex((index + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, images.length, onClose, setIndex]);

  if (!open) return null;
  const prev = () => setIndex((index + images.length - 1) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="fixed inset-0 z-[120] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/75" onClick={onClose} />
      <div
        className="relative bg-black/70 rounded-2xl shadow-2xl overflow-hidden w-[92vw] sm:w-[88vw] flex items-center justify-center"
        style={{ maxWidth: `${maxWidthPx}px`, maxHeight: `min(${maxHeightVh}vh, 100svh - 3rem)` }}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/80"
        >
          <X className="h-5 w-5" />
        </button>
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          aria-label="Próxima"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/70"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
          <Image
            src={images[index]}
            alt="Galeria Ivoneth"
            fill
            className="object-contain"
            priority
            unoptimized={process.env.NODE_ENV !== "production"}
          />
        </div>
      </div>
    </div>
  );
}

/* Grid 2×3 (mobile) e 3×2 (desktop), MAIORES e CENTRALIZADAS no desktop */
function Gallery({
  images,
  onOpenAt,
}: {
  images: string[];
  onOpenAt: (i: number) => void;
}) {
  return (
    <div className="mx-auto w-full md:max-w-4xl">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 place-items-center">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => onOpenAt(i)}
            className="relative w-full overflow-hidden rounded-xl ring-1 ring-white/10 shadow-sm hover:brightness-110 transition"
            style={{ aspectRatio: "4 / 3" }}
            aria-label={`Abrir imagem ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Galeria ${i + 1}`}
              fill
              className="object-cover"
              /* 3 colunas desktop ~ 280–300px por item quando container ~ 896–1024px */
              sizes="(min-width:1024px) 300px, (min-width:640px) 44vw, 44vw"
              quality={70}
              priority={i < 2}
              unoptimized={process.env.NODE_ENV !== "production"}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Differentials() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <section id="diferenciais" className="relative isolate w-full section-anchor">
      {/* fundo restrito à seção */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/story-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          {/* 2 colunas no desktop alinhadas ao centro; no mobile empilha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* TEXTO */}
            <div className="order-1 text-center md:text-left md:justify-self-center md:max-w-xl">
              <Reveal>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                  Estamos há{" "}
                  <span className="text-[color:var(--brand-from)]">+ de 10&nbsp;anos</span>{" "}
                  criando experiências memoráveis para empresas de todo o{" "}
                  <span className="text-[color:var(--brand-from)]">Brasil</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
                  A escolha certa para quem busca{" "}
                  <span className="font-semibold text-[color:var(--brand-from)]">sofisticação</span> e capricho nos{" "}
                  <span className="font-semibold text-[color:var(--brand-from)]">detalhes</span>, com um cardápio
                  personalizado elaborado por nossa <span className="italic">chef</span>.
                </p>
              </Reveal>
            </div>

            {/* GALERIA — centralizada e maior no desktop */}
            <div className="order-2 md:justify-self-center w-full">
              <Reveal delay={0.06}>
                <Gallery
                  images={GALLERY}
                  onOpenAt={(i) => {
                    setIdx(i);
                    setOpen(true);
                  }}
                />
              </Reveal>
            </div>

            {/* CTA — mobile após a galeria; desktop embaixo do texto (coluna 1) */}
            <div className="order-3 mt-6 md:mt-2 grid place-items-center md:col-start-1 md:row-start-2 md:place-items-start">
              <Reveal delay={0.12}>
                <a
                  href="#form"
                  className="btn btn-primary rounded-[999px] px-7 sm:px-9 py-3 sm:py-4 leading-none shadow-xl"
                >
                  Solicitar orçamento
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        images={GALLERY}
        index={idx}
        setIndex={setIdx}
      />
    </section>
  );
}
