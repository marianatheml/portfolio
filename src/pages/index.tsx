import React from 'react';
import HeroSection from '../sections/HeroSection';

interface IndexProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Index: React.FC<IndexProps> = () => {
  return (
    <>
      <HeroSection />
      </>
  );
};

export default Index;
