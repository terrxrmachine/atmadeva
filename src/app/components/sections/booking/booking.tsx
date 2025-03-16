"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './booking.module.css';
import ContentWrapper from '../../ui/content-wrapper/content-wrapper';
import SMMButton from '../../ui/smm-button/smm-button';
import { Phone, Mail } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import Button from '../../ui/button/button';

const Booking = () => {
  // Состояния для полей формы
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [selectedMessenger, setSelectedMessenger] = useState('telegram'); // По умолчанию выбран Telegram

  // Функция для отправки данных в Telegram
  const sendToTelegram = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Проверка заполнения полей
    if (!name || !contact || !phone) {
      setSubmitStatus({ type: 'error', message: 'Пожалуйста, заполните все поля' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Формируем сообщение
      const messenger = selectedMessenger === 'telegram' ? 'Telegram' : 'WhatsApp';
      const message = `🔔 Новая заявка на бронирование!\n\n👤 Имя: ${name}\n📱 E-mail: ${contact}\n☎️ ${messenger}: ${phone}`;
      
      // Отправка данных на ваш сервер/API endpoint
      const response = await fetch('/api/send-to-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          contact,
          phone,
          messenger,
          message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Заявка успешно отправлена! Мы скоро свяжемся с вами.' });
        // Сбросить форму
        setName('');
        setContact('');
        setPhone('');
      } else {
        throw new Error(data.message || 'Произошла ошибка при отправке заявки');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus({ type: 'error', message: 'Не удалось отправить заявку. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Получаем placeholder в зависимости от выбранного мессенджера
  const getPhonePlaceholder = () => {
    return selectedMessenger === 'telegram' ? 'Номер или тэг для Telegram' : 'Номер для WhatsApp';
  };

  return (
    <section id="booking" className={styles.booking}>
      <ContentWrapper>
        <h2>КАК ЗАБРОНИРОВАТЬ МЕСТО</h2>
        <div className={styles.booking__instruction}>
          <div className={styles.booking__instruction_item}>
            <h3 className={styles.booking__instruction_title}><label htmlFor="1">1</label> Заполните форму регистрации ниже</h3>
            <p>Введите свое ФИО и номер для связи в любом из этих мессенджеров: Telegram, WhatsApp</p>
          </div>
          <div className={styles.booking__instruction_item}>
            <h3 className={styles.booking__instruction_title}><label htmlFor="2">2</label> Ожидайте ответ от организатора в ваш мессенджер</h3>
            <p>Мы свяжемся с вами в ближайшее время</p>
          </div>
          <div className={styles.booking__instruction_item}>
            <h3 className={styles.booking__instruction_title}><label htmlFor="3">3</label> Внесите предоплату 50%</h3>
            <p>Реквизиты вам отправит организатор Елизавета Канц</p>
          </div>
          <div className={styles.booking__instruction_item}>
            <h3 className={styles.booking__instruction_title}><label htmlFor="4">4</label> Ваше место забронировано</h3>
            <p>За месяц до начала мы добавим вас в общий чат участников в Телеграм. Куда придет информация как подготовиться, что взять с собой, как будет организован трансфер и другое.</p>
          </div>
        </div>
        <div className={styles.booking__contacts}>
          <div className={styles.booking__contact_block}>
            <p>Написать Елизавете</p>
            <div className={styles.contact__photo}>
              <Image
                src="/booking/liz.webp"
                alt="Елизавета"
                width={100}
                height={100}
                className={styles.contact__image}
                priority
              />
            </div>
            <div className={styles.contact__info}>
              <Link href="tel:+79168199227" className={styles.contact__link}>
                <p className={styles.contact__text}>
                  <Phone className={styles.contact__icon}/>
                  +7 (916) 819-92-27
                </p>
              </Link>
              <Link href="mailto:elizaveta.kantz@yandex.com" className={styles.contact__link}>
                <p className={styles.contact__text}>
                  <Mail className={styles.contact__icon}/>
                  elizaveta.kantz<br className={styles.contact__br}/>@yandex.com
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
          <form className={styles.booking__form} onSubmit={sendToTelegram}>
            <Input 
              type="text" 
              placeholder="Имя" 
              className={styles.booking__input} 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input 
              type="text" 
              placeholder="Email" 
              className={styles.booking__input} 
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            
            {/* Переключатель мессенджеров */}
            <div className={styles.messenger_toggle}>
              <div className={styles.toggle_container}>
                <button 
                  type="button"
                  className={`${styles.toggle_button} ${selectedMessenger === 'telegram' ? styles.active : ''}`}
                  onClick={() => setSelectedMessenger('telegram')}
                >
                  Telegram
                </button>
                <button 
                  type="button"
                  className={`${styles.toggle_button} ${selectedMessenger === 'whatsapp' ? styles.active : ''}`}
                  onClick={() => setSelectedMessenger('whatsapp')}
                >
                  WhatsApp
                </button>
              </div>
              <Input 
                type="tel" 
                placeholder={getPhonePlaceholder()} 
                className={styles.booking__input} 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </Button>
            {submitStatus.message && (
              <div className={`${styles.status_message} ${styles[submitStatus.type]}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Booking;