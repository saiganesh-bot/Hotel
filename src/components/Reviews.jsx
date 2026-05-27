import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviewsList = [
  {
    id: 1,
    name: 'Ramesh K.',
    rating: 5,
    text: 'A small self-service joint, but serving the tastiest South Indian breakfast food. The idli is incredibly soft and the sambar is top-notch. Absolutely worth visiting when near Yadagirigutta.',
    date: '1 week ago',
  },
  {
    id: 2,
    name: 'Prasad Rao',
    rating: 5,
    text: 'Very good service. The staff is polite, and the food is served piping hot. The premises are kept neat and clean, which is highly appreciated.',
    date: '3 weeks ago',
  },
  {
    id: 3,
    name: 'Deepika M.',
    rating: 5,
    text: 'The Masala Dosa here is very good! Perfectly crispy, roasted in fresh ghee, and the coconut chutney has the perfect kick. One of the best dosas in the area.',
    date: '1 month ago',
  },
  {
    id: 4,
    name: 'Satish Kumar',
    rating: 4,
    text: 'Worth of price. Extremely reasonable rates for the taste and quality they provide. A perfect pure veg option for family dining.',
    date: '2 months ago',
  },
  {
    id: 5,
    name: 'Anitha Reddy',
    rating: 5,
    text: 'Excellent tea and filter coffee! Ideal stop for a quick traditional Udupi breakfast after a long drive to the temple town.',
    date: '2 months ago',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsList.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsList.length) % reviewsList.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsList.length);
  };

  return (
    <section id="reviews" className="py-24 bg-white relative">
      {/* Decorative Gold Separator Top */}
      <div className="absolute top-0 left-0 right-0 gold-separator"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Google Ratings Summary */}
          <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="font-cursive text-3xl text-gold-dark block mb-2">
              Guest Experiences
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal uppercase tracking-wider font-light mb-6">
              Our <span className="font-semibold text-royal-red">Reviews</span>
            </h2>

            {/* Google Stars Block */}
            <div className="bg-stone-light border border-stone-sand/50 p-8 w-full max-w-sm flex flex-col items-center shadow-sm">
              {/* Google Brand Logo */}
              <div className="flex items-center space-x-2 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-sans text-xs font-semibold text-charcoal/50 uppercase tracking-widest">
                  Google Review
                </span>
              </div>

              {/* Huge Rating Number */}
              <span className="font-serif text-5xl sm:text-6xl font-bold text-charcoal mb-2">
                4.3
              </span>

              {/* Star visuals */}
              <div className="flex space-x-1 mb-2 text-gold-gold">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <div className="relative w-[18px] h-[18px] text-stone-sand fill-current">
                  <Star size={18} className="absolute inset-0" />
                  <div className="absolute inset-0 overflow-hidden w-[30%]" style={{ color: '#D69E2E' }}>
                    <Star size={18} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Total review count */}
              <span className="font-sans text-xs text-stone-dark/60 font-medium">
                Based on 1,426 Reviews
              </span>
            </div>
          </div>

          {/* Right Column: Carousel */}
          <div className="lg:col-span-8 relative flex flex-col justify-between h-full min-h-[300px]">
            
            {/* Carousel Content */}
            <div className="relative overflow-hidden w-full px-4 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-left"
                >
                  {/* Rating Stars for Review */}
                  <div className="flex space-x-1 mb-4 text-gold-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < reviewsList[currentIndex].rating ? 'currentColor' : 'none'}
                        className={i < reviewsList[currentIndex].rating ? '' : 'text-stone-sand'}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-serif text-xl sm:text-2xl text-stone-dark leading-relaxed italic mb-6">
                    “{reviewsList[currentIndex].text}”
                  </p>

                  {/* Author & Date */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-[1px] bg-gold-gold"></div>
                    <div>
                      <span className="font-sans text-sm font-bold text-charcoal uppercase tracking-wider block">
                        {reviewsList[currentIndex].name}
                      </span>
                      <span className="font-sans text-[11px] text-stone-dark/50 uppercase tracking-widest block mt-0.5">
                        Verified Guest • {reviewsList[currentIndex].date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex justify-start space-x-3 pl-4 mt-6">
              <button
                onClick={handlePrev}
                className="p-3 border border-stone-sand hover:border-gold-gold text-charcoal hover:text-gold-dark transition-all duration-300 rounded-full bg-white shadow-sm"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 border border-stone-sand hover:border-gold-gold text-charcoal hover:text-gold-dark transition-all duration-300 rounded-full bg-white shadow-sm"
                aria-label="Next review"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
