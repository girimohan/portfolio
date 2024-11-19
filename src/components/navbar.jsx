// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },  
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-sm' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="bg-blue-50 rounded-lg px-3 py-2">
              <span className="font-mono font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                {'<MG/>'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${
                  isActivePath(link.path) 
                    ? 'nav-link-active' 
                    : 'nav-link-inactive'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center ml-6 pl-6 border-l border-gray-200">
              <a
                href="https://github.com/girimohan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-gray-600 hover:text-blue-600"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohan-giri-37b87a186/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-gray-600 hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white shadow-lg mx-4 my-2 rounded-xl overflow-hidden border border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium transition-colors ${
                isActivePath(link.path)
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 px-4 py-3 border-t border-gray-100">
            <a
              href="https://github.com/girimohan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-giri-37b87a186/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;