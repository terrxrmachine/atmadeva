"use client";

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
            <Image src="/icons/spa.png" alt="woman" width={500} height={500} className={styles['who-is-it-for__item-img']} />
            <p>Хочет перезагрузиться <br /> и почувствовать внутреннюю гармонию</p>
          </div>

          <div className={styles['who-is-it-for__item']}>
            <Image src="/icons/retreat.png" alt="woman" width={500} height={500} className={styles['who-is-it-for__item-img']} />
            <p>Любит природу и мечтает увидеть Гималаи во всей красе </p>
          </div>

          <div className={styles['who-is-it-for__item']}>
            <Image src="/icons/yoga-pose.png" alt="woman" width={500} height={500} className={styles['who-is-it-for__item-img']} />
            <p>Хочет мягких практик без сложных нагрузок</p>
          </div>

          <div className={styles['who-is-it-for__item']}>
            <Image src="/icons/insight.png" alt="woman" width={500} height={500} className={styles['who-is-it-for__item-img']} />
            <p>Открыт к новому, самопознанию <br /> и духовным инсайтам</p>
          </div>
        </div>
      </ContentWrapper>
      <center className={styles['who-is-it-for__video-wrapper']}>
          {/* <Image src="/who-is-it-for/wiif_1.gif" alt="woman" width={500} height={500} className={styles['who-is-it-for__video']}/> */}
          <video src="/who-is-it-for/wiif.webm" webkit-playsinline="true" autoPlay loop muted playsInline onCanPlayThrough={(e) => (e.target as HTMLVideoElement).play()} className={styles['who-is-it-for__video']} />
          <div className={styles['who-is-it-for__video-quote']}>
            <p className={styles['who-is-it-for__video-text']}>Неважно, есть ли у вас опыт <br /> в йоге и медитации — все практики адаптированы <br /> и подходят даже для новичков. <br /> Все маршруты и трекинги также среднего уровня сложности. <br /> Главное — ваше намерение окунуться в это удивительное путешествие!</p>
          </div>
      </center>

    </section>
  );
};

export default WhoIsItFor;
