import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="glass mt-auto py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl mb-2 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Kapil Madankar
            </div>
            <p className="text-sm text-slate-400">
              Frontend Developer crafting exceptional digital experiences
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/kpl-2704"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:kplcm27@gmail.com"
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
            <a
              href="tel:+917775882602"
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="Phone"
            >
              <FiPhone size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kapil Madankar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
