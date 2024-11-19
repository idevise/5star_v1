import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CalculatorInput {
  currentRating: string;
  currentReviews: string;
  desiredRating: string;
}

const StarRatingCalculator = () => {
  const [input, setInput] = useState<CalculatorInput>({
    currentRating: '',
    currentReviews: '',
    desiredRating: '',
  });
  const [result, setResult] = useState<number | null>(null);
  const [focused, setFocused] = useState({
    currentRating: false,
    currentReviews: false,
    desiredRating: false,
  });

  const calculateRequiredReviews = () => {
    const currentRating = parseFloat(input.currentRating || '3.9');
    const currentReviews = parseInt(input.currentReviews || '10');
    const desiredRating = parseFloat(input.desiredRating || '4.5');

    if (isNaN(currentRating) || isNaN(currentReviews) || isNaN(desiredRating)) {
      return;
    }

    // New calculation formula
    const requiredReviews = Math.ceil(
      (currentReviews * (desiredRating - currentRating)) / (5 - desiredRating)
    );

    setResult(Math.max(1, requiredReviews));
  };

  const resetCalculator = () => {
    setInput({
      currentRating: '',
      currentReviews: '',
      desiredRating: '',
    });
    setResult(null);
    setFocused({
      currentRating: false,
      currentReviews: false,
      desiredRating: false,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof CalculatorInput) => {
    const value = e.target.value;
    if (field === 'currentRating' || field === 'desiredRating') {
      if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 5)) {
        setInput(prev => ({ ...prev, [field]: value }));
      }
    } else {
      if (value === '' || parseInt(value) >= 0) {
        setInput(prev => ({ ...prev, [field]: value }));
      }
    }
  };

  const handleFocus = (field: keyof CalculatorInput) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: keyof CalculatorInput) => {
    setFocused(prev => ({ ...prev, [field]: false }));
    if (input[field] === '') {
      const defaultValues = {
        currentRating: '3.9',
        currentReviews: '10',
        desiredRating: '4.5'
      };
      setInput(prev => ({ ...prev, [field]: defaultValues[field] }));
    }
  };

  return (
    <motion.div
      id="calculator"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-12 border border-charcoal border-opacity-20 rounded-lg overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
        {/* Left Column - Copy */}
        <div className="space-y-6 text-left self-start">
          <p className="text-lg text-charcoal leading-relaxed font-semibold">
            Use the Star Calculator to figure out how many reviews your brand needs to increase your average rating, overall search rank, and acquire more customers.
          </p>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-charcoal">Did you know?</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <span className="text-coral">•</span>
                <span className="text-charcoal opacity-80">63.6% of consumers check reviews on Google before visiting a business</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-coral">•</span>
                <span className="text-charcoal opacity-80">A positive online reputation is of the strongest marketing assets a business can have</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-coral">•</span>
                <span className="text-charcoal opacity-80">94% of consumers will avoid a business due to its negative online reviews</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Calculator */}
        <div className="bg-cream rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-coral rounded-full p-3">
              <svg className="w-6 h-6 text-cream" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal text-left">Star Rating Calculator</h3>
              <p className="text-charcoal opacity-60 text-left mt-1">
                Calculate how many 5-star Google reviews your business needs to improve star rating/rank.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="currentRating" className="block text-sm font-medium text-charcoal mb-1 text-left">
                Current Google rating
              </label>
              <input
                type="number"
                id="currentRating"
                min="0"
                max="5"
                step="0.1"
                value={focused.currentRating ? input.currentRating : input.currentRating || ''}
                onChange={(e) => handleInputChange(e, 'currentRating')}
                onFocus={() => handleFocus('currentRating')}
                onBlur={() => handleBlur('currentRating')}
                placeholder="3.9"
                className="w-full px-3 py-2 border border-charcoal border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-coral text-charcoal placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="currentReviews" className="block text-sm font-medium text-charcoal mb-1 text-left">
                Current number of Google reviews
              </label>
              <input
                type="number"
                id="currentReviews"
                min="0"
                value={focused.currentReviews ? input.currentReviews : input.currentReviews || ''}
                onChange={(e) => handleInputChange(e, 'currentReviews')}
                onFocus={() => handleFocus('currentReviews')}
                onBlur={() => handleBlur('currentReviews')}
                placeholder="10"
                className="w-full px-3 py-2 border border-charcoal border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-coral text-charcoal placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="desiredRating" className="block text-sm font-medium text-charcoal mb-1 text-left">
                Desired Google rating
              </label>
              <input
                type="number"
                id="desiredRating"
                min="0"
                max="5"
                step="0.1"
                value={focused.desiredRating ? input.desiredRating : input.desiredRating || ''}
                onChange={(e) => handleInputChange(e, 'desiredRating')}
                onFocus={() => handleFocus('desiredRating')}
                onBlur={() => handleBlur('desiredRating')}
                placeholder="4.5"
                className="w-full px-3 py-2 border border-charcoal border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-coral text-charcoal placeholder-gray-400"
              />
            </div>

            <button
              onClick={result === null ? calculateRequiredReviews : resetCalculator}
              className="w-full bg-coral text-cream py-3 rounded-md hover:bg-charcoal transition-colors font-medium"
            >
              {result === null ? 'Calculate my rating' : 'Reset calculator'}
            </button>

            <AnimatePresence>
              {result !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <div className="p-4 bg-charcoal bg-opacity-5 rounded-md">
                    <p className="text-charcoal font-medium">
                      You need approximately <span className="text-coral font-bold">{result}</span> new 5-star reviews to reach your desired rating.
                    </p>
                  </div>
                  
                  <motion.a
                    href="#contact"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="block w-full bg-charcoal text-cream py-3 px-6 rounded-md text-center font-medium hover:bg-coral transition-colors"
                    style={{
                      animation: 'pulse 2s infinite'
                    }}
                  >
                    Help Me Get {result} 5-Star Reviews
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StarRatingCalculator;