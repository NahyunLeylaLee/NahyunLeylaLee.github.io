export const badges = ['React', 'TypeScript', 'Vue.js', 'Node.js', 'Java', 'SQL'];

export const skills = [
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

export const projects = [
  {
    id: 1,
    title: 'Newborn Track',
    icon: '🩺',
    description: 'Health tracking service for newborns by conducting surveys with their parents.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'NestJS', 'AWS'],
    color: 'from-pink-600 to-purple-600',
    view: 'https://newborntrack.org/',
    // github: 'https://github.com/NahyunLeylaLee/survey_project',
  },
  {
    id: 2,
    title: 'Samsung SDS',
    icon: '🏭',
    description: 'Semiconductor data pipeline built with Apache NiFi for real-time data processing at Samsung SDS.',
    tech: ['Apache NiFi', 'Java', 'Spring Boot', 'JUnit', 'Oracle/MySQL'],
    color: 'from-purple-600 to-blue-600',
    view: 'https://nahyunleylalee.github.io/portfolio-samsung',
    // github: 'https://github.com/NahyunLeylaLee/portfolio-samsung',
  },
  {
    id: 3,
    title: 'My Portfolio',
    icon: '📝',
    description: 'Personal portfolio highlighting interactive web apps built with modern technologies.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-blue-600 to-cyan-600',
    view: 'https://nahyunleylalee.github.io',
    // github: 'https://github.com/NahyunLeylaLee/Myportfolio',
  }
];

export const contacts = [
  { icon: '📧', title: 'Email', info: 'florence5107@gmail.com', color: 'from-blue-500 to-cyan-500', url: 'https://mail.google.com/' },
  { icon: '💼', title: 'LinkedIn', info: 'https://www.linkedin.com/in/lee-nahyun', color: 'from-purple-500 to-pink-500', url: 'https://www.linkedin.com/in/lee-nahyun' },
  // { icon: '🐙', title: 'GitHub', info: 'https://github.com/NahyunLeylaLee', color: 'from-green-500 to-teal-500', url: 'https://github.com/NahyunLeylaLee' }
];

export const sections = ['home', 'about', 'skills', 'projects', 'contact'];