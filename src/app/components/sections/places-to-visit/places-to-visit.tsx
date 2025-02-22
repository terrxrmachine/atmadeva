import React from 'react';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import styles from './places-to-visit.module.css';

const PlacesToVisit = () => {
  return (
    <section id="places-to-visit" className={styles['places-to-visit']}>
      <ContentWrapper>
        <h2>МЕСТА, КОТОРЫЕ МЫ ПОСЕТИМ</h2>

        <ol>
          <li>
            <span>Верхний Баксу</span> — прогулка по старинным улочкам, посещение базара, храм у источника и трек к водопаду
          </li>
          <li>
            <span>Водопад Галлу, Дарамкот</span> — центр медитаций, горные тропы, кафе с фантастическими закатами
          </li>
          <li>
            <span>Маклеод Гандж</span> — резиденция Далай-Ламы, буддистские центры, тибетские базары
          </li>
          <li>
            <span>Деревня Надди</span> — знакомство с традиционной индийской культурой, смотровые площадки на закаты
          </li>
          <li>
            <span>Трекинг на Триунд</span> — восхождение на плато с панорамными видами на Гималаи
          </li>
          <li>
            <span>Нижняя Дхарамсала</span> — монастырь Гьюто, тибетский институт Норбулинка и чайные плантации Кангра
          </li>
        </ol>
      </ContentWrapper>
    </section>
  );
};

export default PlacesToVisit;
