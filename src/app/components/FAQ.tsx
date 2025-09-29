const faqs = [
  { q: "Atendem em quais regiões?", a: "Palmas e cidades próximas. Consulte disponibilidade para outras localidades." },
  { q: "Qual o mínimo de pessoas?", a: "A partir de 20 pessoas. Para eventos menores, consulte condições." },
  { q: "Antecedência ideal?", a: "Quanto antes, melhor. Em geral, 72h garantem disponibilidade e personalização." },
  { q: "Emitem NF-e?", a: "Sim, com dados completos da sua empresa." },
  { q: "Restrições alimentares?", a: "Sim. Informe no pedido (vegano, sem glúten, sem lactose etc.)." },
  { q: "Montagem e limpeza?", a: "Sim. Nossa equipe monta antes, atende durante e organiza o ponto ao final." },
];

export default function FAQ() {
  return (
    <section id="faq" className="section bg-rose-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Dúvidas frequentes</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="card p-5">
              <summary className="cursor-pointer font-semibold text-gray-900">{f.q}</summary>
              <p className="text-gray-600 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
