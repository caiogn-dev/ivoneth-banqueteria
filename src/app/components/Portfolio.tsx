import React from "react";
import Link from "next/link";
import { Users, Calendar, Star, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const cases = [
    { type: "Casamento", title: "Casamento Ana & Carlos", image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg", guests: 180, concept: "Banquete clássico com ilhas ao vivo", testimonial: "Superou todas as expectativas! A apresentação estava impecável.", rating: 5, date: "Dezembro 2024" },
    { type: "Debutante", title: "15 Anos da Mariana", image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg", guests: 120, concept: "Mesa de doces artística + finger foods", testimonial: "A mesa de doces virou o destaque da festa. Lindíssimo!", rating: 5, date: "Novembro 2024" },
    { type: "Formatura", title: "Formatura Medicina UFT", image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg", guests: 200, concept: "Banquete + estação de risotos", testimonial: "Organização impecável. Todos elogiaram a comida.", rating: 5, date: "Outubro 2024" },
    { type: "Casamento", title: "Casamento Lucia & João", image: "https://images.pexels.com/photos/2072118/pexels-photo-2072118.jpeg", guests: 250, concept: "Menu Raízes + estação de massas", testimonial: "Curadoria gastronômica sensacional!", rating: 5, date: "Setembro 2024" },
    { type: "Aniversário", title: "50 Anos do Sr. Roberto", image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg", guests: 80, concept: "Banquete temático", testimonial: "Cuidaram de cada detalhe.", rating: 5, date: "Agosto 2024" },
    { type: "Debutante", title: "15 Anos da Isabella", image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg", guests: 150, concept: "Mesa temática + ilhas de sobremesas", testimonial: "Um sonho! Montagem perfeita.", rating: 5, date: "Julho 2024" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Nossos Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-600">Sucesso</span>
          </h2>
          <div className="section-underline" />
          <p className="text-xl text-gray-600 leading-relaxed">Alguns momentos memoráveis que tivemos o privilégio de criar.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group card card-hover overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-rose-700">{c.type}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    {[...Array(c.rating)].map((_, k) => <Star key={k} className="text-yellow-400 fill-current" size={12} />)}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-700 transition-colors">{c.title}</h3>
                  <p className="text-gray-600 font-medium">{c.concept}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1"><Users size={14} /><span>{c.guests} convidados</span></div>
                  <div className="flex items-center space-x-1"><Calendar size={14} /><span>{c.date}</span></div>
                </div>

                <Link href="#cta" className="w-full btn btn-primary text-center">
                  <span>Ver Detalhes</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4 card p-8">
            <h3 className="text-2xl font-bold text-gray-900">Quer ver seu evento aqui?</h3>
            <p className="text-gray-600 max-w-md text-center">Cada projeto é único. Vamos conversar?</p>
            <Link href="#cta" className="btn btn-primary">Solicitar Projeto</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
