import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import About from "./About";
import DocsList from "./DocsList";
import Features from "./Features";

export default function Docs() {
  return (
    <section className="relative min-h-screen ">
      <Header />
      <Hero />
      <About/>
      <DocsList/>
      <Features/>
      <Footer />
    </section>
  );
}

