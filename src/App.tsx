import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    const stars = document.querySelectorAll('.star');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    stars.forEach(star => observer.observe(star));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="star star-1" />
      <div className="star star-2" />
      <div className="star star-3" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;