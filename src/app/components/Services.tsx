import React from "react";
import { Heart, GraduationCap, Sparkles, Check } from "lucide-react";

const Services = () => {
  const services = [
    { icon: <Heart className="text-red-600" size={28} />, title: "Casamentos", description: "Cerimônias e recepções inesquecíveis com todo cuidado que seu grande dia merece.", features: ["Menu personalizado", "Coordenação completa", "Louças premium", "Equipe especializada"] },
    { icon: <Sparkles className="text-rose-600" size={28} />, title: "Debutantes", description: "Festa de 15 anos dos sonhos com elegância e sofisticação únicos.", features: ["Mesa temática", "Doces artísticos", "Montagem instagramável", "Ilhas ao vivo"] },
    { icon: <GraduationCap className="text-red-600" size={28} />, title: "Formaturas", description: "Celebre essa conquista com um evento à altura do momento.", features: ["Banquete completo", "Cerimônia de brinde", "Cardápio sofisticado", "Organização impecável"] }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">Especialistas em eventos sociais: casamentos, debutantes, formaturas e aniversários elegantes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-6 rounded-xl border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
                <div className="space-y-2">
                  {s.features.map((f, fi) => (
                    <div key={fi} className="flex items-center space-x-2">
                      <Check className="text-green-600 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
