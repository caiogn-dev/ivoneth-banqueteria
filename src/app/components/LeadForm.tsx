"use client";
import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: enviar para sua API/endpoint (fetch)
    // await fetch("/api/lead", { method:"POST", body: new FormData(e.target as HTMLFormElement) })
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <section id="form" className="section bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Solicite seu orçamento personalizado</h2>
        <p className="text-gray-600 text-center mt-2">Estamos prontos para atender seu evento corporativo com excelência.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          {/* Tipo de evento */}
          <label className="text-sm font-medium">Tipo de evento *</label>
          <select className="input" required defaultValue="">
            <option value="" disabled>Selecione</option>
            <option>Convenção</option>
            <option>Confraternização</option>
            <option>Reunião</option>
            <option>Treinamento</option>
            <option>Workshop</option>
            <option>Palestra</option>
            <option>Lançamento de produto</option>
            <option>Coffee contínuo no escritório</option>
            <option>Congresso/Simpósio</option>
            <option>Outro</option>
          </select>

          {/* Qtd pessoas */}
          <label className="text-sm font-medium">Quantidade de pessoas *</label>
          <select className="input" required defaultValue="">
            <option value="" disabled>Selecione</option>
            <option>20–50</option>
            <option>51–100</option>
            <option>101–200</option>
            <option>201–300</option>
            <option>300+</option>
          </select>

          {/* Contato preferido + whatsapp */}
          <label className="text-sm font-medium">WhatsApp *</label>
          <input className="input" placeholder="(63) 9XXXX-XXXX" required />

          {/* Nome da empresa */}
          <label className="text-sm font-medium">Nome da empresa *</label>
          <input className="input" placeholder="Ex.: ACME Indústria" required />

          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? "Enviando..." : "Receber orçamento agora"}
          </button>
          <p className="text-center text-xs text-gray-500">Retornamos em até 30 min úteis.</p>
        </form>
      </div>
    </section>
  );
}
