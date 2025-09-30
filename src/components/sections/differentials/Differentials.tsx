// src/components/sections/differentials/Differentials.tsx
"use client";

import Reveal from "@/components/core/Reveal";
import { Clock, Users, ChefHat, FileText, Sparkles } from "lucide-react";

export default function Differentials() {
    const items = [
    {
      icon: <Clock className="size-7 text-brand-from" />,
      title: "Pontualidade garantida",
      desc: "Horário combinado é horário cumprido. Chegamos com antecedência para que tudo esteja perfeito na hora certa.",
    },
    {
      icon: <Users className="size-7 text-brand-from" />,
      title: "Equipe completa e discreta",
      desc: "Você não se preocupa com nada. Cuidamos da montagem, serviço, reposição e organização final.",
    },
    {
      icon: <ChefHat className="size-7 text-brand-from" />,
      title: "Cardápio sob medida",
      desc: "Adequamos o menu ao perfil do seu evento, público e restrições alimentares, com a assinatura da nossa chef.",
    },
    {
      icon: <Sparkles className="size-7 text-brand-from" />,
      title: "Operação silenciosa",
      desc: "Nossa equipe opera de forma organizada e discreta, garantindo que a rotina do seu escritório não seja interrompida.",
    },
    {
      icon: <FileText className="size-7 text-brand-from" />,
      title: "NF-e e processos simples",
      desc: "Emitimos Nota Fiscal Eletrônica e facilitamos todos os processos para os departamentos de Compras e Financeiro.",
    },
  ];

  return (
    // Fundo de cor para separar
    <section id="diferenciais" className="section-anchor section bg-rose-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Por que empresas escolhem a Ivoneth
                </h2>
            </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            // Delay escalonado para cada item
            <Reveal key={item.title} delay={0.1 + i * 0.05}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="mt-1 text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}