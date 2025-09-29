import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Proofs from "./components/Proofs";
import Chef from "./components/Chef";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ComoFunciona from "./components/ComoFunciona";
import Menu from "./components/Menu";

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
        <FAQ />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
