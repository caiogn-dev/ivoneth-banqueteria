// src/components/sections/LeadForm/LeadForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Supondo que você tenha um Textarea
import Reveal from "@/components/core/Reveal";

// Componente Select simples se você não estiver usando um de uma biblioteca UI
const Select = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" {...props}>
    {children}
  </select>
);


export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [showOtherField, setShowOtherField] = useState(false);

  // ✅ FUNÇÃO ATUALIZADA PARA ENVIAR JSON
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    // Mapeia os nomes dos campos para o que a API espera (ex: nome_contato -> nome)
    const payload = {
      nome: formObject.nome_contato,
      empresa: formObject.empresa,
      whatsapp: formObject.whatsapp,
      tipoEvento: formObject.tipo_evento,
      qtdPessoas: formObject.qtd_pessoas,
      outroEvento: formObject.outro_evento,
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha no envio do formulário.');
      }

      window.location.href = "/obrigado";
      
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao enviar seu pedido. Por favor, tente novamente ou entre em contato via WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="form" className="py-20 md:py-28 bg-rose-50/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold select-none">Solicite seu orçamento personalizado</h2>
              <p className="mt-2 text-gray-600">Estamos prontos para atender seu evento com excelência.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="mt-8 grid gap-4 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border">
            <div className="grid md:grid-cols-2 gap-4">
              <Input name="nome_contato" placeholder="Seu nome*" required />
              <Input name="empresa" placeholder="Nome da empresa*" required />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Select 
                name="tipo_evento" 
                required 
                onChange={(e) => setShowOtherField(e.target.value === 'outro')}
              >
                <option value="">Tipo de evento*</option>
                <option value="confraternizacao">Confraternização</option>
                <option value="casamento">Casamento</option>
                <option value="aniversario">Aniversário</option>
                <option value="formatura">Formatura</option>
                <option value="lancamento">Lançamento de produto</option>
                <option value="congresso">Congresso/Simpósio</option>
                <option value="outro">Outro</option>
              </Select>
              
              <Input name="qtd_pessoas" type="number" placeholder="Nº de convidados*" required />
            </div>
            
            {showOtherField && (
              <Reveal>
                <Input name="outro_evento" placeholder="Qual o tipo de evento?" required />
              </Reveal>
            )}
            
            <Input name="whatsapp" type="tel" placeholder="Seu WhatsApp* (DD) 9XXXX-XXXX" required />

            <Textarea name="observacoes" placeholder="Observações (opcional)" />

            <div className="mt-4 flex flex-col items-center justify-center text-center">
              <Button variant="brand" size="lg" disabled={loading} type="submit" className="w-full sm:w-auto">
                {loading ? "Enviando..." : "Receber orçamento agora"}
              </Button>
              <p className="mt-2 text-xs text-gray-500 select-none">
                Retornamos em até 30 min em horário comercial.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}