import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from './home/Hero';
import Stats from './home/Stats';
const Home = () => {
  return (
          <main id='home' className="relative min-h-screen ">
      <Header />
      <Hero/>
      <Stats/>
      <Footer />
      </main>
  )
}

export default Home;