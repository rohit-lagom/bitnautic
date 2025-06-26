import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import Advantages from "./Advantages";
import Features from "./Features";
import LiveShippingLeads from "./LiveShippingLeads";
import FAQ from "./FAQ";
import CTA from "./CTA";
export default function Transport() {
  return (
    <section className="relative min-h-screen ">
             <Header/>  
  <Hero/>
  <Advantages/>
  <Features/>
  <LiveShippingLeads/>
  <FAQ/>
  <CTA/>
<Footer/>
    </section>
  );
}


