"use client";
import React from "react";
import Link from "next/link";
import { Star, Award, Users, MessageCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para meu evento social. Pode me ajudar?";
    window.open(`https://wa.me/5563932174500?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="hero" className="pt-20 pb-12 bg-gradient-to-br from-rose-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-rose-100">
              <Award className="text-rose-700" size={20} />
              <span className="text-sm font-semibold text-gray-800">Certificação ISO 9001</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Casamentos que encantam
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-600"> olhos e paladar</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Equipe certificada, menus autorais e o maior acervo de louças premium do Tocantins para o seu grande dia.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={16} />)}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.9 de 5 estrelas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-rose-700" size={16} />
                <span className="text-sm font-semibold text-gray-700">+1.200 eventos</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#cta" className="btn btn-primary">Solicitar Proposta Agora</Link>
              <button onClick={handleWhatsApp} className="btn btn-outline" aria-label="Abrir WhatsApp">
                <MessageCircle size={20} />
                <span>WhatsApp Direto</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Resposta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Anos</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-100 to-red-100">
              <Image
                src="/images/hero.jpg"
                alt="Mesa de casamento elegante com louças premium"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJy8+"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <div className="text-sm font-semibold text-gray-900">Maior acervo</div>
                <div className="text-xs text-gray-600">de louças do TO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
