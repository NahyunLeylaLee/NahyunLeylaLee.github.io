import { motion } from 'framer-motion';
import ProgressBar from './progress-bar';

const SkillBox = ({ icon, name, level, color, index }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 h-full">
        <motion.div
          className="text-4xl mb-4"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-300 text-sm mb-4">Advanced proficiency</p>

        <ProgressBar index={index} color={color} level={level} />
        <span className="text-sm text-gray-400">{level}%</span>
      </div>

      {/* Glowing effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `linear-gradient(135deg, ${color}20, transparent)`,
          filter: 'blur(20px)'
        }}
      />
    </motion.div>
  )
}

export default SkillBox;