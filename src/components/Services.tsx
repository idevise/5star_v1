import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      title: "Review Generation",
      description: "Implement strategies to encourage satisfied customers to leave positive reviews."
    },
    {
      title: "Profile Optimization",
      description: "Optimize your Google Business Profile with compelling content and images."
    },
    {
      title: "Review Response Strategy",
      description: "Professional response handling strategies for both positive and negative reviews."
    },
    {
      title: "Rating Analysis",
      description: "In-depth analysis of your current ratings and strategic improvement plans."
    }
  ];

  return (
    <div id="services" className="py-12 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="lg:text-center mb-12"
        >
          <h2 className="text-base text-coral font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-charcoal sm:text-4xl">
            Comprehensive Review Strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-cream p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-charcoal mb-2">{service.title}</h3>
              <p className="text-charcoal opacity-80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;