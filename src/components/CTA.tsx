import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id="contact" className="bg-charcoal">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
          <span className="block">Ready to improve your Google Business Profile rating?</span>
          <span className="block text-coral">Get started today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="mailto:contact@5stars.agency"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-charcoal bg-cream hover:bg-coral hover:text-cream transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CTA;