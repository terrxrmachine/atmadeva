import React from 'react';

import styles from './who-is-it-for.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';

const WhoIsItFor = () => {
  return (
    <section id="who-is-it-for" className={styles['who-is-it-for']}>
      <ContentWrapper>
        <h2>КОМУ ПОДОЙДЕТ ЭТОТ РЕТРИТ</h2>

        <div className={styles['who-is-it-for__list']}>
          <p>Хочет перезагрузиться и почувствовать внутреннюю гармонию</p>
          <p>Любит природу и мечтает увидеть Гималаи во всей красе </p>
          <p>Готов к мягким практикам без сложных нагрузок</p>
          <p>Открыт к новому, самопознанию и духовным инсайтам</p>
        </div>
      </ContentWrapper>

      <div>
        <p>Неважно, есть ли у вас опыт в йоге и медитации — все практики адаптированы и подходят даже для новичков. Все маршруты и трекинги также среднего уровня сложности. Главное — ваше намерение окунуться в это удивительное путешествие!</p>
      </div>
    </section>
  );
};

export default WhoIsItFor;
