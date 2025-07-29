import { motion } from 'framer-motion';
import { sections } from "../data/data";

const NavigationBar = ({ active, scrollTo }) => {
  return (
    <motion.nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden sm:block"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
        <div className="flex gap-6">
          {sections.map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollTo(section)}
              className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 
                ${active === section
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-white/70"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavigationBar;