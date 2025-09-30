// src/components/sections/comofunciona/ComoFunciona.tsx
"use client";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/core/Reveal";
import { Clock, FileText, Settings, Truck } from "lucide-react";

export default function ComoFunciona() {
  const items = [
    {
      icon: <Clock size={28} className="text-brand-ink" />,
      title: (
        <>
          Briefing rápido <span className="font-normal text-gray-600">(1 min)</span>
        </>
      ),
      desc: "Você nos informa o tipo de evento, data e número de pessoas de forma rápida e objetiva.",
    },
    {
      icon: <FileText size={28} className="text-brand-ink" />,
      title: (
        <>
          Proposta ágil <span className="font-normal text-gray-600">(até 30 min)</span>
        </>
      ),
      desc: "Enviamos um orçamento detalhado com uma sugestão de cardápio personalizado para seu evento.",
    },
    {
      icon: <Settings size={28} className="text-brand-ink" />,
      title: "Preparação",
      desc: "Com o cardápio definido, nossa equipe alinha todos os detalhes de logística e produção.",
    },
    {
      icon: <Truck size={28} className="text-brand-ink" />,
      title: "Execução no local",
      desc: "Montamos a estrutura 60-90 min antes, servimos durante o evento e organizamos tudo ao final.",
    },
  ];

  return (
    <section id="process" className="section section-anchor bg-rose-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 select-none">
            Como funciona
          </h2>
        </Reveal>

        <div className="relative mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
            {items.map((it, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <div className="text-center">
                  <div className="mx-auto mb-4 size-16 grid place-items-center rounded-xl bg-white border border-gray-200 shadow-sm select-none">
                    {it.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 select-none">{it.title}</h3>
                  <p className="mt-2 text-gray-600 max-w-xs mx-auto">{it.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex justify-center">
            <Button variant="brand" size="lg" asChild>
              <a href="#form">Solicitar orçamento</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}