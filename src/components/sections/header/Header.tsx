"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  // SheetClose é importado para uso dentro do SheetContent
  SheetClose, 
} from "@/components/ui/sheet"; 
import { Menu as MenuIcon, X } from "lucide-react";
import React, { useState } from "react";

const links: Array<[string, string]> = [
  ["Início", "#hero"],
  ["Como funciona", "#process"],
  ["Serviços", "#services"],
  ["Menu", "#menu"],
  ["FAQ", "#faq"],
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-white border-b border-border shadow-md"
      style={{ height: "var(--header-h)" }}
    >
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 flex items-center justify-between gap-3">
        
        {/* Logo/Marca */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/icon.png" 
            alt="Ivoneth Banqueteria" 
            width={36} 
            height={36} 
            priority={true} // Opcional: Priorizar o carregamento da logo
          />
          
          {/* 🔑 NOVIDADE: Adicionar o nome da marca à direita da logo */}
          <span 
            className="
              text-lg font-serif font-bold text-gray-800 tracking-tight 
              // Mostra apenas em mobile, esconde em desktop
              md:hidden lg:text-xl
            "
          >
            Ivoneth Banqueteria
          </span>
          
          <span className="sr-only">Ivoneth Banqueteria</span>
        </Link>

        {/* Desktop nav (sem alterações) */}
        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-5 lg:gap-6">
              {links.map(([label, href]) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild>
                    <Link 
                      className="nav-link text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors" 
                      href={href}
                    >
                      {label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Botão de Orçamento (Desktop) (sem alterações) */}
        <div className="hidden md:block">
          <Button variant="brand" asChild>
            <Link href="#form">Solicitar orçamento</Link>
          </Button>
        </div>

        {/* Mobile Sheet (Menu Hambúrguer) */}
        <div className="md:hidden flex items-center"> 
          {/* 🔑 AJUSTE CRUCIAL: Adicionar 'flex items-center' para centralizar verticalmente 
             o botão hambúrguer com o logo/marca */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Abrir menu"
                  className="rounded-full"
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            
            <SheetContent 
                side="left" 
                className="w-[80vw] sm:w-[50vw] p-4 bg-white" 
            > 
              <SheetHeader className="flex items-center justify-between border-b pb-4">
                <SheetTitle>Navegação</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 mt-4">
                {links.map(([label, href]) => (
                  <SheetClose key={href} asChild>
                    <Link 
                      href={href} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="
                        text-lg font-semibold text-gray-800 hover:text-brand-500 
                        p-3 rounded-lg transition-colors hover:bg-gray-50
                      "
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                    <Button 
                        variant="brand" 
                        asChild 
                        className="mt-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="#form">Solicitar orçamento</Link>
                    </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}