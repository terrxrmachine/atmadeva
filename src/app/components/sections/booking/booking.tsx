import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './booking.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import SMMButton from '../../ui/smm-button/smm-button';
import { Phone, Mail } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import Button from '../../ui/button/button';

const Booking = () => {
  return (
    <section id="booking" className={styles.booking}>
      <ContentWrapper>
        <h2>КАК ЗАБРОНИРОВАТЬ МЕСТО</h2>
        <div className={styles.booking__instruction}>
          <div>
            <h3>Заполните форму регистрации ниже</h3>
            <p>Введите свое ФИО и номер для связи в любом из этих мессенджеров: Telegram, WhatsApp</p>
          </div>
          <div>
            <h3>Ожидайте ответ от организатора в ваш мессенджер</h3>
            <p>Мы свяжемся с вами в ближайшее время</p>
          </div>
          <div>
            <h3>Внесите предоплату 50%</h3>
            <p>Реквизиты вам отправит организатор Елизавета Канц</p>
          </div>
          <div>
            <h3>Ваше место забронировано</h3>
            <p>За месяц до начала мы добавим вас в общий чат участников в Телеграм. Куда придет информация как подготовиться, что взять с собой, как будет организован трансфер и другое.</p>
          </div>
        </div>

        <div className={styles.booking__contacts}>
          <div className={styles.booking__contact_block}>
            <div className={styles.contact__photo}>
              <Image 
                src="/booking/liz.jpg" 
                alt="Елизавета" 
                width={200} 
                height={200}
                className={styles.contact__image}
              />
            </div>

            <div className={styles.contact__info}>
              <Link href="tel:+79168199227" className={styles.contact__link}>
                <p className={styles.contact__text}>
                  <Phone />
                  +7 (916) 819-92-27
                </p>
              </Link>
              
              <Link href="mailto:kusova.lizaveta@gmail.com" className={styles.contact__link}>
                <p className={styles.contact__text}>
                  <Mail />
                  kusova.lizaveta@gmail.com
                </p>
              </Link>

              <div className={styles.contact__social}>
                <SMMButton 
                  type="whatsapp" 
                  href="https://wa.me/79168199227" 
                  size="medium"
                />
                <SMMButton 
                  type="telegram" 
                  href="https://t.me/elizaveta_kantz"
                  size="medium"
                />
              </div>
            </div>
          </div>

          <div className={styles.booking__form}>
            <Input type="text" placeholder="Имя" className={styles.booking__input} />
            <Input type="email" placeholder="Email/Telegram/WhatsApp" className={styles.booking__input} />
            <Input type="tel" placeholder="Телефон" className={styles.booking__input} />
            {/* <Textarea placeholder="Сообщение"/> */}
            <Button>Отправить</Button>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Booking;
