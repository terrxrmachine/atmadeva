"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header-logo.module.css';
import Image from 'next/image';

export default function HeaderLogo() {
    const pathname = usePathname();
    const isGalleryPage = pathname === '/gallery';

    // If on gallery page, make logo clickable to return to home page
    if (isGalleryPage) {
        return (
            <Link href="/" className={styles.logo}>
                ĀtmāDeva Retreats
            </Link>
        );
    }

    // On main page, logo doesn't need to be a link
    return (
        <div className={styles.logo}>
            <Image src="/logo-atmadeva.png" alt="Logo" width={32} height={32} className={styles.logo__image}/>
            ĀtmāDeva Retreats
        </div>
    );
}