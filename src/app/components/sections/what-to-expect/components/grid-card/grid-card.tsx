'use client';

import React from 'react';
import Image from 'next/image';

import styles from './grid-card.module.css';

interface GridCardProps {
    imageSrc: string;
    text: string;
}

export default function GridCard({ imageSrc, text }: GridCardProps) {
    return (
        <div className={styles['grid-card']}>
            <Image src={imageSrc} alt={text} width={500} height={500} className={styles.img} loading="lazy"/>
            <p className={styles['grid-card__text']}>{text}</p>
        </div>
    );
}
