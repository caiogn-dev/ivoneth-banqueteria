"use client";
import React, { useState } from "react";
import { Download, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { id: 1, src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg", alt: "Mesa de casamento elegante", category: "Casamentos" },
    { id: 2, src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg", alt: "Mesa de doces para debutante", category: "Debutantes" },
    { id: 4, src: "https://images.pexels.com/photos/2072118/pexels-photo-2072118.jpeg", alt: "Banquete de formatura", category: "Formaturas" },
    { id: 6, src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg", alt: "Mesa de aniversário", category: "Aniversários" }
  ];

  const menuDownloads = [
    { title: "Cardápio Casamentos", description: "Menu completo para cerimônias e recepções", fileSize: "2.3 MB", type: "PDF" },
    { title: "Cardápio Debutantes", description: "Opções especiais para festa de 15 anos", fileSize: "1.8 MB", type: "PDF" },
    { title: "Cardápio Formaturas", description: "Estruturas e sugestões para formaturas", fileSize: "2.1 MB", type: "PDF" }
  ];

  const openLightbox = (image: any, index: number) => { setSelectedImage(image); setCurrentImageIndex(index); };
  const closeLightbox = () => setSelectedImage(null);
  const navigateImage = (direction: "next" | "prev") => {
    const newIndex = direction === "next" ? (currentImageIndex + 1) % galleryImages.length : (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Galeria & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-600">Cardápios</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">Veja nossos trabalhos e baixe nossos cardápios sociais.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Gallery */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Nossos Trabalhos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div key={image.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer" onClick={() => openLightbox(image, index)}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white rounded-full p-3 shadow-lg"><Eye className="text-rose-700" size={24} /></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-rose-700">{image.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Downloads */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Baixar Cardápios</h3>
            <div className="space-y-4">
              {menuDownloads.map((menu, index) => (
                <div key={index} className="bg-gradient-to-r from-rose-50 to-red-50 border border-rose-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-rose-700 transition-colors">{menu.title}</h4>
                      <p className="text-gray-600 text-sm">{menu.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{menu.type}</span><span>•</span><span>{menu.fileSize}</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-full p-3 shadow-sm group-hover:shadow-md group-hover:bg-rose-700 group-hover:text-white transition-all duration-300">
                      <Download size={20} />
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-gradient-to-r from-rose-700 to-red-600 rounded-xl p-6 text-white mt-6">
                <h4 className="text-lg font-bold mb-2">Quer algo personalizado?</h4>
                <p className="text-rose-100 mb-4 text-sm">Criamos cardápios exclusivos conforme suas preferências.</p>
                <a href="#cta" className="bg-white text-rose-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">Solicitar Cardápio</a>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button onClick={closeLightbox} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"><X size={32} /></button>
              <button onClick={() => navigateImage("prev")} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"><ChevronLeft size={24} /></button>
              <button onClick={() => navigateImage("next")} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"><ChevronRight size={24} /></button>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-gray-900 font-semibold">{selectedImage.category}</p>
                <p className="text-gray-600 text-sm">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Gallery;
