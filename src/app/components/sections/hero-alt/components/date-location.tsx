import styles from './date-location.module.css'
import { DateIcon, LocationIcon } from './date-location__icons'

export default function DateLocation() {
    return(
        <div className={styles['date-location']}>
            <div className={styles['date-location__item']}>
                <DateIcon />
                <p className={styles['date-location__text']}>Даты: 1–12 мая 2025</p>
            </div>

            <div className={styles['date-location__item']}>
                <LocationIcon />
                <p className={styles['date-location__text']}>Место: Дхарамсала, Индия</p>
            </div>
        </div>
    )
}