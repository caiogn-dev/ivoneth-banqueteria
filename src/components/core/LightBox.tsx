"use client";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";

export type LightboxImage = { src: string; alt?: string };

export default function Lightbox({
  open,
  onOpenChange,
  images,
  startIndex,
  title,
  maxW = { sm: 720, md: 820 }, // largura máxima
  maxHsvh = 80, // altura máx (svh)
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  images: LightboxImage[];
  startIndex: number;
  title?: string;
  maxW?: { sm: number; md: number };
  maxHsvh?: number;
}) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(startIndex);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mantém um mapa de fallbacks por índice (necessário com next/image)
  const [fallback, setFallback] = useState<Record<number, boolean>>({});

  // Evita índices fora do range
  const safeStart = useMemo(
    () => Math.min(Math.max(startIndex, 0), Math.max(images.length - 1, 0)),
    [startIndex, images.length]
  );

  // 1) Abre no item clicado
  useEffect(() => {
    if (open && api && images.length > 0) {
      api.scrollTo(safeStart, true);
    }
  }, [open, api, images.length, safeStart]);

  // 2) Atualiza contador (com cleanup correto)
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on?.("select", onSelect);
    // sincroniza no mount
    setCurrent(api.selectedScrollSnap());

    return () => {
      // garante retorno void
      try {
        api.off?.("select", onSelect);
      } catch {
        /* noop */
      }
    };
  }, [api]);

  if (!open || images.length === 0) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Acessibilidade */}
      <VisuallyHidden>
        <DialogTitle>{title || "Galeria de Imagens"}</DialogTitle>
        <DialogDescription>
          Visualize as imagens do menu em detalhes.
        </DialogDescription>
      </VisuallyHidden>

      <DialogContent
        className="
          bg-black/70 backdrop-blur-sm border border-white/10 p-2 sm:p-3
          rounded-xl sm:rounded-2xl shadow-2xl
          w-[95vw] max-w-[95vw] sm:max-w-[85vw]
          flex flex-col justify-center items-center
        "
      >
        <div className="relative mx-auto w-full">
          {/* Moldura / Contêiner da Imagem */}
          <div
            ref={containerRef}
            className="
              relative mx-auto w-full
              ring-1 ring-white/10 rounded-lg overflow-hidden
              min-h-[300px]
            "
            // Usamos style para tamanhos dinâmicos (Tailwind não suporta interpolação)
            style={{
              // Em telas >= sm, use maxW.sm; em >= md, use maxW.md (aprox. via clamp)
              maxWidth: `min(${maxW.md}px, 85vw)`,
              // Limita altura pela viewport (svh)
              maxHeight: `${maxHsvh}svh`,
            }}
          >
            <Carousel opts={{ align: "center", loop: true }} setApi={setApi} className="w-full h-full">
              <CarouselContent className="w-full h-full">
                {images.map((img, i) => {
                  const showFallback = fallback[i];
                  return (
                    <CarouselItem key={`${img.src}-${i}`} className="basis-full h-full">
                      <div className="relative w-full h-full min-h-[300px]">
                        {showFallback ? (
                          // Fallback simples quando a imagem falha
                          <div className="flex h-full w-full items-center justify-center bg-neutral-900/60 text-white text-sm">
                            Não foi possível carregar a imagem.
                          </div>
                        ) : (
                          <Image
                            src={img.src}
                            alt={img.alt ?? `Imagem ${i + 1}`}
                            fill
                            className="object-contain object-center"
                            onError={() =>
                              setFallback((f) => ({ ...f, [i]: true }))
                            }
                            // Em dev, manter unoptimized ajuda no hot reload de imagens
                            unoptimized={process.env.NODE_ENV !== "production"}
                            priority={i === safeStart}
                            sizes="(min-width: 768px) 85vw, 95vw"
                          />
                        )}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              {/* Botões do Carrossel */}
              <CarouselPrevious
                className="
                  left-2 sm:left-3 top-1/2 -translate-y-1/2
                  h-8 w-8 sm:h-9 sm:w-9
                  bg-black/55 hover:bg-black/65 text-white border border-white/10
                "
              />
              <CarouselNext
                className="
                  right-2 sm:right-3 top-1/2 -translate-y-1/2
                  h-8 w-8 sm:h-9 sm:w-9
                  bg-black/55 hover:bg-black/65 text-white border border-white/10
                "
              />
            </Carousel>
          </div>

          {/* Barra inferior: contador + fechar */}
          <div className="mt-3 flex items-center justify-between gap-3 text-white/90">
            <div className="text-xs sm:text-sm opacity-85">
              {title ? <span className="font-semibold">{title}</span> : null}
              {title ? " · " : null}
              {current + 1} / {images.length}
            </div>

            <DialogClose asChild>
              <button
                aria-label="Fechar"
                className="
                  inline-flex items-center justify-center rounded-full
                  h-8 px-3 text-xs sm:text-sm
                  bg-black/55 hover:bg-black/65 text-white border border-white/10
                "
              >
                Fechar
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
