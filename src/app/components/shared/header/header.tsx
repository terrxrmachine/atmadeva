"use client"

import { navigationItems, useHeaderLogic } from './header-logic';

import styles from './header.module.css';

import HeaderLogo from './components/header-logo/header-logo';
import HeaderButton from './components/header-button/header-button';

export default function Header() {
    const { activeSection, scrollToSection, isMobileMenuOpen, toggleMobileMenu } = useHeaderLogic();

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <HeaderLogo />
                <button 
                    className={`${styles.burger} ${isMobileMenuOpen ? styles.burger_active : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
                <nav className={`${styles.header__nav} ${styles.header__nav_desktop}`}>
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
            </div>
            <div className={`${styles.mobile_menu} ${isMobileMenuOpen ? styles.mobile_menu_active : ''}`}>
                <nav className={styles.mobile_menu__nav}>
                    {navigationItems.map((item) => (
                        <HeaderButton
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            isActive={activeSection === item.id}
                            onClick={(id) => {
                                scrollToSection(id);
                                toggleMobileMenu();
                            }}
                        />
                    ))}
                </nav>
            </div>
        </header>
    );
}
