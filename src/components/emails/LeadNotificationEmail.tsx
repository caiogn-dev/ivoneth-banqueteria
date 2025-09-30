// src/components/emails/LeadNotificationEmail.tsx
import * as React from 'react';

interface LeadNotificationEmailProps {
  nome: string;
  empresa: string;
  whatsapp: string;
  tipoEvento: string;
  qtdPessoas: string;
  outroEvento?: string;
}

export const LeadNotificationEmail: React.FC<Readonly<LeadNotificationEmailProps>> = ({
  nome,
  empresa,
  whatsapp,
  tipoEvento,
  qtdPessoas,
  outroEvento,
}) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f9f9f9' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '10px', border: '1px solid #ddd' }}>
      <h1 style={{ color: '#7f1d1d', borderBottom: '2px solid #7f1d1d', paddingBottom: '10px' }}>
        🚀 Novo Lead do Site!
      </h1>
      <p style={{ fontSize: '16px' }}>Você recebeu um novo pedido de orçamento através da landing page.</p>
      
      <h2 style={{ color: '#333', marginTop: '30px', fontSize: '18px' }}>Detalhes do Lead:</h2>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px' }}>
        <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}><strong>Nome:</strong> {nome}</li>
        <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}><strong>Empresa:</strong> {empresa}</li>
        <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}><strong>WhatsApp:</strong> {whatsapp}</li>
        <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}><strong>Tipo de Evento:</strong> {tipoEvento === 'outro' && outroEvento ? `Outro (${outroEvento})` : tipoEvento}</li>
        <li style={{ padding: '8px 0' }}><strong>Nº de Pessoas:</strong> {qtdPessoas}</li>
      </ul>

      <p style={{ marginTop: '30px', fontSize: '14px', color: '#888' }}>
        Por favor, entre em contato o mais rápido possível.
      </p>
    </div>
  </div>
);