import React from 'react';

import styles from './pricing.module.css';

import ContentWrapper from '../../ui/content-wrapper/content-wrapper';

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <ContentWrapper>
        <h2>СТОИМОСТЬ УЧАСТИЯ</h2>

        <p className={styles['pricing__price']}>125.000 ₽</p>

        <p className={styles['pricing__payment']}>
          <span>*Способы оплаты:</span> перевод на российский счет, перевод на visa/mastercard, PayPal, перевод в криптовалюте
        </p>

        <h4>Входит в стоимость:</h4>
        <ul className={styles['pricing__list']}>
          <li>все практики и лекции указанные в программе</li>
          <li>11 ночей в ретритном центре</li>
          <li>трехразовое питание в ретритном центре</li>
          <li>трансфер во время поездок, указанных в программе</li>
          <li>билеты на автобус Дели ⇄ Дхарамсала</li>
          <li>оформление туристической визы в Индию</li>
        </ul>

        <h4>Не входит в стоимость:</h4>
        <ul className={styles['pricing__list']}>
          <li>авиабилеты в Дели и обратно</li>
          <li>питание вне ретритного центра</li>
          <li>трансфер для поездок не по программе</li>
          <li>личные расходы (сувениры, покупки на базаре и т. д.)</li>
        </ul>
      </ContentWrapper>
    </section>
  );
};

export default Pricing;
