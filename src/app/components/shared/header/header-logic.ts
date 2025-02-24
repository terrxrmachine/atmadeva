import { useState, useEffect } from 'react';

export const navigationItems = [
    { id: 'about', label: 'О ретрите' },
    { id: 'what-to-expect', label: 'Программа' },
    { id: 'daily-schedule', label: 'Расписание' },
    { id: 'authors', label: 'Команда' },
    { id: 'pricing', label: 'Стоимость' },
    { id: 'booking', label: 'Контакты' },
];

export const useHeaderLogic = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);``

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        
        const section = document.getElementById(id);
        const header = document.querySelector('header');
        
        if (section && header) {
            const headerHeight = header.offsetHeight;
            const sectionPosition = section.offsetTop - headerHeight;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        }
    };

    return {
        activeSection,
        scrollToSection,
        isMobileMenuOpen,
        toggleMobileMenu,
    };
};
