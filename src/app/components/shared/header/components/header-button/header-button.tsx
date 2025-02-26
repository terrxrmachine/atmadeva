import styles from './header-button.module.css'

interface HeaderButtonProps {
    id: string;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
}

export default function HeaderButton({ id, label, isActive, onClick }: HeaderButtonProps) {
    return (
        <button
            onClick={() => onClick(id)}
            className={`${styles.header__button} ${isActive ? styles.header__button_active : ''}`}
        >
            {label}
        </button>
    );
}
