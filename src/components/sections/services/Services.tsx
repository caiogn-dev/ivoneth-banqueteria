import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
          O que podemos servir no seu evento
        </h2>
        <p className="mt-2 sm:mt-3 text-gray-600 max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed">
          Escolha o formato e nós personalizamos o cardápio para o seu público.
        </p>

        <div className="mt-8 sm:mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {items.map((item, i) => (
              <div key={item.title} className="flex">
                <Card className="text-left w-full flex flex-col rounded-3xl min-h-[380px] md:min-h-0">
                  <CardHeader className="flex-row items-center gap-3 sm:gap-4 space-y-0">
                    <div className="grid place-items-center size-10 sm:size-12 rounded-lg bg-rose-50 border select-none">
                      {item.icon}
                    </div>
                    <CardTitle className="text-base sm:text-xl select-none">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-gray-600">
                      {item.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <span className="mt-1.5 size-1.5 sm:size-2 rounded-full bg-rose-500 flex-shrink-0" />
                          <span className="leading-relaxed">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-10">
          <Button variant="brand" size="lg" asChild>
            <a href="#menu">Ver opções de cardápio</a>
          </Button>
        </div>
      </div>
    </section>
  );
}