import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';

export default function RestaurantInfo() {
  return (
    <section id="contact" className="py-24 bg-stone-light relative">
      {/* Decorative Gold Separator Top */}
      <div className="absolute top-0 left-0 right-0 gold-separator"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Contact and Timings Details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="font-cursive text-3xl text-gold-dark block mb-2">
                Visit Us
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-charcoal uppercase tracking-wider font-light mb-4">
                Location & <span className="font-semibold text-royal-red">Hours</span>
              </h2>
              <div className="w-20 h-[1.5px] bg-gold-gold mb-10"></div>
            </div>

            {/* Information Cards Stack */}
            <div className="space-y-8 flex-grow">
              
              {/* Address card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-stone-sand text-royal-red rounded-none flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal uppercase tracking-wider mb-1">
                    Address
                  </h3>
                  <p className="font-sans text-sm text-stone-dark/80 leading-relaxed font-medium">
                    Sri Raghavendra Udupi Hotel Pure Veg<br />
                    Beside Vadaigudem Road, Yadagirigutta, Gundlapally,<br />
                    Telangana 508115
                  </p>
                </div>
              </div>

              {/* Call card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-stone-sand text-royal-red rounded-none flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal uppercase tracking-wider mb-1">
                    Phone
                  </h3>
                  <a 
                    href="tel:09703111221" 
                    className="font-sans text-sm text-gold-dark hover:text-royal-red font-bold tracking-wide transition-colors duration-300 block"
                  >
                    097031 11221
                  </a>
                </div>
              </div>

              {/* Timings card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-stone-sand text-royal-red rounded-none flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal uppercase tracking-wider mb-1">
                    Timings
                  </h3>
                  <p className="font-sans text-sm text-stone-dark/80 font-medium">
                    Monday – Sunday: 5:00 AM – 11:00 PM
                  </p>
                  <span className="font-sans text-[10px] text-charcoal/50 uppercase tracking-widest font-semibold block mt-1">
                    Piping hot breakfast starts from 5 AM daily
                  </span>
                </div>
              </div>

              {/* Veg Quality Badge */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-stone-sand text-green-600 rounded-none flex-shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal uppercase tracking-wider mb-1">
                    Pure Veg Assurance
                  </h3>
                  <p className="font-sans text-sm text-stone-dark/80 font-medium">
                    Strictly 100% vegetarian. Separate kitchens, clean traditional ingredients, and highest hygiene standards.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 h-96 lg:h-auto min-h-[400px] relative border border-stone-sand/60">
            {/* Elegant double border frame around map */}
            <div className="absolute inset-2 border border-gold-gold/15 pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15215.865961603518!2d78.93297121731608!3d17.556736483358055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb09825b74681f%3A0xe10091fa09311681!2sSri%20Raghavendra%20Udupi%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="Sri Raghavendra Udupi Hotel Google Map Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
