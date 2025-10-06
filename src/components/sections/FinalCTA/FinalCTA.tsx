import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-clip"
      aria-label="Chamada final para orçamento"
    >
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/services.mp4"
          // opcional: troque pelo seu poster se tiver uma imagem estática
          poster="/hero.avif"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        {/* Overlay para legibilidade */}
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/40" aria-hidden />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 grid min-h-[60svh] place-items-center">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
            Leve uma experiência gastronômica impecável ao seu evento
          </h2>
          <p className="mt-3 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
            Equipe completa, montagem no local, apresentação caprichada e cardápio sob medida.
          </p>
          <div className="mt-6">
            <Button variant="brand" size="lg" asChild className="rounded-full shadow-md hover:shadow-lg">
              <a href="#form" aria-label="Solicitar orçamento">Solicitar orçamento</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
