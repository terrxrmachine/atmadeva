import styles from './date-location.module.css'
import { DateIcon, LocationIcon } from './date-location__icons'

export default function DateLocation() {
    return(
        <div className={styles['date-location']}>
            <div className={styles['date-location__item']}>
                <DateIcon />
                <p className={styles['date-location__text']}>Даты проведения:</p>
            </div>

            <p className={styles['date-location__text']}><span>1–12 Мая 2025</span></p>
            <p className={styles['date-location__text']}><span>1–12 Октября 2025</span></p>

            <div className={styles['date-location__item']}>
                <LocationIcon />
                <p className={styles['date-location__text']}>Место: <span>Дхарамсала, Индия</span></p>
            </div>
        </div>
    )
}