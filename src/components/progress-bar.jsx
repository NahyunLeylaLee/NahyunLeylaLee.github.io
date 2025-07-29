import { motion } from 'framer-motion';

const ProgressBar = ({ index, color, level }) => {
  return (
    <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: index * 0.1 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default ProgressBar;