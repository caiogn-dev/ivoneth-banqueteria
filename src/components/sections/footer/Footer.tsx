import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca + descrição */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/icon.png" alt="Ivoneth Banqueteria" width={36} height={36} />
              <span className="font-semibold text-lg">Ivoneth Banqueteria</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Experiências gastronômicas para casamentos e eventos sociais em Palmas-TO.
              Equipe completa, montagem no local e cardápio sob medida.
            </p>
            <Button variant="brand" asChild className="mt-5">
              <Link href="#form">Solicitar orçamento</Link>
            </Button>
          </div>

          {/* Links rápidos */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Mapa</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link className="nav-link" href="#hero">Início</Link></li>
                <li><Link className="nav-link" href="#process">Como funciona</Link></li>
                <li><Link className="nav-link" href="#services">Serviços</Link></li>
                <li><Link className="nav-link" href="#menu">Menu</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Mais</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link className="nav-link" href="#diferenciais">Diferenciais</Link></li>
                <li><Link className="nav-link" href="#provas">Provas sociais</Link></li>
                <li><Link className="nav-link" href="#faq">FAQ</Link></li>
                <li><Link className="nav-link" href="#form">Contato</Link></li>
              </ul>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-gray-900">Contato</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Palmas - TO</li>
              <li><a className="nav-link" href="tel:+5563984251719">(63) 98425-1719</a></li>
              <li><a className="nav-link" href="mailto:contato@ivonethbanqueteria.com.br">chef@ivonethbanqueteria.com.br</a></li>
              <li><a className="nav-link" href="https://instagram.com/ivoneth_banqueteria.of" target="_blank">Instagram</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ivoneth Banqueteria. Todos os direitos reservados.</p>
          <p>Site por Ivoneth Banqueteria</p>
        </div>
      </div>
    </footer>
  );
}
