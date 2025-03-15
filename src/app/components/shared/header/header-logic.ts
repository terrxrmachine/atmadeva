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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Add scroll detection to update active section
    useEffect(() => {
        const handleScroll = () => {
            // Get header height for offset calculation
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            
            // Add some buffer to make the detection more accurate
            const scrollOffset = headerHeight + 100;
            
            // Check each section's position
            const sections = navigationItems.map(item => {
                const element = document.getElementById(item.id);
                if (!element) return { id: item.id, top: 0, bottom: 0 };
                
                const rect = element.getBoundingClientRect();
                return {
                    id: item.id,
                    top: rect.top - scrollOffset,
                    bottom: rect.bottom - scrollOffset
                };
            });
            
            // Find the section that is currently in view
            // We prioritize sections where the top is at or above the viewport top
            // and the bottom is below the viewport top
            const currentSection = sections.find(section => 
                section.top <= 0 && section.bottom > 0
            );
            
            // If no section is found that way, use the one closest to the top of the viewport
            if (currentSection) {
                setActiveSection(currentSection.id);
            } else {
                // Find the section closest to the top of the viewport
                const closestSection = sections.reduce((prev, current) => {
                    return (Math.abs(current.top) < Math.abs(prev.top)) ? current : prev;
                });
                
                setActiveSection(closestSection.id);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Call once to set initial active section
        handleScroll();
        
        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
