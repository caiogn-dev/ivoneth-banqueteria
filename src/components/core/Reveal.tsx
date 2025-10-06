// src/components/core/Reveal.tsx
"use client";

import { useEffect, useRef, useState, PropsWithChildren } from "react";
import NextDynamic from "next/dynamic";

// Carrega o módulo de animação só no cliente e em chunk separado
const Motion = NextDynamic(() => import("./_Motion"), { ssr: false });

type Props = PropsWithChildren<{ delay?: number; y?: number }>;

export default function Reveal({ children, delay = 0, y = 16 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Observa entrada no viewport com uma margem para começar antes de aparecer
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: 1 }}>
      {visible ? (
        <Motion delay={delay} y={y}>{children}</Motion>
      ) : null}
    </div>
  );
}
