const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Specials', href: '#specials' },
  { name: 'Must Try', href: '#must-try' },
  { name: 'Menu', href: '#menu' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.substring(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-white relative">
      {/* Royal Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-gold via-royal-orange to-royal-red"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 text-left">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-3 mb-4 group"
            >
              {/* Pure Veg Badge */}
              <div className="w-6 h-6 border-2 border-green-500 flex items-center justify-center p-0.5 rounded-sm flex-shrink-0">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider font-semibold text-white group-hover:text-gold-light transition-colors">
                  SRI RAGHAVENDRA
                </span>
                <span className="font-sans text-[9px] tracking-[0.25em] text-gold-gold uppercase font-semibold">
                  Udupi Hotel • Pure Veg
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs text-stone-sand/60 leading-relaxed mb-6 max-w-sm">
              Bringing the ancient vegetarian cooking traditions of Udupi to the sacred foothills of Yadagirigutta. Every recipe is a celebration of purity, freshness, and authentic South Indian taste.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 border border-white/10 hover:border-gold-gold text-white/50 hover:text-gold-light transition-all duration-300 rounded-full"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 border border-white/10 hover:border-gold-gold text-white/50 hover:text-gold-light transition-all duration-300 rounded-full"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 border border-white/10 hover:border-gold-gold text-white/50 hover:text-gold-light transition-all duration-300 rounded-full"
                aria-label="Google Maps Location"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
                  <line x1="9" y1="3" x2="9" y2="18"/>
                  <line x1="15" y1="6" x2="15" y2="21"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 text-left">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-gold mb-5">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-xs text-stone-sand/65 hover:text-white transition-colors py-1 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="md:col-span-4 text-left">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-gold mb-5">
              Get in Touch
            </h3>
            <p className="font-sans text-xs text-stone-sand/65 leading-relaxed mb-3">
              Beside Vadaigudem Road, Yadagirigutta, Gundlapally, Telangana 508115
            </p>
            <p className="font-sans text-xs text-stone-sand/65 mb-1">
              Phone:{' '}
              <a href="tel:09703111221" className="text-white hover:text-gold-light font-semibold">
                097031 11221
              </a>
            </p>
            <p className="font-sans text-xs text-stone-sand/65">
              Open Daily: 7:00 AM – 11:00 PM
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-8"></div>

        {/* Bottom copyright block */}
        <div className="flex flex-col md:flex-row items-center justify-between font-sans text-[11px] text-stone-sand/45">
          <span>
            © 2026 Sri Raghavendra Udupi Hotel Pure Veg. All Rights Reserved.
          </span>
          <span className="mt-2 md:mt-0 flex items-center">
            Designed with devotion in the foothills of Yadagirigutta
          </span>
        </div>
      </div>
    </footer>
  );
}
