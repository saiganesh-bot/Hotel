import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loader after 2.2 seconds to allow the entry animations to feel premium
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle background luxury texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#F9E7C9_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

          {/* Loading Container */}
          <div className="relative flex flex-col items-center">
            {/* Elegant Mandala SVG Loader */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 0,
                transition: { duration: 1.2, ease: "easeOut" }
              }}
              className="relative w-28 h-28 flex items-center justify-center"
            >
              {/* Outer Golden Rotating Ring */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-full h-full text-gold-gold"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                {/* Small decorative circles representing traditional Udupi patterns */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x = 50 + 40 * Math.cos(angle);
                  const y = 50 + 40 * Math.sin(angle);
                  return <circle key={i} cx={x} cy={y} r="2" fill="currentColor" />;
                })}
              </motion.svg>

              {/* Inner Sacred Diya (Lamp) Icon representing pure veg hospitality */}
              <div className="absolute flex items-center justify-center">
                <motion.svg
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: [1, 1.05, 1],
                    transition: { 
                      delay: 0.4, 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    } 
                  }}
                  className="w-12 h-12 text-royal-red"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Custom Diya Shape */}
                  <path d="M12 2C12 2 15 6 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6 12 2 12 2Z" className="text-royal-orange fill-current" />
                  <path d="M2 14C2 18.4183 5.58172 22 10 22H14C18.4183 22 22 18.4183 22 14C22 13.5 20.5 13 18 13C15.5 13 14.5 14.5 12 14.5C9.5 14.5 8.5 13 6 13C3.5 13 2 13.5 2 14Z" fill="currentColor" />
                </motion.svg>
              </div>
            </motion.div>

            {/* Cursive Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } }}
              className="mt-6 font-cursive text-3xl text-gold-dark"
            >
              Atithi Devo Bhava
            </motion.p>

            {/* Restaurant Name */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
              className="mt-2 font-serif text-lg tracking-[0.2em] text-charcoal font-medium uppercase text-center leading-relaxed"
            >
              <span className="block">Sri Raghavendra</span>
              <span className="block">Udupi</span>
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80, transition: { delay: 1, duration: 1 } }}
              className="h-[1px] bg-gold-gold mt-4"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
