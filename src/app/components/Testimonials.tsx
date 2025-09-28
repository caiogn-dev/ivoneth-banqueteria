import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    { name: "Maria Silva", event: "Casamento", date: "Dezembro 2024", rating: 5, text: "Superou nossas expectativas! Apresentação impecável e comida divina.", avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg" },
    { name: "João Santos", event: "Formatura Medicina", date: "Novembro 2024", rating: 5, text: "Organização impecável para 200 pessoas. Pontualidade e qualidade.", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
    { name: "Ana Paula Costa", event: "15 Anos", date: "Outubro 2024", rating: 5, text: "Mesa de doces virou destaque da festa, parecia obra de arte!", avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" },
    { name: "Carla Mendes", event: "Casamento", date: "Agosto 2024", rating: 5, text: "Menu Raízes surpreendeu a todos. Convidados ainda comentam!", avatar: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg" }
  ];

  const partners = ["Cerimonial Elegance", "Espaço Nobre", "Hotel Plaza", "UFT", "Prefeitura de Palmas", "Grupo TO"];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50/50 to-red-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            O que dizem nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-600">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">A satisfação dos nossos clientes é nossa maior conquista.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-rose-700 to-red-600 rounded-full p-3 shadow-lg">
                <Quote className="text-white" size={20} />
              </div>
              <div className="flex items-center space-x-1 mb-4 mt-4">
                {[...Array(t.rating)].map((_, k) => <Star key={k} className="text-yellow-400 fill-current" size={16} />)}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">"{t.text}"</blockquote>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-100" />
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.event}</div>
                  <div className="text-xs text-rose-700">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de confiança */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Parceiros e Certificações</h3>
            <p className="text-gray-600">Trabalhamos com os melhores e mantemos altos padrões de qualidade.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-rose-50 to-red-50 rounded-lg px-6 py-3 border border-rose-100">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-700 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ISO</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">ISO 9001</div>
                <div className="text-sm text-gray-600">Certificado</div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9</div>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={12} />)}
              </div>
              <div className="text-sm text-gray-600">Google Reviews</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">1200+</div>
              <div className="text-sm text-gray-600">Eventos</div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Nossos Parceiros</h4>
              <p className="text-sm text-gray-600">Cerimoniais e espaços que confiam em nosso trabalho</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-60">
              {partners.map((p, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-600 text-center leading-tight">{p.split(" ")[0]}</span>
                  </div>
                  <div className="text-xs text-gray-500">{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
