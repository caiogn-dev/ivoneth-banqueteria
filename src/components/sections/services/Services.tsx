// src/components/sections/services/Services.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/core/Reveal";
import { Coffee, Martini, UtensilsCrossed } from "lucide-react";

export default function Services() {
  const items = [
    {
      icon: <Coffee className="size-6 text-brand-ink" />,
      title: "Coffee Break",
      features: [
        "Bebidas quentes e frias + estação de apoio",
        "Mix doce/salgado (assados, frutas, minissanduíches)",
        "Montagem, serviço e reposição contínua",
      ],
    },
    {
      icon: <Martini className="size-6 text-brand-ink" />,
      title: "Coquetel",
      features: [
        "Finger foods variados e canapés",
        "Serviço de bandeja com equipe especializada",
        "Montagem e desmontagem completas da estrutura",
      ],
    },
    {
      icon: <UtensilsCrossed className="size-6 text-brand-ink" />,
      title: "Almoço & Jantar",
      features: [
        "Prato principal com acompanhamentos",
        "Buffet completo montado no local (inclui louças)",
        "Equipe de serviço para garantir a organização",
      ],
    },
  ];

  return (
    <section id="services" className="section section-anchor bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 select-none">
            O que podemos servir no seu evento
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Escolha o formato e nós personalizamos o cardápio para o seu público.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.2 + i * 0.1}>
              <Card className="text-left h-full flex flex-col">
                <CardHeader className="flex-row items-center gap-4 space-y-0">
                  <div className="grid place-items-center size-12 rounded-lg bg-rose-50 border select-none">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl select-none">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-gray-600">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-start">
                        <span className="text-brand-from mr-2 mt-1.5 size-1.5 rounded-full bg-current" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
            <p className="mt-8 text-sm text-gray-500">
                Nota: Cardápios podem incluir opções veganas, low carb e sem glúten sob solicitação.
            </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10">
            <Button variant="brand" size="lg" asChild>
              <a href="#menu">Ver opções de cardápio</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}