import React from 'react';
import styles from '../styles/components/Button.module.css';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.circle}/>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
