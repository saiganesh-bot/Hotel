import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import idliVadaImage from '../assets/Idli Vada.png';
import pooriImage from '../assets/Poori.png';

const specials = [
  {
    id: 1,
    name: 'Special Ghee Karam Dosa',
    description: 'Crispy golden crepe smeared with hot aromatic spiced garlic chutney, roasted with premium cow ghee, served with fresh coconut chutney and steaming hot sambar.',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=600&auto=format&fit=crop',
    badge: 'Chef Recommended',
  },
  {
    id: 2,
    name: 'Royal Poori',
    description: 'A traditional and royal platter featuring aromatic rice, authentic Udupi sambar, tangy rasam, three seasonal vegetable curries, thick curd, crispy papad, and a warm dessert.',
    image: pooriImage,
    badge: 'Signature Platter',
  },
  {
    id: 3,
    name: 'Idli Vada Combo',
    description: 'A classic twin combination: savory ghee-roasted semolina cooked with mixed vegetables and cashews, paired with a saffron-infused sweet pineapple semolina dessert.',
    image: idliVadaImage,
    badge: 'Udupi Classic',
  },
];

export default function DailySpecials() {
  return (
    <section id="specials" className="py-24 bg-stone-light relative">
      {/* Divider Line Top */}
      <div className="absolute top-0 left-0 right-0 gold-separator"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-cursive text-3xl text-gold-dark block mb-2">
            Today’s Selection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal uppercase tracking-wider font-light">
            Chef’s Daily <span className="font-semibold text-royal-red">Specials</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold-gold mx-auto mt-4 mb-2"></div>
          <p className="font-sans text-xs md:text-sm text-stone-dark/60 uppercase tracking-widest font-semibold">
            Handcrafted with devotion, available today only.
          </p>
        </div>

        {/* Specials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-stone-sand/60 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-500"
            >
              {/* Dish Image Container */}
              <div className="relative h-64 overflow-hidden">
                {/* Subtle Image Hover Zoom */}
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Accent overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center space-x-1.5 px-3.5 py-1.5 bg-royal-red text-white text-[10px] font-sans font-bold uppercase tracking-widest shadow-md">
                  <Award size={10} />
                  <span>{dish.badge}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-8 flex flex-col flex-grow border-t border-stone-sand/30">
                <h3 className="font-serif text-2xl text-charcoal font-semibold mb-3 group-hover:text-royal-red transition-colors duration-300">
                  {dish.name}
                </h3>
                
                <p className="font-sans text-xs md:text-sm text-stone-dark/70 leading-relaxed mb-6 flex-grow">
                  {dish.description}
                </p>

                {/* Bottom Border Accent that shows on hover */}
                <div className="h-0.5 w-0 bg-gold-gold group-hover:w-full transition-all duration-500 ease-out mt-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
