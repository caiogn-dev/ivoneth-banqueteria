// src/components/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="#hero" className="flex items-center gap-2" aria-label="Ir para o topo">
            <div className="size-10 rounded-lg overflow-hidden">
              <Image src="/icon.png" alt="Ivoneth Banqueteria" width={40} height={40} className="object-contain size-10" priority />
            </div>
            <span className="text-xl font-bold text-gray-900">Ivoneth Banqueteria</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-link">Inicio</Link>
            <Link href="/galeria" className="nav-link">Galeria</Link>
            <Link href="/contato" className="nav-link">Contato</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600" aria-label="Telefone para contato">
              <Phone size={16} /><span>(63) 3217-4500</span>
            </div>
            <Link href="#cta" className="btn btn-primary">Orçamento 24h</Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col gap-4">
              <Link href="#servicos" onClick={() => setOpen(false)} className="nav-link">Serviços</Link>
              <Link href="#como-funciona" onClick={() => setOpen(false)} className="nav-link">Como funciona</Link>
              <Link href="/galeria" onClick={() => setOpen(false)} className="nav-link">Galeria</Link>
              <Link href="/contato" onClick={() => setOpen(false)} className="nav-link">Contato</Link>
              <Link href="#cta" onClick={() => setOpen(false)} className="btn btn-primary text-center">Solicitar Orçamento</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
