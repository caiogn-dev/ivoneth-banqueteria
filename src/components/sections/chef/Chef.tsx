"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Chef() {
  return (
    <section id="chef" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5">
          <Image
            src="/chef.jpg"
            alt="Nossa chef"
            fill
            className="object-cover"
            priority={false}
            unoptimized={process.env.NODE_ENV !== "production"}
          />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">A Chef</h2>
          <p className="mt-3 text-gray-600">
            Nossa chef lidera a cozinha com técnica e sensibilidade, equilibrando sabores e apresentação para entregar
            experiências memoráveis — do coffee break aos jantares executivos.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="brand" asChild>
              <a href="#form">Solicitar orçamento</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#menu">Ver menu</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
