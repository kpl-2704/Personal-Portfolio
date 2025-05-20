import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiMail, FiPhone, FiArrowDown } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen tech-pattern pt-24 pb-16 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-3 text-blue-500 font-medium">Hello, I'm</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Kapil Madankar
            </h1>
            <div className="h-12 mb-4">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'React.js Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                 
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-400"
              />
            </div>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Frontend developer with 2+ years of experience building scalable UIs with React.js, 
              Next.js, and Tailwind CSS. Passionate about creating beautiful, user-friendly interfaces.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download="Kapil_Madankar_Resume.pdf"
                className="btn btn-outline"
              >
                Download CV
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/kpl-2704"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="mailto:kplcm27@gmail.com"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <FiMail size={22} />
              </a>
              <a
                href="tel:+917775882602"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="Phone"
              >
                <FiPhone size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-slate-800 border-4 border-slate-700 rounded-full h-80 w-80 flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-8xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  KM
                </div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] opacity-10 mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-slate-400 hover:text-blue-400 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
