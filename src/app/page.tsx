import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      {/* Banner temporário pra testar o Tailwind */}
      <div className="p-3 bg-rose-700 text-white">Tailwind ON</div>

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <ValueProposition />
        <Portfolio />
        <Process />
        <Gallery />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}
