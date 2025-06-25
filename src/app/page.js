import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from './home/Hero';
const Home = () => {
  return (
          <main id='home' className="relative min-h-screen ">
      <Header />
      <Hero/>
      <Footer />
      </main>
  )
}

export default Home;