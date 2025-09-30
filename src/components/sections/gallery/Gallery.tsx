// src/components/sections/gallery/Gallery.tsx
"use client";

import Image from "next/image";
import Reveal from "@/components/core/Reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

// Mantenha as imagens aqui ou carregue de um CMS
const GALLERY_IMAGES = [
  "/story/1.avif", "/story/2.avif", "/story/3.avif",
  "/story/4.avif", "/story/5.avif", "/story/6.avif",
  // Adicione mais 3-6 imagens para chegar no ideal do briefing
];

// O componente Lightbox pode ser movido para 'core' ou mantido aqui
function Lightbox({ open, onOpenChange, images, index, setIndex }: any) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((index + images.length - 1) % images.length);
      if (e.key === "ArrowRight") setIndex((index + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, images.length, setIndex]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[92vw] sm:max-w-[880px] p-0 bg-black/80 border-0 flex items-center justify-center">
        <button onClick={() => onOpenChange(false)} aria-label="Fechar" className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white">
          <X className="h-5 w-5" />
        </button>
        <button onClick={() => setIndex((index + images.length - 1) % images.length)} aria-label="Anterior" className="hidden sm:inline-flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
          <Image src={images[index]} alt="" fill className="object-contain" priority unoptimized={process.env.NODE_ENV !== "production"} />
        </div>
        <button onClick={() => setIndex((index + 1) % images.length)} aria-label="Próxima" className="hidden sm:inline-flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white">
          <ChevronRight className="h-6 w-6" />
        </button>
      </DialogContent>
    </Dialog>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <section id="gallery" className="section-anchor section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Um pouco do que já servimos
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Cada detalhe é pensado para encantar, da apresentação ao sabor.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {GALLERY_IMAGES.map((src, i) => (
            <Reveal key={src} delay={0.2 + i * 0.05}>
              <button
                type="button"
                onClick={() => { setIdx(i); setOpen(true); }}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-black/10 shadow-sm hover:ring-brand-from hover:shadow-lg transition-all duration-300"
                aria-label={`Abrir imagem ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`Galeria Ivoneth Banqueteria ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  unoptimized={process.env.NODE_ENV !== "production"}
                  priority={i < 3}
                />
              </button>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={0.4}>
            <div className="mt-12 text-center">
                 <Button variant="brand" size="lg" asChild>
                    <a href="#form">Quero um orçamento para meu evento</a>
                 </Button>
            </div>
        </Reveal>

      </div>
      <Lightbox open={open} onOpenChange={setOpen} images={GALLERY_IMAGES} index={idx} setIndex={setIdx} />
    </section>
  );
}