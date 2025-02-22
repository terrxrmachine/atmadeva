import React from 'react';
import Image from 'next/image';

import styles from './what-is-retreat.module.css';

export default function WhatIsRetreat() {
  return (
    <section id="about">
      <div className={styles['what-is-retreat__grid']}>
        <Image src="/retreat.jpg" alt="Retreat Image" width={1000} height={1000}/>
        
        <div>
          <h2>ЧТО ЭТО ЗА РЕТРИТ</h2>
          <h3>Гималаи — одно из самых загадочных и величественных мест на Земле. </h3>
          <p>Эти горы, хранящие тайны веков, издавна притягивают писателей, художников, философов и искателей истины со всего мира. Их тайны и чистота открываются тем, кто приходит с открытым сердцем.</p>
          <p><span>Наш ретрит</span> — это путешествие не только в мир удивительной природы и культуры, но и в духовный, внутренний мир каждого из нас. Здесь вы сможете глубже почувствовать свое тело, услышать голос души и раскрыть новые грани сознания. </p>
        </div>
      </div>

      <center className={styles['what-is-retreat__quote']}>
        <p>О Гималаях говорят: <span className={styles['what-is-retreat__quote_accent']}>«Забудьте, кем вы были до — это место изменит вас навсегда»</span>.</p>
        <p>Мы отправляемся в путь, который оставит след любви, вдохновения и внутреннего преображения.</p>
      </center>
    </section>
  );
};