import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="cta" className="section bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Pronto para o seu próximo evento?</h2>
        <p className="text-gray-600 mt-2">Conte com uma equipe especialista para atender com pontualidade, apresentação impecável e sabor inesquecível.</p>
        <div className="mt-6">
          <Link href="#form" className="btn btn-primary">Solicitar orçamento agora</Link>
        </div>
      </div>
    </section>
  );
}
