// src/components/sections/differentials/Differentials.tsx
"use client";

import Image from "next/image";
import Reveal from "@/components/core/Reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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

/* Lightbox com Dialog (shadcn) */
function Lightbox({
  open,
  onOpenChange,
  images,
  index,
  setIndex,
  maxWidthPx = 980,
  maxHeightVh = 82,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  images: string[];
  index: number;
  setIndex: (i: number) => void;
  maxWidthPx?: number;
  maxHeightVh?: number;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((index + images.length - 1) % images.length);
      if (e.key === "ArrowRight") setIndex((index + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, images.length, setIndex]);

  // AJUSTE DE CENTRALIZAÇÃO DO LIGHTBOX NO DIALOGCONTENT
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="
          max-w-[92vw] sm:max-w-[880px] p-0 bg-black/80 border-0 
          // Centraliza o conteúdo dentro do Dialog
          flex items-center justify-center 
        "
      >
        <button
          onClick={() => onOpenChange(false)}
          aria-label="Fechar"
          className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <button
          onClick={() => setIndex((index + images.length - 1) % images.length)}
          aria-label="Anterior"
          className="hidden sm:inline-flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
          <Image
            src={images[index]}
            alt=""
            fill
            className="object-contain"
            priority
            unoptimized={process.env.NODE_ENV !== "production"}
          />
        </div>

        <button
          onClick={() => setIndex((index + 1) % images.length)}
          aria-label="Próxima"
          className="hidden sm:inline-flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </DialogContent>
    </Dialog>
  );
}

export default function Differentials() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <section id="diferenciais" className="relative isolate w-full section-anchor">
      {/* fundo restrito à seção */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/story-bg.jpg')" }} />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          
          {/* 🔑 MUDANÇA PRINCIPAL: grid-cols-2 com items-center para centralização vertical */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            
            {/* Texto */}
            <div className="text-center md:text-left md:justify-self-center md:max-w-xl">
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
                  <span className="font-semibold text-[color:var(--brand-from)]">sofisticação</span> e
                  capricho nos <span className="font-semibold text-[color:var(--brand-from)]">detalhes</span>,
                  com um cardápio personalizado elaborado por nossa <span className="italic">chef</span>.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-6 md:mt-8">
                  <Button variant="brand" size="lg" asChild>
                    <a href="#form">Solicitar orçamento</a>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Galeria */}
            <div className="md:justify-self-center w-full md:max-w-xl">
              <Reveal delay={0.06}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 justify-items-center md:justify-items-stretch">
                  {GALLERY.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => {
                        setIdx(i);
                        setOpen(true);
                      }}
                      className="relative w-full [aspect-ratio:4/3] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-sm hover:brightness-110 transition"
                      aria-label={`Abrir imagem ${i + 1}`}
                    >
                      <Image
                        src={src}
                        alt={`Galeria ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width:640px) 44vw, (max-width:1024px) 28vw, 18vw"
                        unoptimized={process.env.NODE_ENV !== "production"}
                        priority={i < 2}
                      />
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        onOpenChange={setOpen}
        images={GALLERY}
        index={idx}
        setIndex={setIdx}
      />
    </section>
  );
}