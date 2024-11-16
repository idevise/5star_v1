import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      title: "Review Management Strategy",
      description: "Proactively manage and respond to customer reviews across platforms.",
      icon: "⭐"
    },
    {
      title: "Rating Optimization",
      description: "Strategic approaches to improve your overall star rating.",
      icon: "📈"
    },
    {
      title: "Profile Enhancement",
      description: "Optimize your Google Business Profile for maximum visibility.",
      icon: "🎯"
    }
  ];

  return (
    <div id="features" className="py-12 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="lg:text-center"
        >
          <h2 className="text-base text-coral font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-charcoal sm:text-4xl">
            Better Reviews, Better Business
          </p>
        </motion.div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-off-white p-6 rounded-lg shadow-sm">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-medium text-charcoal">{feature.title}</h3>
                  <p className="mt-2 text-base text-charcoal opacity-80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;