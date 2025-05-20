import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiClock, FiStar, FiTrendingUp } from 'react-icons/fi';

const AchievementsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const achievements = [
    {
      icon: <FiAward />,
      title: 'Recognition',
      description: 'Received company-wide recognition for designing and launching a complex workflow system that improved client onboarding speed by 35%.',
    },
    {
      icon: <FiClock />,
      title: 'Efficiency',
      description: 'Delivered high-priority modules 20% ahead of deadlines during quarterly product sprints.',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Growth Impact',
      description: 'Led frontend modules that drove a 40% increase in mobile engagement and 15% improvement in UX.',
    },
    {
      icon: <FiStar />,
      title: 'Quality Code',
      description: 'Implemented code review practices that improved code quality and reduced bugs by 25%.',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-900">
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
            <h2 className="section-heading">Achievements</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Recognition and milestones from my professional journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="card h-full text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{achievement.title}</h3>
                  <p className="text-slate-400">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
