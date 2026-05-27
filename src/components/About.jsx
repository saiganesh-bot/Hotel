import { motion } from 'framer-motion';
import mealsImage from '../assets/Meals.png';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background golden pattern element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-light/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-royal-red/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Asymmetric Image Cards */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <motion.div 
              variants={itemVariants}
              className="relative w-72 sm:w-[370px] h-96 z-10"
            >
              {/* Back Decorative Gold Frame */}
              <div className="absolute inset-0 border border-gold-gold/30 translate-x-4 translate-y-4 -z-10"></div>
              
              {/* Main Image */}
              <img 
                src={mealsImage} 
                alt="Traditional South Indian Vegetarian Meal" 
                className="w-full h-full object-cover shadow-lg border border-gold-light/40"
              />
            </motion.div>

            {/* Overlapping Small Image Card */}
            <motion.div 
              variants={itemVariants}
              className="absolute right-0 sm:right-6 lg:right-[-20px] bottom-[-40px] w-48 sm:w-56 h-64 z-20 hidden sm:block"
            >
              {/* Decorative Frame */}
              <div className="absolute inset-0 border border-royal-red/35 -translate-x-3 -translate-y-3 -z-10"></div>
              
              {/* Overlay Image */}
              <img 
                src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=600&auto=format&fit=crop" 
                alt="Traditional South Indian Vegetarian Meal" 
                className="w-full h-full object-cover shadow-xl border border-gold-light/40"
              />
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <motion.div 
            variants={containerVariants}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            <motion.span 
              variants={itemVariants}
              className="font-cursive text-3xl text-gold-dark mb-2 block"
            >
              Our Heritage
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="font-serif text-3xl sm:text-5xl text-charcoal font-light leading-tight mb-6 uppercase"
            >
              Purity in Every Taste, <br />
              <span className="font-semibold text-royal-red">Devotion in Every Meal</span>
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="w-20 h-[1px] bg-gold-gold mb-6"
            />

            <motion.p 
              variants={itemVariants}
              className="font-sans text-sm md:text-base text-stone-dark/80 leading-relaxed mb-6"
            >
              Rooted in the ancient culinary principles of Udupi—a historic temple town renowned for its sacred vegetarian dishes—we bring you a taste of pure authenticity. Our preparation is a ritual of quality, combining freshly ground spices, time-honored recipes, and a commitment to absolute purity.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="font-sans text-sm md:text-base text-stone-dark/80 leading-relaxed mb-8"
            >
              Nestled at the foothills of the holy shrine of Yadagirigutta, we provide pilgrims and travelers with a peaceful sanctuary to relish pure vegetarian dishes. From the crackle of fresh mustard seeds to the comforting aroma of hand-poured ghee, we celebrate South India's culinary heart.
            </motion.p>

            {/* Three Pillar Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 border-t border-stone-sand pt-8"
            >
              <div className="text-center sm:text-left">
                <span className="font-serif text-xl sm:text-2xl font-bold text-gold-dark block">100%</span>
                <span className="font-sans text-[10px] sm:text-xs font-semibold text-charcoal/70 uppercase tracking-wider">
                  Pure Vegetarian
                </span>
              </div>
              <div className="text-center sm:text-left border-x border-stone-sand px-2 sm:px-4">
                <span className="font-serif text-xl sm:text-2xl font-bold text-gold-dark block">Fresh</span>
                <span className="font-sans text-[10px] sm:text-xs font-semibold text-charcoal/70 uppercase tracking-wider">
                  Ground Spices
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="font-serif text-xl sm:text-2xl font-bold text-gold-dark block">Divine</span>
                <span className="font-sans text-[10px] sm:text-xs font-semibold text-charcoal/70 uppercase tracking-wider">
                  Location
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
