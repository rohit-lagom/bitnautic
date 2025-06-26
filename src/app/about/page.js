import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import Mission from "./Mission";
import Team from "./Team";
import Values from "./Values";

export default function About() {
  return (
    <section className="relative min-h-screen overflow-x-clip">
      <Header/>  
      <Hero/>    
      <Mission/> 
      <Values/>
      <Team/> 
      <Footer/>
    </section>
  );
}
