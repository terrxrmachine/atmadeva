"use client";
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
              <span>🌙 Вечерняя медитация</span> — мягкое завершение дня <br /> и подготовка ко сну
            </li>
          </ul>

          <p className={styles['daily-schedule__text']}>Программа может меняться в зависимости от потребностей группы и погоды, чтобы каждый участник получил максимум <br /> от путешествия.</p>
        </ContentWrapper>

        {/* <Image src="/daily-schedule/daily-schedule_1.gif" alt="woman" width={500} height={500} className={styles['daily-schedule__video']} /> */}
        <video src="/daily-schedule/daily-schedule.webm" webkit-playsinline="true" autoPlay loop muted playsInline onCanPlayThrough={(e) => (e.target as HTMLVideoElement).play()} className={styles['daily-schedule__video']} />
      </div>
    </section>
  );
}
