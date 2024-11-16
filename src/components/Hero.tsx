import React from 'react';
import { motion } from 'framer-motion';
import StarRatingCalculator from './StarRatingCalculator';

const Hero = () => {
  return (
    <div className="relative bg-cream overflow-hidden">
      <div className="floating-star hero-star-1" />
      <div className="floating-star hero-star-2" />
      <div className="floating-star hero-star-3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 bg-cream sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-36 mx-auto max-w-7xl px-4 sm:mt-36 sm:px-6 md:mt-36 lg:mt-36 lg:px-8 xl:mt-36">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-charcoal sm:text-5xl md:text-6xl">
                <span className="block">Boost Your Business with</span>
                <span className="block text-coral">Better Reviews</span>
              </h1>
              <p className="mt-3 text-base text-charcoal opacity-80 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl">
                Transform your Google Business Profile into a powerful marketing tool. We help businesses improve their online reputation and star ratings to attract more customers.
              </p>
              <div className="mt-5 mb-[70px] sm:mt-8 flex justify-center">
                <div className="rounded-md shadow">
                  <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cream bg-charcoal hover:bg-coral transition-colors md:py-4 md:text-lg md:px-10">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="max-w-7xl mx-auto relative">
                <div className="floating-star calc-star-1" />
                <div className="floating-star calc-star-2" />
                <StarRatingCalculator />
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Hero;