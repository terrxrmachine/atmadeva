"use client";

import { usePathname, useRouter } from 'next/navigation';
import styles from './header-logo.module.css';
import Image from 'next/image';

export default function HeaderLogo() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogoClick = () => {
        if (pathname === '/gallery') {
            router.push('/#hero');
        } else {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className={styles.logo} onClick={handleLogoClick}>
            <Image src="/logo-atmadeva.png" alt="Logo" width={32} height={32} className={styles.logo__image}/>
            ĀtmāDeva Retreats
        </div>
    );
}
