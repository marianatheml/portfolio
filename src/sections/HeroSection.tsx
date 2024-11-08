import React from 'react';
import Hero from '../components/Hero';

const HeroSection: React.FC = () => {
  return (
    <section id="hero">
      <Hero 
        heading="Hi, I'm Mariana Theml!" 
        subheading="I'm a front-end developer who loves building responsive, user-focused applications and bringing creative solutions to life." 
        ctaText="My Resume" 
      />
    </section>
  );
};

export default HeroSection;
