import React from "react";
import Link from "next/link";
import { MessageSquare, FileText, UtensilsCrossed, CheckCircle, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    { number: "01", icon: <MessageSquare className="text-rose-700" size={28} />, title: "Briefing Detalhado", description: "Conversamos sobre sua visão, orçamento e todos os detalhes.", details: ["Conceito", "Convidados", "Data e local", "Preferências"], duration: "30–60 min" },
    { number: "02", icon: <FileText className="text-rose-700" size={28} />, title: "Proposta Personalizada", description: "Proposta completa e transparente, adequada às suas necessidades.", details: ["Cardápio", "Cronograma", "Equipe", "Valores"], duration: "24–48h" },
    { number: "03", icon: <UtensilsCrossed className="text-rose-700" size={28} />, title: "Degustação & Ajustes", description: "Você experimenta o cardápio e fazemos os ajustes finais juntos.", details: ["Degustação", "Visita ao local", "Ajustes", "Definições"], duration: "2–3h" },
    { number: "04", icon: <CheckCircle className="text-rose-700" size={28} />, title: "Execução & Follow-up", description: "Execução impecável e acompanhamento pós-evento.", details: ["Montagem", "Coordenação", "Atendimento", "Feedback"], duration: "Dia do evento" }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Como <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-600">Trabalhamos</span>
          </h2>
          <div className="section-underline" />
          <p className="text-xl text-gray-600 leading-relaxed">Processo claro e transparente para um evento perfeito.</p>
        </div>

        <div className="space-y-12">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && <div className="hidden lg:block absolute left-16 top-32 w-0.5 h-20 bg-gradient-to-b from-rose-700 to-red-600" />}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Número/Ícone */}
                <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-rose-700 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">{s.icon}</div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                      <span className="text-xs font-bold text-gray-800">{s.number}</span>
                    </div>
                  </div>
                  <div className="text-sm text-rose-700 font-semibold">{s.duration}</div>
                </div>

                {/* Conteúdo */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{s.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {s.details.map((d, di) => (
                      <div key={di} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-rose-700 to-red-600 rounded-full" />
                        <span className="text-gray-700">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Imagem */}
                <div className="lg:col-span-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-rose-100 to-red-100">
                    <img
                      src={`https://images.pexels.com/photos/${i === 0 ? "3184465" : i === 1 ? "4099355" : "1616113"}/pexels-photo-${i === 0 ? "3184465" : i === 1 ? "4099355" : "1616113"}.jpeg`}
                      alt={s.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-8 mb-4">
                  <ArrowRight className="text-rose-700" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pronto para começar?</h3>
            <p className="text-gray-600 mb-6">Vamos conversar e criar algo especial.</p>
            <Link href="#cta" className="btn btn-primary">Iniciar Meu Projeto</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
