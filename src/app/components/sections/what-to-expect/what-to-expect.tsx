import React from 'react';

import styles from './what-to-expect.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import QuoteCard from '../../ui/quote-card/quote-card';
import GridCard from './components/grid-card/grid-card';
import PhotoCarousel from '../../ui/photo-carousel/photo-carousel';

const photos = [
  { text: 'Йога и медитации', src: '/what-to-expect/yoga.jpg' },
  { text: 'Дыхательные и энергетические практики', src: '/what-to-expect/breathing.jpg' },
  { text: 'Лекции о связи космоса и человека', src: '/what-to-expect/cosmos.jpg' },
  { text: 'Звукотерапия', src: '/what-to-expect/sound.jpg' },
  { text: 'Трекинги по живописным горным маршрутам', src: '/what-to-expect/trekking.webp' },
  { text: 'Экскурсии по местам силы', src: '/what-to-expect/places.jpg' },
  { text: 'Буддийская атмосфера и индийский колорит', src: '/what-to-expect/buddhism.jpg' },
  { text: 'Душевное общение и теплые вечера', src: '/what-to-expect/music.jpg' }
];

export default function WhatToExpect() {
  return (
    <section id="what-to-expect" className={styles['what-to-expect']}>
      <ContentWrapper>
        <h2>ЧТО ВАС ЖДЕТ НА РЕТРИТЕ</h2>
        <h3 className={styles['what-to-expect__title']}>Программа ретрита насыщенная, но выстроена так, чтобы каждая практика, каждое впечатление и новая информация усваивались мягко и гармонично.</h3>

        <div className={styles['what-to-expect__items']}>
          {/* Desktop Grid */}
          <div className={styles['what-to-expect__grid']}>
            {photos.map((item, index) => (
              <GridCard
                key={index}
                imageSrc={item.src}
                text={item.text}
              />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className={styles['what-to-expect__carousel']}>
            <PhotoCarousel photos={photos.map(item => ({ src: item.src, alt: item.text }))} />
          </div>
        </div>
      </ContentWrapper>

      <QuoteCard>
        <p>Каждый день станет новой историей, наполненной открытиями и незабываемыми моментами.</p>
      </QuoteCard>
    </section>
  );
};
