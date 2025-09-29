// src/components/ComoFuncionaFlow.tsx
import Image from "next/image";

export default function ComoFuncionaFlow() {
  const items = [
    {
      icon: "/flow/consulta.svg",
      title: <>Consulta <span className="text-[color:var(--brand-ink)]">Personalizada</span></>,
      desc: "Entendemos suas necessidades específicas para criar um menu sob medida.",
    },
    {
      icon: "/flow/planejamento.svg",
      title: <>Planejamento <span className="text-[color:var(--brand-ink)]">Detalhado</span></>,
      desc: "Planejamos cada etapa do serviço para garantir um evento alinhado com a expectativa.",
    },
    {
      icon: "/flow/preparo.svg",
      title: <>Preparação <span className="text-[color:var(--brand-ink)]">Artesanal</span></>,
      desc: "Nossa chef prepara tudo de maneira artesanal com ingredientes selecionados.",
    },
    {
      icon: "/flow/execucao.svg",
      title: <>Execução <span className="text-[color:var(--brand-ink)]">Impecável</span></>,
      desc: "Montamos o buffet no local do evento, garantindo comodidade e comida fresquinha.",
    },
  ];

  return (
    // trocado para fundo opaco: de bg-rose-50/40 → bg-rose-50
    <section id="process" className="section section-anchor bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold">Como funciona?</h2>

        <div className="relative mt-10">
          {/* grid 2x2 */}
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12 items-start">
            {items.map((it, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 size-16">
                  <Image src={it.icon} alt="" width={64} height={64} className="object-contain mx-auto opacity-90" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{it.title}</h3>
                <p className="mt-2 text-gray-600 max-w-xs mx-auto">{it.desc}</p>
              </div>
            ))}
          </div>

          {/* setas horizontais */}
          <div className="hidden sm:block pointer-events-none absolute inset-0">
            <svg
              viewBox="0 0 24 24"
              className="absolute left-1/2 top-[22%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-gray-800/70"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="absolute left-1/2 bottom-[22%] -translate-x-1/2 translate-y-1/2 w-8 h-8 text-gray-800/70"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#form" className="btn btn-primary">Solicitar orçamento personalizado</a>
        </div>
      </div>
    </section>
  );
}
