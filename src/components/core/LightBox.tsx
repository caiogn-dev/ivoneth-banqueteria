"use client";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"; // Certifique-se que o caminho está correto
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"; // Certifique-se que o caminho está correto
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export type LightboxImage = { src: string; alt?: string };

export default function Lightbox({
  open,
  onOpenChange,
  images,
  startIndex,
  title,
  maxW = { sm: 720, md: 820 }, // Máxima largura do lightbox
  maxHsvh = 80, // Máxima altura (80% do viewport height)
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

  // 1. Abre no item clicado
  useEffect(() => {
    if (open && api && images.length > 0) {
      // O `scrollTo` só funciona depois que o API é inicializado, por isso está no useEffect
      api.scrollTo(startIndex, true);
    }
  }, [open, api, startIndex, images]);

  // 2. Atualiza contador
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    // Inicializa o contador corretamente ao abrir o lightbox
    setCurrent(api.selectedScrollSnap()); 
    return () => api.off("select", onSelect);
  }, [api]);

  if (!open || images.length === 0) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Acessibilidade */}
      <VisuallyHidden>
        <DialogTitle>{title || "Galeria de Imagens"}</DialogTitle>
        <DialogDescription>Visualize as imagens do menu em detalhes.</DialogDescription>
      </VisuallyHidden>
      
      <DialogContent
        className="
          bg-black/70 backdrop-blur-sm border border-white/10 p-2 sm:p-3
          rounded-xl sm:rounded-2xl shadow-2xl 
          
          // **AJUSTE PRINCIPAL DE TAMANHO DO DIALOG:** Força a largura máxima
          w-[95vw] max-w-[95vw] sm:max-w-[85vw] 
          
          // Centraliza verticalmente e horizontalmente na tela
          flex flex-col justify-center items-center
        "
      >
        <div className="relative mx-auto w-full">
          {/* Moldura / Contêiner da Imagem */}
          <div
            ref={containerRef}
            className={`
              relative mx-auto 
              
              // **AJUSTE DE LARGURA:** Ocupa a largura máxima do DialogContent
              w-full 
              max-w-[${maxW.sm}px] md:max-w-[${maxW.md}px]
              
              // Altura máxima baseada nas props
              max-h-[${maxHsvh}svh] min-h-[300px]
              
              ring-1 ring-white/10 rounded-lg overflow-hidden
            `}
            // REMOVIDO: o aspectRatio fixo para permitir flexibilidade de imagem
          >
            <Carousel opts={{ align: "center", loop: true }} setApi={setApi} className="w-full h-full">
              <CarouselContent className="w-full h-full">
                {images.map((img, i) => (
                  <CarouselItem key={`${img.src}-${i}`} className="basis-full h-full">
                    {/* Contêiner do Next/Image para `fill` */}
                    <div className="relative w-full h-full min-h-[300px]">
                      <Image
                        src={img.src}
                        alt={img.alt ?? `Imagem ${i + 1}`}
                        fill
                        // **GARANTE CENTRALIZAÇÃO E VISIBILIDADE TOTAL**
                        className="object-contain object-center" 
                        onError={(e) => {
                          console.error(`Erro ao carregar imagem: ${img.src}`);
                          e.currentTarget.src = "https://via.placeholder.com/400x300"; // Fallback
                        }}
                        unoptimized={process.env.NODE_ENV !== "production"}
                        priority={i === startIndex}
                      />
                    </div>
                  </CarouselItem>
                ))}
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
              {/* O valor de `current` começa em 0, por isso o + 1 */}
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