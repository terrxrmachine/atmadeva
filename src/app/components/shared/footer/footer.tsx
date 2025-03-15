"use client";

import styles from './footer.module.css';
import { navigationItems } from '../header/header-logic';

import HeaderLogo from '../header/components/header-logo/header-logo';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__content}>
                    <div className={styles.footer__info}>
                        <HeaderLogo />
                        <p className={styles.footer__description}>
                            Ретрит для глубокого погружения в практики йоги и медитации
                        </p>
                    </div>
                    
                    <div className={styles.footer__nav}>
                        <h4 className={styles.footer__nav_title}>Навигация</h4>
                        <ul className={styles.footer__nav_list}>
                            {navigationItems.map((item) => (
                                <li key={item.id} className={styles.footer__nav_item}>
                                    {item.isExternalPage ? (
                                        <a 
                                            href={item.href} 
                                            className={styles.footer__nav_link}
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <a 
                                            href={`#${item.id}`} 
                                            className={styles.footer__nav_link}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className={styles.footer__contact}>
                        <h4 className={styles.footer__contact_title}>Контакты</h4>
                        <a href="mailto:elizaveta.kantz@yandex.com" className={styles.footer__contact_link}>
                            elizaveta.kantz@yandex.com
                        </a>
                        <a href="tel:+79168199227" className={styles.footer__contact_link}>
                            +7 (916) 819-92-27
                        </a>
                    </div>
                </div>
                
                <div className={styles.footer__bottom}>
                    <p className={styles.footer__copyright}>
                        © {currentYear} ATMADEVA. Все права защищены.
                    </p>
                    <div className={styles.footer__social}>
                        <a href="#" className={styles.footer__social_link} aria-label="Telegram">
                            Telegram
                        </a>
                        <a href="#" className={styles.footer__social_link} aria-label="WhatsApp">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}