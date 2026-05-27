import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Breakfast', 'Meals', 'North Indian Breads', 'Paneer Items', 'North Indian Curries', 'Combos', 'Beverages'];

const menuData = {
  Breakfast: [
    { name: 'Plain Dosa', price: '₹60', description: 'Crispy golden-brown fermented rice crepe roasted with ghee, served with fresh coconut chutney and sambar.' },
    { name: 'Masala Dosa', price: '₹75', description: 'Our signature crispy dosa stuffed with aromatic spiced potato mash, served with two chutneys.' },
    { name: 'Onion Rava Dosa', price: '₹90', description: 'Crispy semolina and rice flour crepe laced with chopped onions, green chilies, and cumin seeds.' },
    { name: 'Steamed Idli (2 Pcs)', price: '₹40', description: 'Soft, pillow-like steamed rice-and-lentil cakes, served hot with sambar and fresh chutney.' },
    { name: 'Vada (2 Pcs)', price: '₹50', description: 'Crispy, savory fried lentil doughnuts infused with black peppercorns, curry leaves, and ginger.' },
    { name: 'Mysore Bonda(4 Pcs)', price: '₹60', description: 'Comforting mash of rice and yellow moong lentils, seasoned with cumin, black pepper, cashews, and pure ghee.' },
    { name: 'Poori (3 Pcs)', price: '₹70', description: 'Golden puffed whole-wheat pooris served with a side of traditional spiced potato curry.' },
    { name: 'Idli Vada Combo', price: '₹60', description: 'A perfect combination of one soft steamed idli and one crispy medu vada served with chutney and sambar.' }
  ],
  Meals: [
    { name: 'Sri Raghavendra Royal Meals', price: '₹140', description: 'A lavish thali containing steamed rice, Udupi sambar, rasam, two seasonal vegetable curries, kootu, fresh curd, papad, pickle, and a traditional sweet payasam.' },
    { name: 'Udupi Special Mini Meals', price: '₹100', description: 'A limited portion meal serving rice, sambar, one curry, rasam, papad, curd, and a dessert.' },
    { name: 'Sambar Rice', price: '₹80', description: 'Freshly cooked hot rice blended with aromatic vegetable sambar, topped with pure cow ghee and served with papad.' },
    { name: 'Curd Rice', price: '₹70', description: 'Cooling, soft rice mixed with fresh yogurt and tempered with mustard seeds, green chilies, ginger, and curry leaves.' }
  ],
  'North Indian Breads': [
    { name: 'Butter Naan', price: '₹45', description: 'Soft tandoor-baked naan brushed with melted butter and served warm.' },
    { name: 'Garlic Butter Naan', price: '₹60', description: 'Fluffy naan topped with garlic, coriander, and a generous butter finish.' },
    { name: 'Tandoori Roti', price: '₹25', description: 'Classic whole-wheat roti baked in the tandoor with a smoky rustic texture.' },
    { name: 'Butter Tandoori Roti', price: '₹35', description: 'Tandoori roti finished with butter for a richer, softer bite.' },
    { name: 'Plain Naan', price: '₹40', description: 'Traditional leavened flatbread, soft and lightly charred in the tandoor.' },
    { name: 'Lachha Paratha', price: '₹55', description: 'Layered flaky paratha cooked until golden and crisp at the edges.' },
    { name: 'Stuffed Kulcha', price: '₹70', description: 'Tandoor-baked kulcha filled with a savory spiced stuffing.' },
    { name: 'Missi Roti', price: '₹45', description: 'Gram flour and wheat roti seasoned with traditional North Indian spices.' }
  ],
  'Paneer Items': [
    { name: 'Paneer Butter Masala', price: '₹220', description: 'Paneer cubes simmered in a creamy tomato-butter gravy with mild spices.' },
    { name: 'Kadai Paneer', price: '₹240', description: 'Paneer tossed with capsicum, onions, tomatoes, and freshly ground kadai masala.' },
    { name: 'Shahi Paneer', price: '₹250', description: 'Rich paneer curry in a smooth cashew-based royal gravy.' },
    { name: 'Palak Paneer', price: '₹230', description: 'Soft paneer cubes cooked in a velvety spinach gravy with gentle spices.' },
    { name: 'Paneer Tikka Masala', price: '₹260', description: 'Tandoori-style paneer tikka folded into a bold, creamy masala gravy.' },
    { name: 'Matar Paneer', price: '₹210', description: 'Paneer and green peas cooked in a homestyle onion-tomato curry.' },
    { name: 'Paneer Lababdar', price: '₹250', description: 'Paneer served in a rich, tangy, mildly sweet gravy with aromatic spices.' }
  ],
  'North Indian Curries': [
    { name: 'Dal Tadka', price: '₹160', description: 'Yellow dal tempered with cumin, garlic, red chilies, and ghee.' },
    { name: 'Dal Makhani', price: '₹220', description: 'Slow-cooked black lentils finished with butter and cream.' },
    { name: 'Veg Kolhapuri', price: '₹230', description: 'Mixed vegetables cooked in a spicy Kolhapuri-style masala.' },
    { name: 'Mixed Veg Curry', price: '₹200', description: 'Seasonal vegetables simmered in a balanced onion-tomato gravy.' },
    { name: 'Malai Kofta', price: '₹260', description: 'Soft kofta dumplings served in a creamy cashew and tomato gravy.' },
    { name: 'Chana Masala', price: '₹180', description: 'Chickpeas cooked with onions, tomatoes, and robust North Indian spices.' },
    { name: 'Dum Aloo', price: '₹210', description: 'Baby potatoes slow-cooked in a rich, aromatic gravy.' },
    { name: 'Aloo Gobi', price: '₹190', description: 'Potatoes and cauliflower cooked with turmeric, cumin, and homestyle spices.' },
    { name: 'Jeera Aloo', price: '₹160', description: 'Potatoes tossed with cumin, herbs, and light dry spices.' },
    { name: 'Navratan Korma', price: '₹250', description: 'A creamy royal curry with mixed vegetables, nuts, and mild spices.' }
  ],
  Combos: [
    { name: 'Butter Naan + Paneer Butter Masala', price: '₹260', description: 'A rich classic pairing of buttery naan and creamy paneer gravy.' },
    { name: 'Tandoori Roti + Dal Makhani', price: '₹245', description: 'Smoky tandoori roti served with slow-cooked buttery dal.' },
    { name: 'Lachha Paratha + Kadai Paneer', price: '₹295', description: 'Flaky layered paratha paired with bold kadai paneer.' },
    { name: 'Jeera Rice + Dal Tadka', price: '₹220', description: 'Fragrant cumin rice served with hot ghee-tempered dal.' }
  ],
  Beverages: [
    { name: 'Traditional Filter Coffee', price: '₹25', description: 'Rich, frothy chicory-blended coffee brewed in a brass filter, served hot in a traditional dabarah.' },
    { name: 'Ginger Cardamom Tea', price: '₹20', description: 'Aromatic milk tea infused with crushed ginger and green cardamom pods.' },
    { name: 'Hot Badam Milk', price: '₹40', description: 'Creamy milk flavored with almonds, saffron threads, and cardamom, served warm with almond slivers.' },
    { name: 'Spiced Buttermilk', price: '₹25', description: 'Cooling churned yogurt diluted with water, infused with green chilies, ginger, coriander, and curry leaves.' },
    { name: 'Sweet Lassi', price: '₹50', description: 'Thick, creamy blended yogurt sweetened with sugar and a hint of cardamom.' }
  ]
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Breakfast');

  return (
    <section id="menu" className="py-24 bg-stone-light relative">
      {/* Decorative Top Divider */}
      <div className="absolute top-0 left-0 right-0 gold-separator"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-cursive text-3xl text-gold-dark block mb-2">
            Taste of Tradition
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal uppercase tracking-wider font-light">
            Our Detailed <span className="font-semibold text-royal-red">Menu</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold-gold mx-auto mt-4 mb-2"></div>
          <p className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold">
            Freshly prepared, pure ingredients, cooked with love.
          </p>
        </div>

        {/* Tab Buttons */}
       <div className="flex justify-center border-b border-stone-sand/60 mb-12 overflow-x-auto pb-2 space-x-1 md:space-x-3 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative font-sans text-xs md:text-sm font-semibold uppercase tracking-wider py-4 px-4 md:px-6 transition-colors focus:outline-none cursor-pointer whitespace-nowrap ${
                activeTab === category ? 'text-royal-red' : 'text-charcoal/50 hover:text-charcoal'
              }`}
            >
              {category}
              {activeTab === category && (
                <motion.div
                  layoutId="activeMenuTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-royal-red"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 text-left"
            >
              {menuData[activeTab].map((item, index) => (
                <div key={item.name} className="flex flex-col group">
                  {/* Name and Price Header */}
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-charcoal group-hover:text-royal-red transition-colors duration-300">
                      {item.name}
                    </h3>
                    
                    {/* Dotted Connection Line */}
                    <div className="flex-grow border-b border-dotted border-stone-sand mx-4 group-hover:border-gold-gold transition-colors duration-300"></div>
                    
                    <span className="font-serif text-lg font-bold text-gold-dark">
                      {item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-stone-dark/70 leading-relaxed pl-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small Pure Veg Disclaimer */}
        <div className="mt-16 flex items-center justify-center space-x-2.5">
          <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center p-0.5 rounded-sm">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          </div>
          <span className="font-sans text-xs font-semibold text-charcoal/60 uppercase tracking-widest">
            All preparations are 100% Pure Vegetarian made with fine local ingredients
          </span>
        </div>
      </div>
    </section>
  );
}
