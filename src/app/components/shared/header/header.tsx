"use client"

import { useState } from 'react';
import HeaderButton from './components/header__button/header__button';
import styles from './header.module.css';

const navigationItems = [
    { id: 'about', label: 'О ретрите' },
    { id: 'program', label: 'Программа' },
    { id: 'team', label: 'Команда' },
    { id: 'location', label: 'Локация и Условия' },
    { id: 'price', label: 'Стоимость' },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState('about');

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        // Добавить логику скролла к секции
    };

    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                {navigationItems.map((item) => (
                    <HeaderButton
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        isActive={activeSection === item.id}
                        onClick={scrollToSection}
                    />
                ))}
            </nav>
        </header>
    );
}
