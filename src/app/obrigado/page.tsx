// src/app/obrigado/page.tsx
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-rose-50/40 p-4 text-center">
      <div className="max-w-xl rounded-2xl bg-white p-8 sm:p-12 shadow-lg border">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-gray-900 select-none">
          Orçamento Solicitado!
        </h1>

        {/* ✅ AJUSTE AQUI: Trocado ** por <strong> */}
        <p className="mt-4 text-lg text-gray-600">
          Obrigado pelo seu interesse! Recebemos sua solicitação e nossa equipe entrará em contato pelo WhatsApp em até <br /><strong>30 minutos</strong>.
        </p>

        <div className="mt-8">
          <Button asChild>
            <Link href="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}