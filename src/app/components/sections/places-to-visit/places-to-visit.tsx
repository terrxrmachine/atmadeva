import React from 'react';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import styles from './places-to-visit.module.css';

const PlacesToVisit = () => {
  return (
    <section id="places-to-visit" className={styles['places-to-visit']}>
      <ContentWrapper>
        <h2>МЕСТА, КОТОРЫЕ МЫ ПОСЕТИМ</h2>

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
      </ContentWrapper>
    </section>
  );
};

export default PlacesToVisit;
