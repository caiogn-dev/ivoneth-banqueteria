// src/app/api/leads/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { LeadNotificationEmail } from '@/components/emails/LeadNotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const nome = formData.get('nome') as string;
    const empresa = formData.get('empresa') as string;
    const whatsapp = formData.get('whatsapp') as string;
    const tipoEvento = formData.get('tipo_evento') as string;
    const qtdPessoas = formData.get('qtd_pessoas') as string;
    const outroEvento = formData.get('outro_evento') as string | undefined;

    if (!nome || !empresa || !whatsapp || !tipoEvento || !qtdPessoas) {
        return NextResponse.json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Site Ivoneth <contato@ivonethbanqueteria.com.br>', // Use o domínio que você verificar no Resend
      to: ['ivonethfestas@gmail.com'], // ✅ MUDE AQUI para o e-mail da sua equipe
      subject: `Novo Orçamento Solicitado por ${empresa}`,
      react: LeadNotificationEmail({ nome, empresa, whatsapp, tipoEvento, qtdPessoas, outroEvento }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email enviado com sucesso!', data });

  } catch (error) {
    return NextResponse.json({ error: 'Ocorreu um erro ao processar a solicitação.' }, { status: 500 });
  }
}