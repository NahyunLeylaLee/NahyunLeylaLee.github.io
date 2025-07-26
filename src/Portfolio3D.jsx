import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const Portfolio3D = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const homeInView = useInView(homeRef, { margin: "-10px 0px 0px 0px" });
  const aboutInView = useInView(aboutRef, { margin: "-10px 0px 0px 0px" });
  const skillsInView = useInView(skillsRef, { margin: "-10px 0px 0px 0px" });
  const projectsInView = useInView(projectsRef, { margin: "-10px 0px 0px 0px"});
  const contactInView = useInView(contactRef, { margin: "-10px 0px 0px 0px" });

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update active section based on scroll
  useEffect(() => {
    if (homeInView)
      setActiveSection('home');
    else if (aboutInView)
      setActiveSection('about');
    else if (skillsInView)
      setActiveSection('skills');
    else if (projectsInView)
      setActiveSection('projects');
    else
      setActiveSection('contact');
  }, [homeInView, aboutInView, skillsInView, projectsInView, contactInView]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // 3D transform calculations
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const handleClick = (url) => {
    window.open(url, '_black');
  };

  const skills = [
    { name: 'HTML/CSS', icon: '🎨', level: 92, color: '#FF6B9D' },
    { name: 'JavaScript', icon: '🟨', level: 95, color: '#f7b021' },
    { name: 'React', icon: '⚛️', level: 95, color: '#61DAFB' },
    { name: 'Vue.js', icon: '💚', level: 90, color: '#4FC08D' },
    { name: 'TypeScript', icon: '🔷', level: 88, color: '#3178C6' },
    { name: 'Node.js', icon: '🛠️', level: 85, color: '#b5afac' },
    { name: 'Java', icon: '⭐', level: 85, color: '#F7DF1E' },
    { name: 'PostgreSQL', icon: '⚡', level: 85, color: '#8CC84B' },
    { name: 'AWS', icon: '📦', level: 80, color: '#964725' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Natflix',
      icon: '🍿',
      description: 'A comprehensive movie dashboard with real-time api data',
      tech: ['React', 'TypeScript', 'Framer-Motion', 'REST API'],
      color: 'from-purple-600 to-blue-600',
      live: 'https://nahyunleylalee.github.io/Natflix/',
      github: 'https://github.com/NahyunLeylaLee/Natflix',
    },
    {
      id: 2,
      title: 'Newborn Track',
      icon: '🩺',
      description: 'Health tracking service for newborns by conducting surveys with their parents.',
      tech: ['React', 'TypeScript', 'PostgreSQL', 'NestJS', 'AWS'],
      color: 'from-pink-600 to-purple-600',
      live: 'https://newborntrack.org/',
      github: 'https://github.com/NahyunLeylaLee/survey_project',
    },
    {
      id: 3,
      title: 'My Portfolio',
      icon: '✨',
      description: 'Portfolio website with smooth Framer Motion animations',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer-Motion'],
      color: 'from-blue-600 to-cyan-600',
      live: 'https://nahyunleylalee.github.io/Myportfolio',
      github: 'https://github.com/NahyunLeylaLee/Myportfolio',
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Navigation */}
      <motion.nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden sm:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
          <div className="flex gap-6">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 ${activeSection === section
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
          {/* ['🏠', '👩🏻‍💻', '💡', '📄', '📞'] */}
        </div>
      </motion.nav>

      {/* 3D Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          style={{
            rotateX,
            rotateY,
            x: mousePosition.x / 10,
            y: mousePosition.y / 10,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
          style={{
            rotateX: useTransform(rotateX, (latest) => latest * -1),
            rotateY: useTransform(rotateY, (latest) => latest * -1),
            x: mousePosition.x / -15,
            y: mousePosition.y / -15,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-40 h-40 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl"
          style={{
            rotateX: useTransform(rotateX, (latest) => latest * 0.5),
            rotateY: useTransform(rotateY, (latest) => latest * 0.5),
            x: mousePosition.x / 8,
            y: mousePosition.y / 8,
          }}
        />
      </div>

      {/* Home Section */}
      <section id="home" ref={homeRef} className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            {/* <motion.div
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold"
              style={{
                rotateX: mousePosition.y / 10,
                rotateY: mousePosition.x / 10,
              }}
              whileHover={{
                scale: 1.1,
                rotateX: 15,
                rotateY: 15,
                transition: { duration: 0.3 }
              }}
            >
              Leyla
            </motion.div> */}
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent pb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nahyun Lee
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Web Developer crafting
            <motion.span
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {" "}beautiful digital experiences
            </motion.span>
          </motion.p>

          <motion.button
            onClick={() => scrollToSection('projects')}
            className="cursor-pointer px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
              y: -5,

            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-10 w-4 h-4 bg-purple-500 transform rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-6 h-6 bg-pink-500 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
            x: [0, 20, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-3 h-8 bg-gradient-to-b from-blue-400 to-cyan-400"
          animate={{
            rotateZ: [0, 180, 360],
            x: [0, 30, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl flex items-center justify-center text-6xl font-bold"
                style={{
                  rotateX: mousePosition.y / 20,
                  rotateY: mousePosition.x / 20,
                }}
                whileHover={{
                  scale: 1.05,
                  rotateZ: 5,
                  transition: { duration: 0.3 }
                }}
              >
                Leyla
              </motion.div>

              {/* Floating elements around profile */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 transform rotate-45"
                animate={{
                  rotate: [45, 405],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate front-end and full-stack developer with 3 years of experience creating engaging,
                user-friendly web applications. My journey in web development began with curiosity
                and has evolved into expertise.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in modern JavaScript frameworks and have a keen eye for responsive design.
                I believe in writing maintainable code that scales effectively.
              </p>
              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {['React', 'TypeScript', 'Vue.js', 'Node.js', 'Java', 'SQL'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 text-sm"
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
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 px-6 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="py-2 text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
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
                    {skill.icon}
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">Advanced proficiency</p>

                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>

                {/* Glowing effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                    filter: 'blur(20px)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="py-2 text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
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
                    className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}
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
                      {project.icon}
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
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-col justify-between">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-purple-600/20 rounded-full text-xs border border-purple-500/30"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <motion.button
                          onClick={() => handleClick(project.live)}
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
                          onClick={() => handleClick(project.github)}
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="flex items-center py-20 px-6 min-h-[850px]">
        <div className="mx-auto text-center">
          <motion.h2
            className="py-2 text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new opportunities and interesting projects.
            Let's create something amazing together!
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { icon: '📧', title: 'Email', info: 'florence5107@gmail.com', color: 'from-blue-500 to-cyan-500', url: 'https://mail.google.com/' },
              { icon: '💼', title: 'LinkedIn', info: 'https://www.linkedin.com/in/nahyun-lee-6458a2113', color: 'from-purple-500 to-pink-500', url: 'https://www.linkedin.com/in/nahyun-lee-6458a2113/' },
              { icon: '🐙', title: 'GitHub', info: 'https://github.com/NahyunLeylaLee', color: 'from-green-500 to-teal-500', url: 'https://github.com/NahyunLeylaLee' }
            ].map((contact, index) => (
              <motion.div
                onClick={() => handleClick(contact.url)}
                key={contact.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 h-full relative overflow-hidden">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                  <p className="text-gray-300 text-sm">{contact.info}</p>

                  {/* Glowing effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 bg-gradient-to-br ${contact.color}`}
                    style={{ filter: 'blur(20px)' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            style={{zIndex: "10"}}
            className="cursor-pointer px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg shadow-2xl"
            onClick={() => handleClick('https://www.linkedin.com/in/nahyun-lee-6458a2113')}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © 2025 Nahyun Lee. Crafted with passion and modern web technologies.
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Portfolio3D;