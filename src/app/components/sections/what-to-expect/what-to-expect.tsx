import React from 'react';

import styles from './what-to-expect.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import QuoteCard from '../../ui/quote-card/quote-card';
import GridCard from './components/grid-card/grid-card';
import Carousel from '../../ui/carousel/carousel';

const gridItems = [
  { text: 'Йога и медитации', imageSrc: '/what-to-expect/yoga.jpg' },
  { text: 'Дыхательные и энергетические практики', imageSrc: '/what-to-expect/breathing.jpg' },
  { text: 'Лекции о связи космоса и человека', imageSrc: '/what-to-expect/cosmos.jpg' },
  { text: 'Звукотерапия', imageSrc: '/what-to-expect/sound.jpg' },
  { text: 'Трекинги по живописным горным маршрутам', imageSrc: '/what-to-expect/trekking.jpg' },
  { text: 'Экскурсии по местам силы', imageSrc: '/what-to-expect/places.jpg' },
  { text: 'Буддийская атмосфера и индийский колорит', imageSrc: '/what-to-expect/buddhism.jpg' },
  { text: 'Душевное общение и теплые музыкальные вечера', imageSrc: '/what-to-expect/music.jpg' }
];

const WhatToExpect = () => {
  return (
    <section id="what-to-expect">
      <ContentWrapper>
        <h2>ЧТО ВАС ЖДЕТ НА РЕТРИТЕ</h2>
        <h3>Программа ретрита насыщенная, но выстроена так, чтобы каждая практика, каждое впечатление и новая информация усваивались мягко и гармонично.</h3>

        <div className={styles['what-to-expect__items']}>
          {/* Desktop Grid */}
          <div className={styles['what-to-expect__grid']}>
            {gridItems.map((item, index) => (
              <GridCard
                key={index}
                imageSrc={item.imageSrc}
                text={item.text}
              />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className={styles['what-to-expect__carousel']}>
            <Carousel
              items={gridItems.map((item, index) => (
                <GridCard
                  key={index}
                  imageSrc={item.imageSrc}
                  text={item.text}
                />
              ))}
            />
          </div>
        </div>
      </ContentWrapper>

      <QuoteCard>
        <p>Каждый день станет новой историей, наполненной открытиями и незабываемыми моментами.</p>
      </QuoteCard>
    </section>
  );
};

export default WhatToExpect;
