"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      // TODO: enviar para seu endpoint /api/lead (implemente quando quiser)
      // await fetch("/api/lead", { method: "POST", body: fd });
      alert("Enviado! Entraremos em contato :)");
      e.currentTarget.reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="form" className="section bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Solicite seu orçamento</h2>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input name="nome" placeholder="Seu nome" required />
            <Input name="email" type="email" placeholder="Seu e-mail" required />
          </div>
          <Input name="telefone" placeholder="Telefone/WhatsApp" />
          <div className="grid md:grid-cols-2 gap-4">
            <Input name="data" type="date" placeholder="Data do evento" />
            <Input name="convidados" type="number" min={1} placeholder="Nº de convidados" />
          </div>
          <Textarea name="mensagem" placeholder="Conte-nos sobre o evento" rows={5} />

          <div className="mt-2 flex justify-center">
            <Button variant="brand" size="lg" disabled={loading} type="submit">
              {loading ? "Enviando..." : "Receber orçamento em 24h"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
