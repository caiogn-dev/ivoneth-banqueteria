import { Button } from "@/components/ui/button";
import Reveal from "@/components/core/Reveal";
import { Clock, FileText, Settings, Truck } from "lucide-react";

export default function ComoFunciona() {
  const items = [
    {
      icon: <Clock className="size-5 text-brand-ink md:size-6" />,
      title: (
        <>
          Briefing rápido{" "}
          <span className="font-normal text-gray-600">(1 min)</span>
        </>
      ),
      desc:
        "Você nos informa o tipo de evento, data e número de pessoas de forma rápida e objetiva.",
    },
    {
      icon: <FileText className="size-5 text-brand-ink md:size-6" />,
      title: (
        <>
          Proposta ágil{" "}
          <span className="font-normal text-gray-600">(até 30 min)</span>
        </>
      ),
      desc:
        "Enviamos um orçamento detalhado com uma sugestão de cardápio personalizado para seu evento.",
    },
    {
      icon: <Settings className="size-5 text-brand-ink md:size-6" />,
      title: "Preparação",
      desc:
        "Com o cardápio definido, nossa equipe alinha todos os detalhes de logística e produção.",
    },
    {
      icon: <Truck className="size-5 text-brand-ink md:size-6" />,
      title: "Execução no local",
      desc:
        "Montamos a estrutura 60-90 min antes, servimos durante o evento e organizamos tudo ao final.",
    },
  ];

  return (
    <section id="process" className="section section-anchor bg-rose-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-900 select-none">
            Como funciona
          </h2>
        </Reveal>

        <div className="relative mt-8 sm:mt-12">
          {/* 2x2 no mobile; 4 colunas no lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-x-8 sm:gap-y-10">
            {items.map((it, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <div className="text-center">
                  <div className="mx-auto mb-3 sm:mb-4 size-12 sm:size-14 grid place-items-center rounded-xl bg-white border border-gray-200 shadow-sm select-none">
                    {it.icon}
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-800 leading-snug select-none">
                    {it.title}
                  </h3>
                  {/* sem line-clamp, sem max-w agressivo; só um leve controle de largura no mobile */}
                  <p className="mt-1 sm:mt-2 text-[13px] sm:text-sm text-gray-600 leading-snug mx-auto max-w-[28ch] sm:max-w-none">
                    {it.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 sm:mt-12 flex justify-center">
            <Button variant="brand" size="lg" asChild>
              <a href="#form">Solicitar orçamento</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
