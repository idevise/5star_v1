import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-charcoal hover:text-coral transition-colors">5Stars.agency</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#calculator" className="text-charcoal hover:text-coral px-3 py-2 transition-colors">5 Star Calculator</a>
              <a href="#features" className="text-charcoal hover:text-coral px-3 py-2 transition-colors">Features</a>
              <a href="#services" className="text-charcoal hover:text-coral px-3 py-2 transition-colors">Services</a>
              <a href="#contact" className="bg-charcoal text-cream px-4 py-2 rounded-md hover:bg-coral transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#calculator"
                className="block text-charcoal hover:text-coral px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                5 Star Calculator
              </a>
              <a
                href="#features"
                className="block text-charcoal hover:text-coral px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#services"
                className="block text-charcoal hover:text-coral px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block bg-charcoal text-cream px-3 py-2 rounded-md hover:bg-coral transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;