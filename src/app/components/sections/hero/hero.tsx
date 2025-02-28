"use client"

import React from 'react';
import Image from 'next/image';

import styles from './hero.module.css';

import Button from '../../ui/button/button';
import DateLocation from './components/date-location';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.hero}>
      <Image 
        src="/hero.jpg" 
        alt="Hero Image" 
        width={1000} 
        height={1000} 
        className={styles.hero__image} 
        loading="lazy"
      />
      
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
          <Button onClick={scrollToAbout}>Узнать больше</Button>
        </div>
      </div>
    </div>
  );
};
