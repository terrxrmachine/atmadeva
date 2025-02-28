import React from 'react';
import Image from 'next/image';

import styles from './who-is-it-for.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';

const WhoIsItFor = () => {
  return (
    <section id="who-is-it-for" className={styles['who-is-it-for']}>
      <ContentWrapper>
        <h2>КОМУ ПОДОЙДЕТ ЭТОТ РЕТРИТ</h2>

        <div className={styles['who-is-it-for__list']}>
          <div className={styles['who-is-it-for__item']}>
            <Image src="/icons/spa.png" alt="woman" width={500} height={500} className={styles['who-is-it-for__item-img']} loading="lazy"/>
            <p>Хочет перезагрузиться и почувствовать внутреннюю гармонию</p>
          </div>

          <div className={styles['who-is-it-for__item']}>
            <Image src="/icons/retreat.png" alt="woman" width={500} height={500} className={styles['who-is-it-for__item-img']} loading="lazy"/>
            <p>Любит природу и мечтает увидеть Гималаи во всей красе </p>
          </div>

          <div className={styles['who-is-it-for__item']}>
            <Image src="/icons/yoga-pose.png" alt="woman" width={500} height={500} className={styles['who-is-it-for__item-img']} loading="lazy"/>
            <p>Готов к мягким практикам без сложных нагрузок</p>
          </div>

          <div className={styles['who-is-it-for__item']}>
            <Image src="/icons/insight.png" alt="woman" width={500} height={500} className={styles['who-is-it-for__item-img']} loading="lazy"/>
            <p>Открыт к новому, самопознанию и духовным инсайтам</p>
          </div>
        </div>

        <div className={styles['who-is-it-for__video-wrapper']}>
          <video src="/who-is-it-for/wiif.mp4" autoPlay loop muted className={styles['who-is-it-for__video']} />
          <div className={styles['who-is-it-for__video-quote']}>
            <p className={styles['who-is-it-for__video-text']}>Неважно, есть ли у вас опыт в йоге и медитации — все практики адаптированы и подходят даже для новичков. Все маршруты и трекинги также среднего уровня сложности. Главное — ваше намерение окунуться в это удивительное путешествие!</p>
          </div>
        </div>
      </ContentWrapper>


    </section>
  );
};

export default WhoIsItFor;
