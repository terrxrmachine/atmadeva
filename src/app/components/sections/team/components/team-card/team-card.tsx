import Image from "next/image";

import styles from './team-card.module.css';

import MoreButton from "../more-button/more-button";

interface TeamCardProps {
    imageSrc: string;
    alt: string;
    name: string;
    position: string;
}

export default function TeamCard({ imageSrc, alt, name, position }: TeamCardProps) {
    return (
        <div className={styles['team-card']}>
            <Image src={imageSrc} alt={alt} width={500} height={500} className={styles['team-card__img']}/>
            <div className={styles['team-card__content']}>
                <p className={styles['team-card__text']}>
                    <span className={styles['team-card__name']}>{name}</span> {position}
                </p>
                <MoreButton />
            </div>
        </div>
    );
}