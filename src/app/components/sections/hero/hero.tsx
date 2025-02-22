import React from 'react';
import Image from 'next/image';

import Button from '../../ui/button/button';
import DateLocation from './components/date-location';

import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>

        <h1 className={styles.hero__title}>
          <span className={styles.hero__title_accent}>
            Ретрит
          </span>
          <br />
          Загадочные Гималаи
        </h1>

        <p className={styles.hero__description}>
          Йога, медитации, астрология, звукотерапия и путешествия в горах Гималаев
        </p>
        
        <DateLocation />
        
        <div className={styles.hero__button}>
          <Button />
        </div>
      </div>

      <Image 
        src="/hero.jpg" 
        alt="Hero Image" 
        width={1000} 
        height={1000} 
        className={styles.hero__image} 
      />
    </section>
  );
};

export default Hero;
