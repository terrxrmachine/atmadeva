'use client';

import React from 'react';
import Image from 'next/image';

import styles from './place-card.module.css';

interface PlaceCardProps {
    number: string;
    title: string;
    description: string;
    imageSrc: string;
}

export default function PlaceCard({ number, title, description, imageSrc }: PlaceCardProps) {
    return (
        <div className={styles['place-card']}>
            <Image src={imageSrc} alt={title} width={500} height={500} className={styles.img} priority/>
            <div className={styles['place-card__content']}>
                <h3 className={styles['place-card__title']}>
                    <span className={styles['place-card__number']}>{number}</span> {title}
                </h3>
                <p className={styles['place-card__description']}>{description}</p>
            </div>
        </div>
    );
}
