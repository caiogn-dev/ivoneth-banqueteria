// src/app/api/leads/route.tsx
import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react";

// Se quiser garantir que rode em Node:
export const runtime = "nodejs";

// Inicializa o Resend com a API key do .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

interface LeadNotificationEmailProps {
  nome?: string;
  empresa?: string;
  whatsapp?: string;
  tipoEvento?: string;
  qtdPessoas?: number;
  outroEvento?: string;
}

// Componente de e-mail
const LeadNotificationEmail: React.FC<LeadNotificationEmailProps> = ({
  nome,
  empresa,
  whatsapp,
  tipoEvento,
  qtdPessoas,
  outroEvento,
}) => (
  <div>
    <h1>Novo Orçamento Solicitado</h1>
    <p><strong>Nome:</strong> {nome ?? "Não especificado"}</p>
    <p><strong>Empresa:</strong> {empresa ?? "Não especificado"}</p>
    <p><strong>WhatsApp:</strong> {whatsapp ?? "Não especificado"}</p>
    <p><strong>Tipo de Evento:</strong> {tipoEvento ?? "Não especificado"}</p>
    <p><strong>Quantidade de Pessoas:</strong> {qtdPessoas ?? 0}</p>
    <p><strong>Outro Evento:</strong> {outroEvento ?? "Nenhum"}</p>
  </div>
);

export async function POST(request: Request) {
  try {
    const { nome, empresa, whatsapp, tipoEvento, qtdPessoas, outroEvento } =
      await request.json();

    // Opcional: fallback de texto puro
    const textFallback =
      `Novo Orçamento Solicitado\n` +
      `Nome: ${nome ?? "Não especificado"}\n` +
      `Empresa: ${empresa ?? "Não especificado"}\n` +
      `WhatsApp: ${whatsapp ?? "Não especificado"}\n` +
      `Tipo de Evento: ${tipoEvento ?? "Não especificado"}\n` +
      `Quantidade de Pessoas: ${qtdPessoas ?? 0}\n` +
      `Outro Evento: ${outroEvento ?? "Nenhum"}`;

    const { data, error } = await resend.emails.send({
      from: "no-reply@ivonethbanqueteria.com.br", // precisa estar verificado no Resend
      to: ["ivonethfestas@gmail.com"],
      subject: `Novo Orçamento Solicitado por ${empresa ?? "Cliente"}`,
      react: (
        <LeadNotificationEmail
          nome={nome}
          empresa={empresa}
          whatsapp={whatsapp}
          tipoEvento={tipoEvento}
          qtdPessoas={qtdPessoas ?? 0}
          outroEvento={outroEvento ?? ""}
        />
      ),
      text: textFallback, // ajuda em clientes sem HTML
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
