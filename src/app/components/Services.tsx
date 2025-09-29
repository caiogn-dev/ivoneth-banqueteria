// src/components/Services.tsx
import {
  Coffee,
  BriefcaseBusiness,
  Building2,
  Salad,
  Martini,
  UtensilsCrossed,
} from "lucide-react";

export default function Services() {
  const items = [
    { icon: Coffee, label1: "Coffee", label2: "break" },
    { icon: BriefcaseBusiness, label1: "Feiras de", label2: "negócios" },
    { icon: Building2, label1: "Eventos", label2: "corporativos" },
    { icon: UtensilsCrossed, label1: "Buffet", label2: "" },
    { icon: Salad, label1: "Brunch", label2: "" },
    { icon: Martini, label1: "Coqueteis", label2: "" },
  ];

  return (
    // apenas tornei a section um container relativo + isolate para segurar o bg
    <section id="services" className="relative isolate w-full section-anchor">
      {/* === VÍDEO DE FUNDO RESTRITO À SEÇÃO (sem fixed global) === */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/services.mp4" type="video/mp4" />
        </video>
        {/* overlay para leitura */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/55" />
        <div
          className="absolute inset-x-0 bottom-0 h-24 sm:h-28 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.35))" }}
        />
      </div>

      {/* === SEÇÃO Services (conteúdo) — INALTERADO === */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 text-center">
          <div className="py-16 sm:py-24">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Conheça nossos Serviços
            </h2>

            <p className="mt-3 sm:mt-4 text-white/90 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Atendemos eventos de todos os portes:{" "}
              <span className="font-semibold text-[color:var(--brand-from)]">stands</span> em feiras de negócios,{" "}
              <span className="font-semibold text-[color:var(--brand-from)]">congressos</span> e{" "}
              <span className="font-semibold text-[color:var(--brand-from)]">confraternizações</span> empresariais.
            </p>

            <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {items.map(({ icon: Icon, label1, label2 }) => (
                <div
                  key={`${label1}-${label2 || "single"}`}
                  className="w-full max-w-[16rem] mx-auto flex flex-col items-center justify-center text-white h-28 sm:h-32"
                >
                  <div className="grid place-items-center rounded-xl border border-white/25 bg-white/5 backdrop-blur-sm size-12 sm:size-14">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                  </div>
                  <div className="mt-3 leading-tight">
                    <div className="text-lg sm:text-xl font-extrabold">{label1}</div>
                    <div className={`text-lg sm:text-xl font-extrabold ${label2 ? "" : "opacity-0 select-none"}`}>
                      {label2 || "\u00A0"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 sm:mt-12 grid place-items-center"
              style={{ paddingBottom: "max(4rem, env(safe-area-inset-bottom))" }}
            >
              <a
                href="#form"
                className="btn btn-primary !rounded-full px-9 sm:px-10 py-4 sm:py-4.5 leading-none shadow-xl"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
