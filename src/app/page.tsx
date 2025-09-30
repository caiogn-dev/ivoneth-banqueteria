// app/page.tsx
import Header from "@/components/sections/header/Header";
import Footer from "@/components/sections/footer/Footer";

// Seções na ordem correta do briefing
import Hero from "@/components/sections/hero/Hero";
import ComoFunciona from "@/components/sections/comofunciona/ComoFunciona";
import Services from "@/components/sections/services/Services";
import Menu from "@/components/sections/menu/Menu";
import Differentials from "@/components/sections/differentials/Differentials";
import Proofs from "@/components/sections/proofs/Proofs";
import Chef from "@/components/sections/chef/Chef";
import Gallery from "@/components/sections/gallery/Gallery"; // Renomeado e agora em uso
import FAQ from "@/components/sections/FAQ/FAQ";
import LeadForm from "@/components/sections/LeadForm/LeadForm";
import FinalCTA from "@/components/sections/FinalCTA/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ComoFunciona />
        <Services />
        <Menu />
        <Differentials />
        <Proofs />
        <Chef />
        <Gallery />
        <FAQ />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}