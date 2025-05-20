import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
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
            <h2 className="section-heading">Professional Experience</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              My journey as a frontend developer and the impact I've made
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-violet-600 rounded-full hidden md:block"></div>
            
            <div className="relative z-10">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="md:col-start-2 mb-12 md:mb-0">
                  <div className="relative">
                    <div className="hidden md:block absolute -left-12 top-5 w-6 h-6 rounded-full border-4 border-blue-500 bg-slate-900"></div>
                    <div className="card hover:border-blue-500/40">
                      <div className="flex items-center mb-4 text-blue-500">
                        <FiBriefcase className="mr-2" size={20} />
                        <h3 className="text-xl font-bold">Frontend Developer</h3>
                      </div>
                      
                      <div className="mb-4 flex flex-wrap gap-4">
                        <div className="flex items-center text-slate-400">
                          <FiMapPin className="mr-1" size={14} />
                          <span className="text-sm">Advantage Club, Gurugram</span>
                        </div>
                        <div className="flex items-center text-slate-400">
                          <FiCalendar className="mr-1" size={14} />
                          <span className="text-sm">2022 - Present</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 text-slate-300">
                        <li className="flex">
                          <FiCheck className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                          <span>Delivered 45+ features and bug fixes for a B2B Perks & Rewards platform using React, Redux, JavaScript, Tailwind CSS, and jQuery.</span>
                        </li>
                        <li className="flex">
                          <FiCheck className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                          <span>Led frontend modules that drove a 40% increase in mobile engagement and 15% improvement in UX.</span>
                        </li>
                        <li className="flex">
                          <FiCheck className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                          <span>Developed a WordPress-based blog to streamline content publishing and boost internal engagement.</span>
                        </li>
                        <li className="flex">
                          <FiCheck className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                          <span>Built a sales incentive dashboard and user side plan details and listing enabling real-time tracking, improving team productivity by 20%.</span>
                        </li>
                        <li className="flex">
                          <FiCheck className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                          <span>Collaborated with 5 cross-functional teams to reduce delivery time by 30% and enhance product quality.</span>
                        </li>
                        <li className="flex">
                          <FiCheck className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                          <span>Managed version control using GitHub, promoting clean code practices and seamless CI/CD workflows.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="md:row-start-2 mt-8 md:mt-16">
                  <div className="relative">
                    <div className="hidden md:block absolute -left-12 top-5 w-6 h-6 rounded-full border-4 border-violet-500 bg-slate-900"></div>
                    <div className="card hover:border-violet-500/40">
                      <div className="text-violet-500 mb-6">
                        <div className="text-lg font-semibold">Key Achievements at Advantage Club:</div>
                      </div>
                      
                      <ul className="space-y-4 text-slate-300">
                        <li className="flex">
                          <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 mr-3 flex-shrink-0">
                            <span className="font-semibold">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Performance Optimization</h4>
                            <p className="text-sm text-slate-400">Improved load times by 40% through code splitting and lazy loading techniques</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 mr-3 flex-shrink-0">
                            <span className="font-semibold">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Mobile Responsiveness</h4>
                            <p className="text-sm text-slate-400">Redesigned critical components for perfect mobile rendering, increasing mobile usage by 35%</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 mr-3 flex-shrink-0">
                            <span className="font-semibold">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Team Collaboration</h4>
                            <p className="text-sm text-slate-400">Implemented code review practices that improved code quality and reduced bugs by 25%</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
