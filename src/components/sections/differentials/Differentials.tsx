import Reveal from "@/components/core/Reveal";
import { Clock, Users, ChefHat, FileText, Sparkles, ClipboardCheck } from "lucide-react";

export default function Differentials() {
  const items = [
    {
      icon: <Clock className="size-5 md:size-6 text-brand-from" />,
      title: "Pontualidade garantida",
      desc:
        "Horário combinado é horário cumprido. Chegamos com antecedência para que tudo esteja perfeito na hora certa.",
    },
    {
      icon: <Users className="size-5 md:size-6 text-brand-from" />,
      title: "Equipe completa e discreta",
      desc:
        "Você não se preocupa com nada. Cuidamos da montagem, serviço, reposição e organização final.",
    },
    {
      icon: <ChefHat className="size-5 md:size-6 text-brand-from" />,
      title: "Cardápio sob medida",
      desc:
        "Adequamos o menu ao perfil do seu evento, público e restrições alimentares, com a assinatura da nossa chef.",
    },
    {
      icon: <Sparkles className="size-5 md:size-6 text-brand-from" />,
      title: "Operação silenciosa",
      desc:
        "Nossa equipe opera de forma organizada e discreta, garantindo que a rotina do seu escritório não seja interrompida.",
    },
    {
      icon: <FileText className="size-5 md:size-6 text-brand-from" />,
      title: "NF-e e processos simples",
      desc:
        "Emitimos Nota Fiscal Eletrônica e facilitamos todos os processos para os departamentos de Compras e Financeiro.",
    },
    // ✅ Novo bloco (do briefing): agilidade na proposta
    {
      icon: <ClipboardCheck className="size-5 md:size-6 text-brand-from" />,
      title: "Orçamento rápido e descomplicado",
      desc:
        "Agilidade para aprovar internamente: enviamos uma proposta clara e personalizada no mesmo dia útil.",
    },
  ];

  return (
    <section id="diferenciais" className="section-anchor section bg-rose-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
              Por que empresas escolhem a Ivoneth
            </h2>
          </div>
        </Reveal>

        {/* 2×2 no mobile; md:3 colunas */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {items.map((item, i) => (
            <div key={item.title}>
              <Reveal delay={0.1 + i * 0.05}>
                <div className="p-3 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-sm sm:text-lg font-semibold text-gray-800 leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 sm:mt-1.5 text-[13px] sm:text-sm text-gray-600 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
