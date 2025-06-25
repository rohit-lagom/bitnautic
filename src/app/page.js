import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from './home/Hero';
import Stats from './home/Stats';
import Services from './home/Services';
const Home = () => {
  return (
          <main id='home' className="relative min-h-screen ">
      <Header />
      <Hero/>
      <Stats/>
      <Services/>
      <Footer />
      </main>
  )
}

export default Home;