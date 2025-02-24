import React from 'react';

import styles from './more-button.module.css';

export default function MoreButton() {
    return(
        <button className={styles['more-button']}>
            Показать все
        </button>
    )
}