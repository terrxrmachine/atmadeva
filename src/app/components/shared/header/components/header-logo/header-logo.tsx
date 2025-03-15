"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header-logo.module.css';

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
            ĀtmāDeva Retreats
        </div>
    );
}