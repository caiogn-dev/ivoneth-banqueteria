
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/core/Reveal";
import { Coffee, Martini, UtensilsCrossed } from "lucide-react";

export default function Services() {
  const items = [
    {
      icon: <Coffee className="size-5 md:size-6 text-brand-ink" />,
      title: "Coffee Break",
      features: [
        "Bebidas quentes e frias + estação de apoio",
        "Mix doce/salgado (assados, frutas, minissanduíches)",
        "Montagem, serviço e reposição contínua",
      ],
    },
    {
      icon: <Martini className="size-5 md:size-6 text-brand-ink" />,
      title: "Coquetel",
      features: [
        "Finger foods variados e canapés",
        "Serviço de bandeja com equipe especializada",
        "Montagem e desmontagem completas da estrutura",
      ],
    },
    {
      icon: <UtensilsCrossed className="size-5 md:size-6 text-brand-ink" />,
      title: "Almoço & Jantar",
      features: [
        "Prato principal com acompanhamentos",
        "Buffet completo montado no local (inclui louças)",
        "Equipe de serviço para garantir a organização",
      ],
    },
    {
      icon: <UtensilsCrossed className="size-5 md:size-6 text-brand-ink" />,
      title: "Ilhas Gastronômicas",
      features: [
        "Estações temáticas ao vivo (massas, risotos, saladas, grill)",
        "Montagem elegante com louças e utensílios premium",
        "Chef e equipe dedicados para preparo e reposição contínua",
      ],
    },
  ];

  return (
    <section id="services" className="section section-anchor bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            O que podemos servir no seu evento
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2 sm:mt-3 text-gray-600 max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed">
            Escolha o formato e nós personalizamos o cardápio para o seu público.
          </p>
        </Reveal>

        <div className="mt-8 sm:mt-12">
          {/* 2×2 no mobile; 4 em uma linha no desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {items.map((item, i) => (
              <div key={item.title}>
                <Reveal delay={0.2 + i * 0.1}>
                  <Card className="text-left h-full flex flex-col rounded-3xl">
                    <CardHeader className="flex-row items-center gap-3 sm:gap-4 space-y-0">
                      <div className="grid place-items-center size-10 sm:size-12 rounded-lg bg-rose-50 border select-none">
                        {item.icon}
                      </div>
                      <CardTitle className="text-base sm:text-xl select-none">
                        {item.title}
                      </CardTitle>
                    </CardHeader>

                    {/* Sem cortar texto: apenas altura mínima no mobile para uniformizar */}
                    <CardContent className="flex-grow min-h-[200px] sm:min-h-0">
                      <ul className="space-y-1.5 sm:space-y-2 text-[13px] sm:text-base text-gray-600">
                        {item.features.map((feat) => (
                          <li key={feat} className="flex items-start">
                            <span className="text-brand-from mr-2 mt-1 size-1.5 rounded-full bg-current" />
                            <span className="leading-snug sm:leading-normal">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-6 sm:mt-10">
            <Button variant="brand" size="lg" asChild>
              <a href="#menu">Ver opções de cardápio</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
