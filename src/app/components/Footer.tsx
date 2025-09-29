import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-700 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Ivoneth Banqueteria</h3>
                <div className="flex items-center space-x-2">
                  <Award size={16} className="text-rose-300" />
                  <span className="text-sm text-gray-400">ISO 9001 Certificado</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Há mais de 15 anos transformando momentos especiais em experiências inesquecíveis.
            </p>
            <div>
              <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-rose-700 p-3 rounded-lg transition-colors"><Instagram size={20} /></a>
                <a href="#" className="bg-gray-800 hover:bg-rose-700 p-3 rounded-lg transition-colors"><Facebook size={20} /></a>
                <a href="#" className="bg-gray-800 hover:bg-rose-700 p-3 rounded-lg transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3"><MapPin className="text-rose-300 mt-1" size={18} /><div><p className="text-gray-300">Quadra 104 Sul, Alameda 5, Lote 15</p><p className="text-gray-300">Plano Diretor Sul</p><p className="text-gray-300">Palmas - TO, 77015-032</p></div></div>
              <div className="flex items-center space-x-3"><Phone className="text-rose-300" size={18} /><div><p className="text-gray-300">(63) 3217-4500</p><p className="text-gray-300">(63) 99932-1745</p></div></div>
              <div className="flex items-center space-x-3"><Mail className="text-rose-300" size={18} /><p className="text-gray-300">contato@ivonetbbq.com.br</p></div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Horário de Atendimento</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3"><Clock className="text-rose-300" size={18} /><div><p className="text-gray-300">Segunda a Sexta</p><p className="text-gray-300">8:00 às 18:00</p></div></div>
              <div className="flex items-center space-x-3"><Clock className="text-rose-300" size={18} /><div><p className="text-gray-300">Sábado</p><p className="text-gray-300">8:00 às 12:00</p></div></div>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Serviços Sociais</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Casamentos</li>
                <li>• Debutantes e aniversários</li>
                <li>• Formaturas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2025 Ivoneth Banqueteria. Todos os direitos reservados.</div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Serviço</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LGPD</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
