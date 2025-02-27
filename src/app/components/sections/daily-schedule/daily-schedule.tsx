import React from 'react';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import styles from './daily-schedule.module.css';

export default function DailySchedule() {
  return (
    <section id="daily-schedule">
      <div className={styles['daily-schedule__grid']}>
        <ContentWrapper>
          <h2>КАК ПРОХОДИТ ДЕНЬ</h2>

          <ul className={styles['daily-schedule__list']}>
            <li className={styles['daily-schedule__list-item']}>
              <span>☀ Утро</span> — пробуждение с первыми лучами солнца, йога и дыхательные практики
            </li>
            <li className={styles['daily-schedule__list-item']}>
              <span>☕ Завтрак</span> — полезная и вкусная аюрведическая еда
            </li>
            <li className={styles['daily-schedule__list-item']}>
              <span>🏔️ Дневное приключение</span> — трекинги, восхождения к водопадам, посещение мест силы и древних храмов, прогулки по окрестностям
            </li>
            <li className={styles['daily-schedule__list-item']}>
              <span>🥗 Обед</span> — время для отдыха и общения
            </li>
            <li className={styles['daily-schedule__list-item']}>
              <span>🎤 Дневная программа</span> — лекции, звукотерапия, чайные церемонии или свободное время
            </li>
            <li className={styles['daily-schedule__list-item']}>
              <span>🍲 Ужин</span> — теплая атмосфера и обмен впечатлениями
            </li>
            <li className={styles['daily-schedule__list-item']}>
              <span>🌙 Вечерняя медитация</span> — мягкое завершение дня и подготовка ко сну
            </li>
          </ul>

          <p className={styles['daily-schedule__text']}>Программа может меняться в зависимости от потребностей группы и погоды, чтобы каждый участник получил максимум от путешествия.</p>
        </ContentWrapper>

        <video src="/daily-schedule/daily-schedule.mp4" autoPlay loop muted className={styles['daily-schedule__video']} />
      </div>


    </section>
  );
}
