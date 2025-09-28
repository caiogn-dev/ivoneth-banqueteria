"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));
  const toggleItem = (i: number) => {
    const s = new Set(openItems);
    s.has(i) ? s.delete(i) : s.add(i);
    setOpenItems(s);
  };

  const faqs = [
    { question: "Qual a capacidade máxima?", answer: "Atendemos de 20 a 2000 convidados, com estrutura escalável para casamentos, debutantes, aniversários e formaturas." },
    { question: "Com quanto tempo de antecedência reservar?", answer: "Para casamentos em alta temporada, sugerimos 4–6 meses. Em geral, 60 dias já funcionam bem." },
    { question: "Atendem fora de Palmas?", answer: "Sim, atendemos região metropolitana e cidades próximas. Fazemos avaliação logística para deslocamentos." },
    { question: "Como é o pagamento?", answer: "Entrada de 30% no contrato, 40% até 30 dias antes e 30% no dia. PIX, transferência e cartão." },
    { question: "A degustação é gratuita?", answer: "Sim! Agendamos em nossa sede em horário comercial." },
    { question: "Vocês fornecem decoração?", answer: "Focamos na gastronomia e serviço; indicamos decoradores e cerimoniais parceiros." },
    { question: "E mudanças de convidados?", answer: "Ajustes de até 10% até 7 dias antes sem custo adicional." },
    { question: "Opções vegetarianas/veganas?", answer: "Temos diversas opções e atendemos restrições/algumas alergias com aviso prévio." },
    { question: "O que está incluso no 360°?", answer: "Planejamento, equipe completa, louças premium, montagem, coordenação e limpeza pós-evento." },
    { question: "Têm licenças e seguro?", answer: "Sim. Empresa regularizada, ISO 9001, alvará sanitário e seguro de responsabilidade civil." }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços sociais.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-rose-200 transition-colors">
              <button onClick={() => toggleItem(index)} className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:bg-gray-50 transition-colors flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-rose-700 to-red-600 rounded-full flex items-center justify-center">
                  {openItems.has(index) ? <Minus className="text-white" size={16} /> : <Plus className="text-white" size={16} />}
                </div>
              </button>
              {openItems.has(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl p-8 border border-rose-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ainda tem dúvidas?</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Fale com nossa equipe e planeje seu evento perfeito.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#cta" className="bg-gradient-to-r from-rose-700 to-red-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold">
                Falar com Especialista
              </a>
              <a href="#cta" className="border-2 border-rose-700 text-rose-700 px-8 py-4 rounded-lg hover:bg-rose-50 transition-colors font-semibold">
                Agendar Ligação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
