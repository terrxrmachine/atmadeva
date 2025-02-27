import React from 'react';
import Image from 'next/image';

import styles from './authors.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import QuoteCard from '../../ui/quote-card/quote-card';

const Authors = () => {
  return (
    <section id="authors" className={styles.authors}>
        <Image 
          src="/authors/authors.jpg" 
          alt="Authors Image" 
          width={0} 
          height={0} 
          sizes="100vw"
          quality={100}
          className={styles.authors__img_desktop}
        />
        <ContentWrapper>
          <h2>АВТОРЫ И СОЗДАТЕЛИ РЕТРИТА</h2>
          <Image 
            src="/authors/authors.jpg" 
            alt="Authors Image" 
            width={0} 
            height={0} 
            sizes="100vw"
            quality={100}
            className={styles.authors__img_mob}
          />
          <p><span>Михаил и Елизавета Канц</span> — путешественники, писатели и исследователи восточной философии. Год прожили в Индии, пять месяцев путешествовали по Гималаям, открывая самые захватывающие маршруты. </p>
          <QuoteCard>
            <p className={styles.authors__quote}>«Живя в Гималаях мы поняли: это место меняет сознание, наполняет своей красотой и пробуждает душу. Здесь должен побывать каждый! Так родилась идея этого ретрита.»</p>
          </QuoteCard>
        </ContentWrapper>
    </section>
  );
};

export default Authors;
