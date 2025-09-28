"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="#hero" aria-label="Ir para o topo" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-700 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 block">Ivoneth Banqueteria</span>
              <span className="text-xs text-gray-600">ISO 9001 Certificado</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#portfolio" className="nav-link">Portfólio</Link>
            <Link href="#services" className="nav-link">Serviços</Link>
            <Link href="#process" className="nav-link">Como Funciona</Link>
            <Link href="#faq" className="nav-link">FAQ</Link>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600" aria-label="Telefone para contato">
              <Phone size={16} />
              <span>(63) 3217-4500</span>
            </div>
            {/* use Link estilizado como botão (evita <a> dentro de <button>) */}
            <Link href="#cta" className="btn btn-primary" aria-label="Solicitar orçamento em 24 horas">
              Orçamento 24h
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="#portfolio" onClick={closeMenu} className="nav-link">Portfólio</Link>
              <Link href="#services" onClick={closeMenu} className="nav-link">Serviços</Link>
              <Link href="#process" onClick={closeMenu} className="nav-link">Como Funciona</Link>
              <Link href="#faq" onClick={closeMenu} className="nav-link">FAQ</Link>

              <div className="pt-4 border-t border-gray-100">
                <Link href="#cta" onClick={closeMenu} className="w-full btn btn-primary text-center">
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
