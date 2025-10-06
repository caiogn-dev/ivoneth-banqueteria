// app/page.tsx
export const dynamic = "error";
export const revalidate = 3600;

import NextDynamic from "next/dynamic";
import Header from "@/components/sections/header/Header";
import Footer from "@/components/sections/footer/Footer";

// Hero fica síncrona (LCP normalmente está aqui)
import Hero from "@/components/sections/hero/Hero";

// Seções abaixo da dobra com dynamic (SSR mantido; hydration adiada)
const ComoFunciona   = NextDynamic(() => import("@/components/sections/comofunciona/ComoFunciona"));
const Services       = NextDynamic(() => import("@/components/sections/services/Services"));
const Menu           = NextDynamic(() => import("@/components/sections/menu/Menu"));
const Differentials  = NextDynamic(() => import("@/components/sections/differentials/Differentials"));
const Proofs         = NextDynamic(() => import("@/components/sections/proofs/Proofs"));
const Chef           = NextDynamic(() => import("@/components/sections/chef/Chef"));
const Gallery        = NextDynamic(() => import("@/components/sections/gallery/Gallery"));
const FAQ            = NextDynamic(() => import("@/components/sections/FAQ/FAQ"));
const LeadForm       = NextDynamic(() => import("@/components/sections/LeadForm/LeadForm"));
const FinalCTA       = NextDynamic(() => import("@/components/sections/FinalCTA/FinalCTA"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 🔵 A dobra: pinte a Hero cedo — use priority/sizes/placeholder dentro do componente */}
        <Hero />

        {/* 🔶 Abaixo da dobra: carregam em paralelo, hidratam depois */}
        <ComoFunciona />
        <Chef />
        <Services />
        <Menu />
        <Differentials />
        <Proofs />
        <FAQ />
        <FinalCTA />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
