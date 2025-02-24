import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './booking.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import SMMButton from '../../ui/smm-button/smm-button';
import { Phone, Mail } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
// import { Textarea } from '@/app/components/ui/textarea';
import Button from '../../ui/button/button';

const Booking = () => {
  return (
    <section id="booking" className={styles.booking}>
      <ContentWrapper>
        <h2>КАК ЗАБРОНИРОВАТЬ МЕСТО</h2>
        <div className={styles.booking__instruction}>тут инструкция</div>

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
              <Link href="tel:+91 123 456 7890" className={styles.contact__link}>
                <p className={styles.contact__text}>
                  <Phone />
                  +91 123 456 7890
                </p>
              </Link>
              
              <Link href="mailto:atmadeva@example.com" className={styles.contact__link}>
                <p className={styles.contact__text}>
                  <Mail />
                  atmadeva@example.com
                </p>
              </Link>

              <div className={styles.contact__social}>
                <SMMButton 
                  type="whatsapp" 
                  href="https://wa.me/911234567890" 
                  size="medium"
                />
                <SMMButton 
                  type="telegram" 
                  href="https://t.me/atmadeva"
                  size="medium"
                />
              </div>
            </div>
          </div>

          <div className={styles.booking__form}>
            <Input type="text" placeholder="Имя" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Телефон" />
            {/* <Textarea placeholder="Сообщение"/> */}
            <Button>Отправить</Button>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Booking;
