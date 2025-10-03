// src/components/sections/FAQ/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/core/Reveal";

const faqItems = [
    {
        value: "item-1",
        question: "Em quais regiões vocês atendem?",
        answer: "Atendemos principalmente em Palmas e cidades próximas no Tocantins. Para eventos em outras localidades, por favor, consulte nossa disponibilidade."
    },
    {
        value: "item-2",
        question: "Qual o número mínimo de pessoas para um evento?",
        answer: "Nossos pacotes são projetados para eventos a partir de 20 pessoas. Para eventos menores, entre em contato para avaliarmos as condições."
    },
    {
        value: "item-3",
        question: "Com quanto tempo de antecedência preciso solicitar o orçamento?",
        answer: "Recomendamos o máximo de antecedência possível. Em geral, um prazo de 72 horas nos permite garantir a disponibilidade e a personalização completa do cardápio."
    },
    {
        value: "item-4",
        question: "Vocês emitem Nota Fiscal Eletrônica (NF-e)?",
        answer: "Sim, emitimos NF-e com todos os dados da sua empresa, facilitando os processos para os departamentos de Compras e Financeiro."
    },
    {
        value: "item-5",
        question: "Há opções para restrições alimentares?",
        answer: "Com certeza. No momento do briefing, informe-nos sobre quaisquer necessidades especiais (vegano, sem glúten, sem lactose, etc.) e nossa chef irá adaptar o cardápio."
    },
    {
        value: "item-6",
        question: "A equipe cuida da montagem e da limpeza?",
        answer: "Sim, nosso serviço é completo. Nossa equipe chega antes para montar toda a estrutura, serve durante o evento e organiza o espaço utilizado ao final."
    }
]

export default function FAQ() {
  return (
    <section id="faq" className="section section-anchor bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-center select-none">
                Dúvidas Frequentes
            </h2>
        </Reveal>

        <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-8 w-full">
            {faqItems.map(item => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-left text-lg hover:no-underline">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-600">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </Reveal>
      </div>
    </section>
  );
}