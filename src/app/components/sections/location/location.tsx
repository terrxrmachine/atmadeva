import React from 'react';

import styles from './location.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import PhotoCarousel from '../../ui/photo-carousel/photo-carousel';

const photos = [
  {
    src: '/location/1loc.webp',
    alt: 'Фото локации 1'
  },
  {
    src: '/location/2loc.webp',
    alt: 'Фото локации 2'
  },
  {
    src: '/location/3loc.webp',
    alt: 'Фото локации 3'
  },
  {
    src: '/location/4loc.webp',
    alt: 'Фото локации 4'
  },
  {
    src: '/location/5loc.webp',
    alt: 'Фото локации 5'
  },
  {
    src: '/location/6loc.webp',
    alt: 'Фото локации 6'
  },
  {
    src: '/location/7loc.webp',
    alt: 'Фото локации 7'
  },
  {
    src: '/location/8loc.webp',
    alt: 'Фото локации 8'
  },
  {
    src: '/location/9loc.webp',
    alt: 'Фото локации 9'
  },
  {
    src: '/location/10loc.webp',
    alt: 'Фото локации 10'
  },
  {
    src: '/location/11loc.webp',
    alt: 'Фото локации 11'
  },
  {
    src: '/location/12loc.webp',
    alt: 'Фото локации 12'
  },
  {
    src: '/location/13loc.webp',
    alt: 'Фото локации 13'
  },
  {
    src: '/location/14loc.webp',
    alt: 'Фото локации 14'
  },
  {
    src: '/location/15loc.webp',
    alt: 'Фото локации 15'
  },
];

const Location = () => {
  return (
    <section id="location" className={styles.location}>
      <ContentWrapper>
        <h2>ЛОКАЦИЯ И УСЛОВИЯ</h2>
        <div className={styles['location__info']}>
          <p>Наш ретрит пройдет в живописном регионе Химачал-Прадеш, <br className={styles.location__br}/><span>Дхарамсала</span> — месте силы и духовных практик. </p>
          <p>Мы разместимся в ретритном центре <span>Arahantas</span>, где вас ждут уютные двухместные номера <br className={styles.location__br}/> и сбалансированное трехразовое питание: саттвическая, индийская <br /> и вегетарианская кухня.</p>
        </div>
        <PhotoCarousel showCaption={false} photos={photos} />
      </ContentWrapper>
    </section>
  );
};

export default Location;

// export default function Location() 
