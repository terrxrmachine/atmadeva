import React from 'react';
import Image from 'next/image';

import styles from './authors.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import QuoteCard from '../../ui/quote-card/quote-card';

const Authors = () => {
  return (
    <section id="authors" className={styles.authors}>
      <div>
        <ContentWrapper>
          <h2>АВТОРЫ И СОЗДАТЕЛИ РЕТРИТА</h2>
        </ContentWrapper>
        <Image src="/authors.jpg" alt="Authors Image" width={500} height={500}/>
        <p><span>Михаил и Елизавета Канц</span> — путешественники, писатели и исследователи восточной философии. Год прожили в Индии, пять месяцев путешествовали по Гималаям, открывая самые захватывающие маршруты. </p>
      </div>

      <QuoteCard>
        <p className={styles.authors__quote}>«Живя в Гималаях мы поняли: это место меняет сознание, наполняет своей красотой и пробуждает душу. Здесь должен побывать каждый! Так родилась идея этого ретрита.»</p>
      </QuoteCard>
    </section>
  );
};

export default Authors;
