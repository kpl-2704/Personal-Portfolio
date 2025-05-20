import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'Prof. Ram Meghe Institute of Technology & Research',
      location: 'Amravati',
      period: '2017 – 2022',
      description: 'Applied engineering discipline to master modern web technologies and user-centric solutions.',
    },
    {
      degree: 'Full Stack Development',
      institution: 'Newton School',
      location: 'Remote',
      period: 'Mar 2022 – Oct 2022',
      description: 'Intensive bootcamp covering modern web development technologies and practices.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/30">
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
            <h2 className="section-heading">Education</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              My academic background and professional training
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="mb-12 last:mb-0"
              >
                <div className="card relative overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="flex-shrink-0 flex items-start">
                      <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 text-2xl">
                        <FiBookOpen />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-1 text-white">{item.degree}</h3>
                      <h4 className="text-lg font-medium mb-3 text-blue-400">
                        {item.institution}
                      </h4>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-slate-400">
                          <FiMapPin className="mr-1" size={14} />
                          <span className="text-sm">{item.location}</span>
                        </div>
                        <div className="flex items-center text-slate-400">
                          <FiCalendar className="mr-1" size={14} />
                          <span className="text-sm">{item.period}</span>
                        </div>
                      </div>

                      <p className="text-slate-300">{item.description}</p>
                    </div>
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

export default EducationSection;
