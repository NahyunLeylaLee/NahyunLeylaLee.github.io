import { motion } from 'framer-motion';
import Badge from './badge';

const ProjectBox = ({ index, id, color, icon, title, description, tech, live, github, handleClick }) => {
  return (
    <motion.div
      key={id}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{
        y: -15,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 h-full">
        <motion.div
          className={`h-48 bg-gradient-to-br ${color} flex items-center justify-center text-6xl relative overflow-hidden`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
          >
            {icon}
          </motion.div>

          {/* Animated background particles */}
          <motion.div
            className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full"
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-6 right-6 w-3 h-3 bg-white/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col justify-between">
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((item, techIndex) => (
                <Badge className='px-3 py-1 text-xs' key={item} index={techIndex} label={item} />
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                onClick={() => handleClick(live)}
                className="cursor-pointer flex-1 py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-medium"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(168, 85, 247, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Live Demo
              </motion.button>
              <motion.button
                onClick={() => handleClick(github)}
                className="cursor-pointer flex-1 py-2 px-4 border border-purple-500 rounded-lg text-sm font-medium text-purple-400 hover:bg-purple-600/10"
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgb(168, 85, 247)",
                  backgroundColor: "rgba(168, 85, 247, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                GitHub
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectBox;