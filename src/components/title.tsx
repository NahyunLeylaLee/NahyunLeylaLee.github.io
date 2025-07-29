import { motion } from 'framer-motion';

const Title = ({ text }) => {
  return (
    <motion.h2
      className="py-2 text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.h2>
  )
}

export default Title;