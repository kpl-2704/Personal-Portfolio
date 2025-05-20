import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiCode, FiAward, FiBriefcase } from 'react-icons/fi';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-20 bg-slate-900">
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
          <motion.div
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="section-heading">About Me</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              I'm a passionate Frontend Developer who loves building beautiful, user-friendly web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-20 rounded-2xl"></div>
                <div className="card relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-60 h-60 bg-blue-600/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-violet-600/10 rounded-full -ml-20 -mb-20"></div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white">Professional Summary</h3>
                  <p className="text-slate-300 mb-6">
                    Frontend Developer with 2+ years of experience using React.js, Next.js, and Tailwind CSS to build scalable UIs.
                    Improved engagement by 40% and cut feature delivery time by 30% through performance-focused 
                    development and team collaboration.
                  </p>
                  
                  <div className="border-t border-slate-700 pt-6">
                    <div className="text-slate-300">
                      <div className="flex gap-2 mb-2">
                        <FiUser className="mt-1 text-blue-500" />
                        <span>Based in Amravati, Maharashtra</span>
                      </div>
                      <div className="flex gap-2 mb-2">
                        <FiCode className="mt-1 text-blue-500" />
                        <span>2+ Years of Experience</span>
                      </div>
                      <div className="flex gap-2 mb-2">
                        <FiAward className="mt-1 text-blue-500" />
                        <span>Recognized for Performance Optimization</span>
                      </div>
                      <div className="flex gap-2">
                        <FiBriefcase className="mt-1 text-blue-500" />
                        <span>Available for Freelance Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-bold mb-6 text-white">My Approach</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">User-Centered Development</h4>
                  <p className="text-slate-300">
                    I build applications with the end-user in mind, focusing on intuitive interfaces and smooth interactions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">Performance Optimization</h4>
                  <p className="text-slate-300">
                    I'm passionate about creating fast, responsive applications that deliver excellent user experiences 
                    across all devices.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">Clean, Maintainable Code</h4>
                  <p className="text-slate-300">
                    I write modular, well-documented code that's easy to maintain and scale, following best practices
                    and industry standards.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">Collaborative Mindset</h4>
                  <p className="text-slate-300">
                    I thrive in team environments, working closely with designers, backend developers, and stakeholders
                    to deliver exceptional results.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
