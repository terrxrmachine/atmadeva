import { useState } from 'react';

export const navigationItems = [
    { id: 'about', label: 'О ретрите' },
    { id: 'program', label: 'Программа' },
    { id: 'teachers', label: 'Учителя' },
    { id: 'schedule', label: 'Расписание' },
    { id: 'price', label: 'Стоимость' },
    { id: 'contacts', label: 'Контакты' },
];

export const useHeaderLogic = () => {
    const [activeSection, setActiveSection] = useState('about');

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
    };
};
