"use client"

import { navigationItems, useHeaderLogic } from './header-logic';

import styles from './header.module.css';

import HeaderLogo from './components/header__logo/header__logo';
import HeaderButton from './components/header__button/header__button';

export default function Header() {
    const { activeSection, scrollToSection } = useHeaderLogic();

    return (
        <header className={styles.header}>
            <HeaderLogo />
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
