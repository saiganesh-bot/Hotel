import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Background Image with Parallax & Ken Burns Effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=1920&auto=format&fit=crop')` 
        }}
      />

      {/* Royal Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal/40"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-royal-red/20 via-transparent to-gold-gold/15"></div>

      {/* Decorative Gold Border Outline for a Frame Effect */}
      <div className="absolute inset-6 md:inset-10 border border-gold-gold/25 pointer-events-none z-10"></div>
      <div className="absolute inset-8 md:inset-12 border border-gold-gold/10 pointer-events-none z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-8 flex flex-col items-center">
        
        {/* Decorative Top Mandala Ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <svg className="w-12 h-12 text-gold-gold/80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x = 50 + 20 * Math.cos(angle);
              const y = 50 + 20 * Math.sin(angle);
              return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="currentColor" strokeWidth="0.5" />;
            })}
          </svg>
        </motion.div>

        {/* Elegant Cursive Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-cursive text-2xl md:text-3xl lg:text-4xl text-gold-light mb-4"
        >
          Authentic South Indian Pure Veg Experience
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-serif text-[2.35rem] sm:text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-wide leading-tight mb-6 uppercase"
        >
          <span className="whitespace-nowrap">Sri Raghavendra</span>
          <br />
          <span className="whitespace-nowrap font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-gold to-royal-orange">
            Udupi Hotel
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="w-40 h-[1.5px] bg-gradient-to-r from-transparent via-gold-gold to-transparent mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-sans text-xs md:text-sm text-stone-sand/80 uppercase tracking-[0.3em] font-semibold mb-10 max-w-2xl leading-relaxed"
        >
          Taste the rich legacy of traditional spices and pure vegetarian cooking, nested in the divine shadow of Yadagirigutta.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a
            href="#menu"
            onClick={handleScrollToMenu}
            className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gold-gold to-royal-orange text-charcoal font-sans text-xs font-bold uppercase tracking-widest rounded-none hover:shadow-[0_0_30px_rgba(214,158,46,0.3)] transition-all duration-500 overflow-hidden"
          >
            {/* Hover overlay */}
            <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative z-10">Explore Our Menu</span>
            <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        onClick={handleScrollToMenu}
      >
        
        
      </motion.div>
    </section>
  );
}
