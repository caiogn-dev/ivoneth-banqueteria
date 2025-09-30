// src/components/sections/LeadForm/LeadForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select"; // Certifique-se de que este componente exista
import Reveal from "@/components/core/Reveal";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [showOtherField, setShowOtherField] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    // O formulário não pede nome do contato, então usamos o nome da empresa como fallback para a notificação
    const nomeContato = formData.get('nome_contato') as string || formData.get('empresa') as string;
    formData.append('nome', nomeContato);


    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        // Se a API retornar um erro, nós o capturamos aqui
        const errorData = await response.json();
        throw new Error(errorData.error || 'Falha no envio do formulário.');
      }

      // Redireciona para a página de "obrigado" em caso de sucesso
      window.location.href = "/obrigado";
      
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao enviar seu pedido. Por favor, tente novamente ou entre em contato via WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="form" className="section-anchor section-lg bg-rose-50/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold select-none">Solicite seu orçamento personalizado</h2>
              <p className="mt-2 text-gray-600">Estamos prontos para atender seu evento corporativo com excelência.</p>
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
                    <option value="reuniao">Reunião</option>
                    <option value="treinamento">Treinamento</option>
                    <option value="lancamento">Lançamento de produto</option>
                    <option value="congresso">Congresso/Simpósio</option>
                    <option value="outro">Outro</option>
                    </Select>
                    
                    <Select name="qtd_pessoas" required>
                    <option value="">Quantidade de pessoas*</option>
                    <option value="20-50">20-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-200">101-200</option>
                    <option value="201-300">201-300</option>
                    <option value="300+">300+</option>
                    </Select>
                </div>
                
                {showOtherField && (
                    <Reveal>
                        <Input name="outro_evento" placeholder="Qual o tipo de evento?" required />
                    </Reveal>
                )}
                
                <Input name="whatsapp" type="tel" placeholder="Seu WhatsApp* (DD) 9XXXX-XXXX" required />

                <div className="mt-4 flex flex-col items-center justify-center text-center">
                    <Button variant="brand" size="lg" disabled={loading} type="submit" className="w-full sm:w-auto">
                    {loading ? "Enviando..." : "Receber orçamento agora"}
                    </Button>
                    <p className="mt-2 text-xs text-gray-500 select-none">
                        Retornamos em até 30 min úteis.
                    </p>
                </div>
            </form>
        </Reveal>
      </div>
    </section>
  );
}