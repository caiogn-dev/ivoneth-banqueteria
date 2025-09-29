import React from "react";
import Link from "next/link";
import { CheckCircle, Utensils, Users as Users2, Clock, Sparkles, Shield } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    { icon: <Shield className="text-rose-700" size={24} />, title: "Equipe Certificada ISO 9001", description: "Processos padronizados e qualidade garantida em cada detalhe do seu evento." },
    { icon: <Sparkles className="text-rose-700" size={24} />, title: "Apresentação Artística", description: "Mesa que vira mídia espontânea com montagem impecável e louças de cinema." },
    { icon: <Utensils className="text-rose-700" size={24} />, title: "Curadoria Gastronômica Autoral", description: "Menu Raízes exclusivo com ilhas ao vivo e finger foods únicos." },
    { icon: <Users2 className="text-rose-700" size={24} />, title: "Operação 360° Completa", description: "Cuidamos de tudo: cardápio, staff, montagem, louças e coordenação de salão." },
    { icon: <Clock className="text-rose-700" size={24} />, title: "Pontualidade & Previsibilidade", description: "SLA definido, checklist rigoroso e acompanhamento pós-evento garantido." },
    { icon: <CheckCircle className="text-rose-700" size={24} />, title: "Maior Acervo Premium do TO", description: "Louças, taças e pratos exclusivos para uma apresentação inesquecível." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Por que escolher a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-600">Ivoneth Banqueteria</span>
          </h2>
          <div className="section-underline" />
          <p className="text-xl text-gray-600 leading-relaxed">
            Mais de 15 anos transformando momentos especiais em experiências inesquecíveis com excelência certificada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="card card-hover p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center">
                  {b.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl p-8 border border-rose-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pronto para seu evento perfeito?</h3>
              <p className="text-gray-600">Agende uma degustação gratuita e conheça nossa qualidade de perto.</p>
            </div>
            <Link href="#cta" className="btn btn-primary">Agendar Degustação</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ValueProposition;
