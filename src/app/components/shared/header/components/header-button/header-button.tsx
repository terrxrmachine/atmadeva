import Link from 'next/link';
import styles from './header-button.module.css'

interface HeaderButtonProps {
    id: string;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
    isExternalPage?: boolean;
    href?: string;
}

export default function HeaderButton({ id, label, isActive, onClick, isExternalPage, href }: HeaderButtonProps) {
    // If it's an external page, render a Link component
    if (isExternalPage && href) {
        return (
            <Link 
                href={href}
                className={`${styles.header__button} ${isActive ? styles.header__button_active : ''}`}
            >
                {label}
            </Link>
        );
    }
    
    // Otherwise render a button for scrolling to sections
    return (
        <button
            onClick={() => onClick(id)}
            className={`${styles.header__button} ${isActive ? styles.header__button_active : ''}`}
        >
            {label}
        </button>
    );
}
