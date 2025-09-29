export default function Proofs() {
  return (
    <section id="provas" className="section bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Marcas que já saborearam nossos serviços</h2>

        {/* Logos */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
          {["logo1.svg","logo2.svg","logo3.svg","logo4.svg"].map((l) => (
            <div key={l} className="card p-4 h-20 grid place-items-center text-gray-500">Logo</div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <figure className="card p-6">
            <p className="text-gray-700">“Treinamento para 120 pessoas. Equipe chegou 70 min antes, tudo quente no horário.”</p>
            <figcaption className="mt-3 text-sm text-gray-500">— Maria, RH</figcaption>
          </figure>
          <figure className="card p-6">
            <p className="text-gray-700">“Coffee de três pausas durante congresso. Reposição constante e equipe proativa.”</p>
            <figcaption className="mt-3 text-sm text-gray-500">— Rodrigo, Eventos</figcaption>
          </figure>
          <figure className="card p-6">
            <p className="text-gray-700">“Almoço executivo para diretoria. Discrição, serviço impecável e apresentação caprichada.”</p>
            <figcaption className="mt-3 text-sm text-gray-500">— Aline, Compras</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
