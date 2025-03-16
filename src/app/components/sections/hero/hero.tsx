"use client"

import React from 'react';
import Image from 'next/image';

import styles from './hero.module.css';

import Button from '../../ui/button/button';
import DateLocation from './components/date-location';

export default function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className={styles.hero}>
            <Image 
        src="/hero.jpg" 
        alt="Hero Image" 
        width={1000} 
        height={1000} 
        className={styles.hero__image_mob} 
        priority
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
          Йога, медитации, астрология, звукотерапия <br /> и путешествия в горах Гималаев
        </p>

        <DateLocation />

        <div className={styles.hero__button}>
          <Button onClick={scrollToBooking}>Забронировать место</Button>
        </div>
      </div>
      <Image 
        src="/hero.jpg" 
        alt="Hero Image" 
        width={1000} 
        height={1000} 
        className={styles.hero__image} 
        priority
      />
    </div>
  );
};
