// app/page.tsx
import Header from "@/components/sections/header/Header";
import Footer from "@/components/sections/footer/Footer";

// sections
import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import Differentials from "@/components/sections/differentials/Differentials";
import Menu from "@/components/sections/menu/Menu";

// se estes estiverem em outras pastas, ajuste os caminhos abaixo:
import ComoFunciona from "@/components/sections/comofunciona/ComoFunciona"; // ou crie /sections/comofunciona/ComoFunciona.tsx
import Proofs from "@/components/sections/proofs/Proofs";
import Chef from "@/components/sections/chef/Chef";
import FAQ from "@/components/sections/FAQ/FAQ";
import LeadForm from "@/components/sections/LeadForm/LeadForm";
import FinalCTA from "@/components/sections/FinalCTA/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative isolate z-0">
        <div className="relative isolate z-0"><Hero /></div>
        <div className="relative isolate z-0"><ComoFunciona /></div>

        {/* blocos com mídia de fundo ficam isolados */}
        <div className="relative isolate z-0"><Services /></div>

        <div className="relative isolate z-0"><Menu /></div>

        <div className="relative isolate z-0"><Differentials /></div>

        <div className="relative isolate z-0"><Proofs /></div>
        <div className="relative isolate z-0"><Chef /></div>
        <div className="relative isolate z-0"><FAQ /></div>
        <div className="relative isolate z-0"><LeadForm /></div>
        <div className="relative isolate z-0"><FinalCTA /></div>
      </main>
      <Footer />
    </>
  );
}
