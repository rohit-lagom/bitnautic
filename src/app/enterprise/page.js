import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import Features from "./Features";
import Benefits from "./Benefits";
import Industries from "./Industries";
import CTA from "./CTA";

export default function Enterprise() {
  return (
    <section className="relative min-h-screen ">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Industries />
      <CTA />
      <Footer />
    </section>
  );
}

