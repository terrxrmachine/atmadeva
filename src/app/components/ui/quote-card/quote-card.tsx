import styles from './quote-card.module.css';

export default function QuoteCard({ children }: { children: React.ReactNode }) {
    return (
        <center className={styles['quote-card']}>
            {children}
        </center>
    );
}