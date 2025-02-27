import React from 'react';
import styles from './team-modal.module.css';
import Modal from '@/app/components/ui/modal/modal';
import PhotoCarousel from '@/app/components/ui/photo-carousel/photo-carousel';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  position: string;
  description: string;
  photos: {
    src: string;
    alt: string;
  }[];
}

export default function TeamModal({ 
  isOpen,
  onClose,
  name,
  position,
  description,
  photos
}: TeamModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={name}>
      <div className={styles['team-modal']}>
        <PhotoCarousel photos={photos} />
        <div className={styles['team-modal__info']}>
          <p className={styles['team-modal__position']}>{position}</p>
          <div className={styles['team-modal__description']} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </Modal>
  );
};