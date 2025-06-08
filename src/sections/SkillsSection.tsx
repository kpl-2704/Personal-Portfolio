import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCode,
  FiDatabase,
  FiTool,
  FiServer,
  FiLayout,
  FiGlobe
} from 'react-icons/fi';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const skills = [
    {
      category: 'Languages & Frameworks',
      icon: <FiCode />,
      items: [
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'jQuery', level: 75 },
        { name: 'Redux', level: 85 },
        { name: 'HTML', level: 95 },
        { name: 'Python', level: 60 },
      ],
    },
    {
      category: 'Styling & Design',
      icon: <FiLayout />,
      items: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'SASS/SCSS', level: 80 },
        { name: 'Responsive Design', level: 90 },
        { name: 'UI/UX Best Practices', level: 85 },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: <FiTool />,
      items: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'Bitbucket', level: 80 },
        { name: 'Jira', level: 75 },
        { name: 'Trello', level: 85 },
        { name: 'WordPress', level: 70 },
      ],
    },
    {
      category: 'DevOps & Cloud',
      icon: <FiServer />,
      items: [
        { name: 'Docker', level: 65 },
        { name: 'AWS Basics', level: 60 },
      ],
    },
    {
      category: 'Testing & Debugging',
      icon: <FiDatabase />,
      items: [
        { name: 'Chrome DevTools', level: 90 },
        { name: 'Console Debugging', level: 85 },
        { name: 'Unit Testing', level: 70 },
      ],
    },
    {
      category: 'Other Skills',
      icon: <FiGlobe />,
      items: [
        { name: 'Cross-browser Testing', level: 85 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'SEO-friendly Code', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="section-heading">Technical Skills</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="card h-full">
                  <div className="flex items-center mb-6 text-blue-500">
                    <span className="mr-3 text-xl">{skillSet.icon}</span>
                    <h3 className="text-xl font-bold">{skillSet.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {skillSet.items.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="text-slate-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-violet-600 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
