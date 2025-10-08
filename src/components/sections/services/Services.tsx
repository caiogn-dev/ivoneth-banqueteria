import { Button } from "@/components/ui/button";
import { Coffee, Martini, UtensilsCrossed, Users, Briefcase, Building2, PartyPopper, Cake } from "lucide-react";

export default function Services() {
  const items = [
    {
      icon: <Briefcase className="size-10 sm:size-12" />,
      title: "Feiras de negócios",
    },
    {
      icon: <Coffee className="size-10 sm:size-12" />,
      title: "Coffee break",
    },
    {
      icon: <UtensilsCrossed className="size-10 sm:size-12" />,
      title: "Buffet",
    },
    {
      icon: <Cake className="size-10 sm:size-12" />,
      title: "Brunch",
    },
    {
      icon: <Martini className="size-10 sm:size-12" />,
      title: "Coqueteis",
    },
    {
      icon: <PartyPopper className="size-10 sm:size-12" />,
      title: "Eventos corporativos",
    },
  ];

  return (
    <section id="services" className="section section-anchor relative overflow-hidden bg-rose-50">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(139 46 74) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
          Conheça nossos Serviços
        </h2>
        <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Atendemos eventos de todos os portes: <span className="text-[#8B2E4A] font-semibold">stands</span> em feiras de negócios, <span className="text-[#8B2E4A] font-semibold">congressos</span> e <span className="text-[#8B2E4A] font-semibold">confraternizações</span> empresariais.
        </p>

        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {items.map((item, i) => (
              <div
                key={item.title}
                className="group relative"
              >
                <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-white border border-rose-100 hover:border-[#8B2E4A]/30 hover:shadow-lg transition-all duration-300 hover:scale-105 min-h-[180px] sm:min-h-[200px]">
                  <div className="text-[#8B2E4A] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-14">
          <Button 
            variant="brand" 
            size="lg" 
            asChild 
            className="rounded-full shadow-md hover:shadow-lg"
          >
            <a href="#menu">Ver opções de cardápio</a>
          </Button>
        </div>
      </div>
    </section>
  );
}