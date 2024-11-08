import React from 'react';
import styles from '../styles/components/Hero.module.css';
import Button from './Button';

type HeroProps = {
  heading: string;
  subheading: string;
  ctaText: string;
};

const Hero: React.FC<HeroProps> = ({ heading, subheading, ctaText }) => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.subheading}>{subheading}</p>
      <Button text={ctaText} />
    </div>
  );
};

export default Hero;
