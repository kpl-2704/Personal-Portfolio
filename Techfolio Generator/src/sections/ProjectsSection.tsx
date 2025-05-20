import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'SHOP.CO E-commerce',
      description: 'Built an e-commerce frontend with React and Tailwind CSS, leading to a 20% increase in interaction rates. Integrated JWT-based authentication; implemented cross-browser testing for 95%+ device compatibility.',
      image:"https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ['React.js', 'Tailwind CSS', 'JWT', 'MERN Stack'],
      live: 'https://shop-co-india.netlify.app',
      github: 'https://github.com/kpl-2704/shop-co',
    },
    {
      id: 2,
      title: 'Rewards & Recognition Platform',
      description: 'Architected end-to-end nomination and approval flow adopted by 100+ enterprise clients. Improved user satisfaction metrics through UI enhancements and performance tuning.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      tags: ['React.js', 'Redux', 'Tailwind CSS', 'B2B'],
      live: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'WhatToDo – AI-Powered Travel App',
      description: 'Developed a travel planning app using Next.js and Google Gemini AI API. Used Google Location API to recommend nearby attractions, improving session duration and retention by 25%.',
      image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      tags: ['Next.js', 'Google Gemini AI', 'Location API', 'Tailwind CSS'],
      live: '#',
      github: '#',
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
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
            <h2 className="section-heading">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeIn}>
                <div className="card h-full flex flex-col hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <div className="flex space-x-2">
                        {project.github !== '#' && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            <FiGithub size={18} />
                          </a>
                        )}
                        {project.live !== '#' && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            <FiExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
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

export default ProjectsSection;
