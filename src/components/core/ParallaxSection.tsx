"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  id?: string;
  bgVideo?: string;      // ex: "/services.mp4"
  bgImage?: string;      // ex: "/hero.jpg"
  overlay?: string;      // tailwind classes, ex: "bg-black/50"
  children: React.ReactNode;
  className?: string;    // classes extras no container
};

/**
 * ParallaxSection
 * - fundo "pinned" (parece fixo) com video OU imagem
 * - conteúdo scrolla por cima
 */
export default function ParallaxSection({
  id,
  bgVideo,
  bgImage,
  overlay = "bg-black/50",
  className = "",
  children,
}: Props) {
  return (
    <section id={id} className={`relative isolate w-full ${className}`}>
      {/* Fundo pinned (fica “parado” enquanto a seção passa) */}
      <div className="sticky top-0 h-screen -z-10 overflow-hidden">
        {bgVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        ) : bgImage ? (
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
        ) : null}

        {/* overlay para legibilidade */}
        <div className={`absolute inset-0 ${overlay}`} aria-hidden="true" />
        {/* vinheta suave inferior */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
          style={{ background: "linear-gradient(180deg,transparent,rgba(0,0,0,.35))" }}
          aria-hidden="true"
        />
      </div>

      {/* Conteúdo com padding vertical suficiente para dar a “passada” */}
      <div className="relative z-10 py-16 sm:py-24">
        {children}
      </div>
    </section>
  );
}
