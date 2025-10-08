// src/components/core/FloatingWhatsappButton.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa"; // Precisamos de um ícone do WhatsApp
import { motion } from "framer-motion";

// Instale a biblioteca de ícones: npm install react-icons

export default function FloatingWhatsappButton() {
  const whatsappNumber = "5563984251719"; // ✅ MUDE AQUI para o seu número com código do país e DDD
  const message = "Olá! Gostaria de solicitar um orçamento.";

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 grid h-16 w-16 place-items-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <FaWhatsapp size={32} />
    </motion.a>
  );
}