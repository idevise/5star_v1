import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-charcoal border-opacity-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-charcoal">5Stars.agency</span>
            <p className="mt-2 text-charcoal opacity-80">
              Helping businesses improve their online presence through better reviews and ratings.
            </p>
          </div>
          <div>
            <h3 className="text-charcoal font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-charcoal opacity-80 hover:text-coral transition-colors">Features</a></li>
              <li><a href="#services" className="text-charcoal opacity-80 hover:text-coral transition-colors">Services</a></li>
              <li><a href="#contact" className="text-charcoal opacity-80 hover:text-coral transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-charcoal font-semibold mb-4">Contact</h3>
            <p className="text-charcoal opacity-80">Email: contact@5stars.agency</p>
          </div>
        </div>
        <div className="mt-8 border-t border-charcoal border-opacity-10 pt-8">
          <p className="text-center text-charcoal opacity-80">
            © {new Date().getFullYear()} 5Stars.agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;