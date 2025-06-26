import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import Mission from "./Mission";
import Team from "./Team";

export default function About() {
  return (
    <section className="relative min-h-screen ">
      <Header/>  
      <Hero/>    
      <Mission/> 
      <Team/> 
      <Footer/>
    </section>
  );
}
