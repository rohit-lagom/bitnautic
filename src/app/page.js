import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from './home/Hero';
import Stats from './home/Stats';
import Services from './home/Services';
import About from './home/About';
import Testimonials from './home/Testimonials';
const Home = () => {
  return (
      <main id='home' className="relative min-h-screen ">
       <Header />
       <Hero/>
       <Stats/>
       <Services/>
       <About/>
       <Testimonials/>
       <Footer />
      </main>
  )
}

export default Home;
