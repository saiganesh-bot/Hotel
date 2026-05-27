import { useScroll, useSpring, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DailySpecials from './components/DailySpecials';
import MustTry from './components/MustTry';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import RestaurantInfo from './components/RestaurantInfo';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 35,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white relative selection:bg-gold-light/40 selection:text-royal-red">
      
      {/* 1. Elegant Loading Preloader Screen */}
      <LoadingScreen />

      {/* 2. Top Scroll Progress Indicator */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* 3. Sticky Header / Navbar */}
      <Navbar />

      {/* Main Single Page Layout Sections */}
      <main className="w-full flex flex-col">
        
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Daily Specials Section */}
        <DailySpecials />

        {/* Must Try Signature Items Section */}
        <MustTry />

        {/* Detailed Category Menu Section */}
        <Menu />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Staggered Masonry Gallery Section */}
        <Gallery />

        {/* Contact, Timings and Google Maps Section */}
        <RestaurantInfo />

      </main>

      {/* 4. Luxury Minimal Footer */}
      <Footer />
    </div>
  );
}
