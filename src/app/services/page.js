import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import Solutions from "./Solutions";
import Documents from "./Documents";
import Benefits from "./Benefits";
import Dashboard from "./Dashboard";
import CTA from "./CTA";

export default function Services() {
  return (
    <section className="relative min-h-screen ">
      <Header />
      <Hero />
      <Solutions/>
      <Documents/>
      <Benefits/>
      <Dashboard/>
      <CTA/>
      <Footer />
    </section>
  );
}

