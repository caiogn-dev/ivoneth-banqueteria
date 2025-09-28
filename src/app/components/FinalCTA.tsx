"use client";
import React, { useState } from "react";
import { Calendar, Users, MapPin, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react";

const FinalCTA = () => {
  const [formData, setFormData] = useState({ name:"", phone:"", email:"", eventType:"", eventDate:"", guestCount:"", location:"", budget:"", message:"", consent:false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitted(true); setTimeout(() => setIsSubmitted(false), 5000); };
  const handleWhatsApp = () => {
    const message = `Olá! Sou ${formData.name || "[NOME]"}. Meu evento é ${formData.eventType || "[TIPO DE EVENTO]"} em ${formData.eventDate || "[DATA]"} para aprox. ${formData.guestCount || "[Nº]"} convidados. Quero orçamento.`;
    window.open(`https://wa.me/5563932174500?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-rose-700 to-red-600" id="cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recebemos sua solicitação!</h2>
            <p className="text-xl text-gray-600 mb-8">Em até 24h enviaremos sua proposta personalizada.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsSubmitted(false)} className="border-2 border-rose-700 text-rose-700 px-8 py-3 rounded-lg hover:bg-rose-50 transition-colors font-semibold">
                Fazer Nova Solicitação
              </button>
              <button onClick={handleWhatsApp} className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold flex items-center justify-center space-x-2">
                <MessageCircle size={20} /><span>WhatsApp Agora</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-rose-700 to-red-600 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar size={16} /><span className="text-sm font-semibold">Reserve sua data hoje</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Garanta seu evento <span className="block">dos sonhos</span></h2>
              <p className="text-xl text-rose-100 leading-relaxed">As melhores datas se esgotam rápido. Solicite seu orçamento agora.</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-rose-100">Datas disponíveis no mês:</span>
                  <span className="text-white font-bold">Poucas</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2"><div className="bg-yellow-400 h-2 rounded-full" style={{ width: "25%" }} /></div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-center"><div className="text-2xl font-bold text-white">24h</div><div className="text-sm text-rose-100">Resposta</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-white">15+</div><div className="text-sm text-rose-100">Anos</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-white">98%</div><div className="text-sm text-rose-100">Satisfação</div></div>
              </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white mb-4">Ou entre em contato:</h3>
              <div className="flex items-center space-x-3"><Phone className="text-rose-100" size={20} /><span className="text-white">(63) 3217-4500</span></div>
              <div className="flex items-center space-x-3"><Mail className="text-rose-100" size={20} /><span className="text-white">contato@ivonetbbq.com.br</span></div>
              <div className="flex items-center space-x-3"><MapPin className="text-rose-100" size={20} /><span className="text-white">Quadra 104 Sul, Palmas-TO</span></div>
            </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicite Seu Orçamento</h3>
              <p className="text-gray-600">Preencha os dados e receba uma proposta em 24h</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nome completo *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-colors" placeholder="(63) 99999-9999" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-colors" placeholder="seu@email.com" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de evento *</label>
                  <select required value={formData.eventType} onChange={(e) => setFormData({ ...formData, eventType: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-colors">
                    <option value="">Selecione</option>
                    <option value="Casamento">Casamento</option>
                    <option value="Debutante">Debutante (15 anos)</option>
                    <option value="Formatura">Formatura</option>
                    <option value="Aniversário">Aniversário</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Data do evento *</label>
                  <input type="date" required value={formData.eventDate} onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Número de convidados *</label>
                  <select required value={formData.guestCount} onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-colors">
                    <option value="">Selecione</option>
                    <option value="20-50">20 a 50</option>
                    <option value="50-100">50 a 100</option>
                    <option value="100-200">100 a 200</option>
                    <option value="200-500">200 a 500</option>
                    <option value="500+">Mais de 500</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Orçamento estimado</label>
                  <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-colors">
                    <option value="">Selecione (opcional)</option>
                    <option value="Até R$ 5.000">Até R$ 5.000</option>
                    <option value="R$ 5.000 - R$ 15.000">R$ 5.000 - R$ 15.000</option>
                    <option value="R$ 15.000 - R$ 30.000">R$ 15.000 - R$ 30.000</option>
                    <option value="R$ 30.000 - R$ 50.000">R$ 30.000 - R$ 50.000</option>
                    <option value="Acima de R$ 50.000">Acima de R$ 50.000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem adicional</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-colors resize-none" placeholder="Conte-nos mais sobre sua visão..." />
              </div>

              <div className="flex items-start space-x-3">
                <input type="checkbox" id="consent" required checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} className="mt-0.5 h-4 w-4 text-rose-700 border-gray-300 rounded focus:ring-rose-600" />
                <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  Concordo com o uso dos meus dados para contato conforme a <a href="#" className="text-rose-700 hover:underline">Política de Privacidade</a>.
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="flex-1 bg-gradient-to-r from-rose-700 to-red-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg">
                  Solicitar Orçamento Grátis
                </button>
                <button type="button" onClick={handleWhatsApp} className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold">
                  <MessageCircle size={20} /><span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
export default FinalCTA;
