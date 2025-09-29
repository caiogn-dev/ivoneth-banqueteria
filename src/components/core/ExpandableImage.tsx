"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Props = {
  src: string;
  alt?: string;
  className?: string;   // classes da miniatura
  maxWidthPx?: number;  // largura máxima do card aberto
  maxHeightVh?: number; // altura máxima do card aberto (em % da viewport)
};

export default function ExpandableImage({
  src,
  alt = "",
  className = "",
  maxWidthPx = 720,
  maxHeightVh = 70,
}: Props) {
  const [open, setOpen] = useState(false);

  // trava o scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      {/* miniatura */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm hover:shadow-md transition ${className}`}
        aria-label="Ampliar imagem"
      >
        <Image
          src={src}
          alt={alt}
          width={512}
          height={512}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          unoptimized={process.env.NODE_ENV !== "production"}
        />
      </button>

      {/* modal custom (sem <dialog>) */}
      {open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center p-4"
          aria-modal="true"
          role="dialog"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/75"
            onClick={() => setOpen(false)}
          />

          {/* card central (menor, sem borda branca) */}
          <div
            className="relative bg-black/70 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              maxWidth: `${maxWidthPx}px`,
              maxHeight: `min(${maxHeightVh}vh, 100svh - 4rem)`,
              width: "90vw",
              height: "auto",
              aspectRatio: "4/3", // remova se quiser altura livre
            }}
          >
            {/* botão fechar */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/80"
            >
              <X className="h-5 w-5" />
            </button>

            {/* imagem contida no card */}
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              unoptimized={process.env.NODE_ENV !== "production"}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
