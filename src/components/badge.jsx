import { motion } from 'framer-motion';

const Badge = ({ className="", label, index }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 ${className}`}
      whileHover={{
        scale: 1.1,
        backgroundColor: "rgba(168, 85, 247, 0.2)",
        borderColor: "rgb(168, 85, 247)"
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {label}
    </motion.span>
  );
};

export default Badge;