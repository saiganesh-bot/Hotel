import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import alooBiryaniImage from '../assets/aloo briyani.png';
import masalaDosaImage from '../assets/Masla dosa.png';
import mysoreBondaImage from '../assets/Masyore Bonda.png';
import mealsImage from '../assets/Meals.png';
import pooriImage from '../assets/Poori.png';
import teaImage from '../assets/Tea.png';

const mustTryItems = [
  {
    id: 'dosa',
    name: 'Special Masala Dosa',
    description: 'Crispy rice crepe with potato masala filling, roasted to perfection, served with sambar and fresh chutneys.',
    image: masalaDosaImage,
  },
  {
    id: 'idli',
    name: 'Traditional Steamed Idli',
    description: 'Soft, fluffy, steamed rice cakes served hot with a dollop of fresh ghee, traditional sambar, and coconut chutney.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'Poori',
    name: 'Crispy Poori',
    description: 'Freshly deep-fried whole wheat bread, light, fluffy, and perfectly puffed with a delicate crispness, served hot with flavorful curry.',
    image: pooriImage,
  },
    {
    id: 'Bonda',
    name: 'Mysore Bonda',
    description: 'Soft and fluffy Mysore Bonda with a light golden crisp exterior, served hot with coconut chutney and sambar.',
    image: mysoreBondaImage,
  },
  
  {
    id: 'Meals',
    name: 'South Indian Meals',
    description: 'A wholesome traditional South Indian platter served with steamed rice, sambar, rasam, curries, poriyal, papad, pickles, curd, and flavorful accompaniments.',
    image: mealsImage,
  },


   {
    id: 'Biryani',
    name: 'Authentic South Indian Aloo Biryani',
    description: 'Authentic South Indian Aloo Biryani made with aromatic rice, tender potato pieces, and traditional spices.',
    image: alooBiryaniImage,
  },

  {
    id: 'Tea',
    name: 'Udupi Tea',
    description: 'Traditional Udupi-style tea made with strong brewed tea and hot frothy milk, served in a classic stainless steel dabarah set.',
    image: teaImage,
  },
];

export default function MustTry() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const target = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: target,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="must-try" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gold Border Line */}
      <div className="absolute top-0 left-0 right-0 gold-separator"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <span className="font-cursive text-3xl text-gold-dark block mb-2">
              Signature Delights
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal uppercase tracking-wider font-light">
              Our <span className="font-semibold text-royal-red">Must Try</span> Items
            </h2>
            <div className="w-20 h-[1.5px] bg-gold-gold mt-4 mb-2"></div>
            <p className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold">
              The true essence of traditional South Indian breakfast.
            </p>
          </div>

          {/* Slider Controls (Desktop Only) */}
          <div className="hidden md:flex space-x-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-3 border border-stone-sand hover:border-gold-gold text-charcoal hover:text-gold-dark transition-all duration-300 rounded-full bg-white shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border border-stone-sand hover:border-gold-gold text-charcoal hover:text-gold-dark transition-all duration-300 rounded-full bg-white shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Card Shelf */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mustTryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-80 sm:w-[420px] snap-start border border-stone-sand/40 bg-white group overflow-hidden flex flex-col sm:flex-row relative"
            >
              {/* Premium Gradient Frame on hover */}
              <div className="absolute inset-0 p-[1.5px] bg-gradient-to-br from-gold-gold to-royal-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-none"></div>
              
              {/* Outer Card Body */}
              <div className="bg-white flex flex-col sm:flex-row w-full h-full p-4 items-center">
                {/* Image Section */}
                <div className="w-full sm:w-44 h-44 overflow-hidden relative flex-shrink-0 mb-4 sm:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="sm:pl-6 text-left flex flex-col justify-center">
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-2 group-hover:text-royal-red transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs text-stone-dark/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
