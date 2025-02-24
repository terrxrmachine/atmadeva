import React from 'react';

import styles from './location.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import PhotoCarousel from '../../ui/photo-carousel/photo-carousel';

const photos = [
  {
    src: '/location/1.jpg',
    alt: 'Фото локации 1'
  },
  {
    src: '/location/2.jpg',
    alt: 'Фото локации 2'
  },
  {
    src: '/location/3.png',
    alt: 'Фото локации 3'
  },
  {
    src: '/location/4.png',
    alt: 'Фото локации 2'
  },
  {
    src: '/location/5.png',
    alt: 'Фото локации 2'
  },
  {
    src: '/location/6.jpg',
    alt: 'Фото локации 2'
  },
  {
    src: '/location/7.jpg',
    alt: 'Фото локации 2'
  },
  {
    src: '/location/8.jpg',
    alt: 'Фото локации 2'
  },
  {
    src: '/location/9.jpg',
    alt: 'Фото локации 2'
  },
  {
    src: '/location/10.jpg',
    alt: 'Фото локации 2'
  },
];

const Location = () => {
  return (
    <section id="location" className={styles.location}>
      <ContentWrapper>
        <h2>ЛОКАЦИЯ И УСЛОВИЯ</h2>
        <PhotoCarousel photos={photos} />
        <p>Адрес: Дхарамсала, Индия</p>
      </ContentWrapper>
    </section>
  );
};

export default Location;
