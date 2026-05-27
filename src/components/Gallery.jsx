import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    title: 'Ghee Roast Dosa Preparation',
    url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=600&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    height: 'h-80',
  },
  {
    id: 2,
    title: 'Traditional Filter Coffee Service',
    url: 'https://images.unsplash.com/photo-1608228088998-57828365d486?q=80&w=600&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    height: 'h-[400px]',
  },
  {
    id: 3,
    title: 'Steaming Fresh Idlis',
    url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    height: 'h-72',
  },
  {
    id: 4,
    title: 'Authentic Indian Spices',
    url: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop',
    colSpan: 'lg:col-span-6',
    height: 'h-96',
  },
  {
    id: 5,
    title: 'Yadagirigutta Devotional Heritage',
    url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop',
    colSpan: 'lg:col-span-6',
    height: 'h-96',
  },
  {
    id: 6,
    title: 'Golden Medu Vada Spread',
    url: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    height: 'h-[360px]',
  },
  {
    id: 7,
    title: 'Royal Banana Leaf Meals',
    url: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=600&auto=format&fit=crop',
    colSpan: 'lg:col-span-8',
    height: 'h-[360px]',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white relative">
      {/* Decorative Gold Separator Top */}
      <div className="absolute top-0 left-0 right-0 gold-separator"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-cursive text-3xl text-gold-dark block mb-2">
            Visual Story
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal uppercase tracking-wider font-light">
            Our Restaurant <span className="font-semibold text-royal-red">Gallery</span>
          </h2>
          <div className="w-24 h-[1.5px] bg-gold-gold mx-auto mt-4 mb-2"></div>
          <p className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold">
            Capturing the sights, textures, and heritage of pure Udupi style.
          </p>
        </div>

        {/* Gallery Grid (Spacious & Clean Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`${image.colSpan} ${image.height} relative group overflow-hidden border border-stone-sand/40 bg-stone-light shadow-sm`}
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 text-left">
                <span className="font-cursive text-2xl text-gold-light mb-1">
                  Udupi Moments
                </span>
                <h3 className="font-serif text-lg font-semibold text-white uppercase tracking-wider">
                  {image.title}
                </h3>
                <div className="w-12 h-[1px] bg-gold-gold mt-2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
