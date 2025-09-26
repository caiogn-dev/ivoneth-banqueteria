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
  );
}
