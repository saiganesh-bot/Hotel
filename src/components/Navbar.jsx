import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Specials', href: '#specials' },
  { name: 'Must Try', href: '#must-try' },
  { name: 'Menu', href: '#menu' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky header style
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect current active section
      const scrollPosition = window.scrollY + 120; // offset
      for (const link of navLinks) {
        const el = document.getElementById(link.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.substring(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.substring(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gold-light/40 shadow-sm py-4'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Section */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group"
          >
            {/* Pure Veg Badge */}
            <div className="w-6 h-6 border-2 border-green-600 flex items-center justify-center p-0.5 rounded-sm flex-shrink-0">
              <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-semibold tracking-wider text-charcoal group-hover:text-gold-dark transition-colors">
                SRI RAGHAVENDRA
              </span>
              <span className="font-sans text-[10px] tracking-[0.25em] text-gold-dark uppercase font-semibold">
                Udupi Hotel • Pure Veg
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-300 py-1 ${
                  activeSection === link.href.substring(1)
                    ? 'text-royal-red'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-royal-red"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA / Phone Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="tel:09703111221"
              className="flex items-center space-x-2 px-5 py-2.5 border border-royal-red hover:bg-royal-red text-royal-red hover:text-white rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <Phone size={14} />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-charcoal hover:text-gold-dark transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl flex flex-col p-8 pt-24 border-l border-gold-light/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-sans text-sm font-semibold uppercase tracking-widest py-2 border-b border-stone-sand/50 transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'text-royal-red pl-2 border-l-2 border-l-royal-red'
                        : 'text-charcoal/70 hover:text-charcoal'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Phone CTA */}
              <div className="mt-auto">
                <a
                  href="tel:09703111221"
                  className="flex items-center justify-center space-x-2 w-full py-4 bg-royal-red hover:bg-royal-red-dark text-white rounded-lg font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <Phone size={16} />
                  <span>Call 097031 11221</span>
                </a>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center p-0.5 rounded-sm">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold">
                    100% Pure Vegetarian
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
