"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from './team-card.module.css';
import MoreButton from "../more-button/more-button";
import TeamModal from '../team-modal/team-modal';

interface TeamCardProps {
  imageSrc: string;
  alt: string;
  name: string;
  position: string;
  description: string;
  galleryImages?: {
    src: string;
    alt: string;
  }[];
}

export default function TeamCard({ 
  imageSrc, 
  alt, 
  name, 
  position, 
  description,
  galleryImages = [] 
}: TeamCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Создаем массив для фотокарусели, добавляя основное изображение, если его нет в галерее
  const allPhotos = [
    { src: imageSrc, alt },
    ...galleryImages.filter(img => img.src !== imageSrc)
  ];

  return (
    <>
      <div className={styles['team-card']}>
        <Image src={imageSrc} alt={alt} width={500} height={500} className={styles['team-card__img']}/>
        <div className={styles['team-card__content']}>
          <p className={styles['team-card__text']}>
            <span className={styles['team-card__name']}>{name}</span> {position}
          </p>
          <MoreButton onClick={openModal} />
        </div>
      </div>
      
      <TeamModal
        isOpen={isModalOpen}
        onClose={closeModal}
        name={name}
        position={position}
        description={description}
        photos={allPhotos}
      />
    </>
  );
}