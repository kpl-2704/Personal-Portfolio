import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="#home" smooth className="flex items-center space-x-2">
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              KM
            </span>
            <span className="font-bold text-lg hidden sm:block">Kapil Madankar</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                smooth
                className="nav-link relative text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* <button className="hidden md:block btn btn-outline"><a href='./Kapil_Madankar_Resume.pdf' download={true}>Resume</a></button> */}
          <button className="hidden md:block px-6 py-2 border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-900/20 transition-all duration-300 rounded-lg font-medium group">
  <a 
    href='./Kapil_Madankar_Resume.pdf' 
    download={true}
    className="flex items-center gap-2"
  >
    Download Resume
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 text-indigo-400 group-hover:translate-y-0.5 transition-transform"
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
      />
    </svg>
  </a>
</button>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  smooth
                  className="nav-link py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="#" className="btn btn-primary text-center">
                Resume
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
