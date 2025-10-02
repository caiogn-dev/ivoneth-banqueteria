// src/components/emails/LeadNotificationEmail.tsx
import * as React from "react";

interface LeadNotificationEmailProps {
  nome: string;
  empresa: string;
  whatsapp: string;
  tipoEvento: string;
  qtdPessoas: string;
  outroEvento?: string;
}

const LeadNotificationEmail: React.FC<
  Readonly<LeadNotificationEmailProps>
> = ({ nome, empresa, whatsapp, tipoEvento, qtdPessoas, outroEvento }) => {
  const evento =
    tipoEvento === "outro" && outroEvento
      ? `Outro (${outroEvento})`
      : tipoEvento;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
        }}
      >
        <h1
          style={{
            color: "#7f1d1d",
            borderBottom: "2px solid #7f1d1d",
            paddingBottom: "8px",
            marginBottom: "16px",
          }}
        >
          🚀 Novo Lead Recebido!
        </h1>

        <p style={{ fontSize: "16px", marginBottom: "24px", color: "#333" }}>
          Você recebeu um novo pedido de orçamento através da landing page:
        </p>

        <h2
          style={{
            color: "#444",
            marginBottom: "12px",
            fontSize: "18px",
          }}
        >
          Detalhes do Lead
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "15px",
            margin: 0,
          }}
        >
          <li
            style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}
          >
            <strong>Nome:</strong> {nome}
          </li>
          <li
            style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}
          >
            <strong>Empresa:</strong> {empresa}
          </li>
          <li
            style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}
          >
            <strong>WhatsApp:</strong> {whatsapp}
          </li>
          <li
            style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}
          >
            <strong>Tipo de Evento:</strong> {evento}
          </li>
          <li style={{ padding: "8px 0" }}>
            <strong>Nº de Pessoas:</strong> {qtdPessoas}
          </li>
        </ul>

        <p
          style={{
            marginTop: "24px",
            fontSize: "14px",
            color: "#666",
            lineHeight: "1.4",
          }}
        >
          ✅ Recomendação: entre em contato com este lead o mais rápido possível
          para aumentar suas chances de conversão.
        </p>
      </div>
    </div>
  );
};

export default LeadNotificationEmail;
