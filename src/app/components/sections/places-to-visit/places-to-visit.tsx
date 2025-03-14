import React from 'react';

import styles from './places-to-visit.module.css';

import PhotoCarousel from '../../ui/photo-carousel/photo-carousel';
import ContentWrapper from '../../ui/content-wrapper/content-wrapper';

const photos = [
  {
    src: '/places-to-visit/1.webp',
    alt: 'Фото локации 1'
  },
  {
    src: '/places-to-visit/2.webp',
    alt: 'Фото локации 2'
  },
  {
    src: '/places-to-visit/3.webp',
    alt: 'Фото локации 3'
  },
  {
    src: '/places-to-visit/4.webp',
    alt: 'Фото локации 4'
  },
  {
    src: '/places-to-visit/5.webp',
    alt: 'Фото локации 5'
  },
  {
    src: '/places-to-visit/6.webp',
    alt: 'Фото локации 6'
  },
  {
    src: '/places-to-visit/7.webp',
    alt: 'Фото локации 7'
  },
  {
    src: '/places-to-visit/8.webp',
    alt: 'Фото локации 8'
  },
  {
    src: '/places-to-visit/9.webp',
    alt: 'Фото локации 9'
  },
  {
    src: '/places-to-visit/10.webp',
    alt: 'Фото локации 10'
  },
  {
    src: '/places-to-visit/11.webp',
    alt: 'Фото локации 11'
  },
  {
    src: '/places-to-visit/12.webp',
    alt: 'Фото локации 12'
  },
];

const PlacesToVisit = () => {
  return (
    <section id="places-to-visit" className={styles['places-to-visit']}>
      <ContentWrapper>
        <h2>МЕСТА, КОТОРЫЕ МЫ ПОСЕТИМ</h2>

        {/* Desktop Grid */}
        {/* <div className={styles['places-to-visit__grid']}>
          {placesData.map((place, index) => (
            <PlaceCard
              key={index}
              number={place.number}
              title={place.title}
              description={place.description}
              imageSrc={place.imageSrc}
            />
          ))}
        </div> */}

        {/* Mobile List */}
        <div className={styles['places-to-visit__list']}>
          <div className={styles['places-to-visit__list_item']}>
            <h3 className={styles['places-to-visit__list_title']}><label htmlFor="1">1</label> Верхний Баксу</h3>
            <p>— прогулка по старинным улочкам, посещение базара, храм у источника и трек к водопаду</p>
          </div>
          <div className={styles['places-to-visit__list_item']}>
            <h3 className={styles['places-to-visit__list_title']}><label htmlFor="2">2</label> Водопад Галлу, Дарамкот</h3>
            <p>— центр медитаций, горные тропы, кафе с фантастическими закатами</p>
          </div>
          <div className={styles['places-to-visit__list_item']}>
            <h3 className={styles['places-to-visit__list_title']}><label htmlFor="3">3</label> Маклеод Гандж</h3>
            <p>— резиденция Далай-Ламы, буддистские центры, тибетские базары</p>
          </div>
          <div className={styles['places-to-visit__list_item']}>
            <h3 className={styles['places-to-visit__list_title']}><label htmlFor="4">4</label> Деревня Надди</h3>
            <p>— знакомство с традиционной индийской культурой, смотровые площадки на закаты</p>
          </div>
          <div className={styles['places-to-visit__list_item']}>
            <h3 className={styles['places-to-visit__list_title']}><label htmlFor="5">5</label> Трекинг на Триунд</h3>
            <p>— восхождение на плато с панорамными видами на Гималаи</p>
          </div>
          <div className={styles['places-to-visit__list_item']}>
            <h3 className={styles['places-to-visit__list_title']}><label htmlFor="6">6</label> Нижняя Дхарамсала</h3>
            <p>— монастырь Гьюто, тибетский институт Норбулинка и чайные плантации Кангра</p>
          </div>
        </div>

        <div className={styles['places-to-visit__photo-carousel']}>
          <PhotoCarousel showCaption={false} photos={photos} />
        </div>
      </ContentWrapper>
    </section>
  );
};

export default PlacesToVisit;
