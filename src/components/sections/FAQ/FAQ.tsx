"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="section bg-rose-50/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">FAQ</h2>

        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>Vocês atendem eventos corporativos de grande porte?</AccordionTrigger>
            <AccordionContent>
              Sim. Dimensionamos equipe e produção conforme o número de convidados, com logística e reposição contínua.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>É possível montar o buffet no local?</AccordionTrigger>
            <AccordionContent>
              Sim. Levamos a estrutura necessária e operamos de forma silenciosa para não interferir na rotina do local.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Emitimos NF-e e aceitamos pedidos via compras/financeiro?</AccordionTrigger>
            <AccordionContent>
              Sim. Processos simples, emissão de NF-e e toda a documentação necessária para compliance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
