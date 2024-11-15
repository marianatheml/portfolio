import Image from 'next/image';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import HeroImg from '../../public/images/hero_image.png';
import Button from '../components/Button';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/Hero.module.css';

const HeroSection: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const heroText = {
    subheading: "I'm Mariana Theml, a full-stack web developer passionate about creating responsive, user-centered applications. I focus on writing clean, efficient code and delivering solutions that make a real impact. ",
    ctaText: 'contact me →',
  }; 
  
  return (
    <div className={styles.heroContainer}>
      <div className={styles.txtSection}>
      <h1 className={styles.heading}>
          Driven by code, focused on{' '}
          <span className={styles.highlight}>impact</span>.
          I build solutions that users love.
        </h1>
        <p className={styles.subheading}>{heroText.subheading}</p>
        <Button text={heroText.ctaText} />
      </div>
      <div className={styles.imgSection}>
        <Image className={styles.image}
          src={HeroImg}
          alt="Photo of Myself"
        />
      </div>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
      </button>
    </div>
  );
};

export default HeroSection;