"use client";
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import styles from './team-card.module.css';
import MoreButton from "../more-button/more-button";
import PhotoCarousel from '@/app/components/ui/photo-carousel/photo-carousel';
import SMMButton from '@/app/components/ui/smm-button/smm-button';

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
  instagram?: string;
  telegram?: string;
  isDesktop: boolean;
  onExpand: (height: number, id: number) => void;
  maxHeight: number;
  id: number;
  isExpanded: boolean;
}

export default function TeamCard({
  imageSrc,
  alt,
  name,
  position,
  description,
  galleryImages = [],
  instagram,
  telegram,
  isDesktop,
  onExpand,
  maxHeight,
  id,
  isExpanded
}: TeamCardProps) {
  const expandedContentRef = useRef<HTMLDivElement>(null);
  
  // Create array for photo carousel, adding the main image if not in gallery
  const allPhotos = [
    { src: imageSrc, alt },
    ...galleryImages.filter(img => img.src !== imageSrc)
  ];
  
  const toggleExpand = () => {
    if (!isExpanded) {
      // Calculate height of expanded content for consistent sizing
      const expandedHeight = expandedContentRef.current?.scrollHeight || 0;
      onExpand(expandedHeight, id);
    } else {
      onExpand(0, id);
    }
  };
  
  useEffect(() => {
    // Recalculate heights when window resizes
    const handleResize = () => {
      if (isExpanded && expandedContentRef.current) {
        const expandedHeight = expandedContentRef.current.scrollHeight;
        onExpand(expandedHeight, id);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isExpanded, onExpand, id]);
  
  return (
    <div className={`${styles['team-card']} ${isExpanded ? styles['team-card--expanded'] : ''}`}>
      {/* Regular card content (always visible) */}
      <div className={styles['team-card__main']}>
        <div className={styles['team-card__image-container']}>
          <PhotoCarousel showCaption={false} photos={allPhotos} />
        </div>
        <div className={styles['team-card__content']}>
          <div className={styles['team-card__fixed-content']}>
            <p className={styles['team-card__text']}>
              <span className={styles['team-card__name']}>{name}</span> {position}
            </p>
          </div>
          
          {/* Expandable content */}
          <div
            className={styles['team-card__expanded-content']}
            ref={expandedContentRef}
            style={{
              maxHeight: isExpanded ? (isDesktop ? `${maxHeight}px` : 'none') : '0',
              opacity: isExpanded ? 1 : 0
            }}
          >
            <div className={styles['team-card__expanded-info']}>
              <p className={styles['team-card__description']}>
                {description}
              </p>
            </div>
          </div>
          
          {/* Footer with social media and action buttons */}
          <div className={styles['team-card__footer']}>
            {/* Social media buttons in their own container */}
            {(instagram || telegram) && (
              <div className={styles['team-card__social-buttons']}>
                {instagram && <SMMButton type="instagram" href={instagram} size="medium" />}
                {telegram && <SMMButton type="telegram" href={telegram} size="medium" />}
              </div>
            )}
            
            {/* Details button in its own container below social buttons */}
            <div className={styles['team-card__details-button']}>
              <MoreButton onClick={toggleExpand}>
                {isExpanded ? 'Скрыть подробности' : 'Узнать подробности'}
              </MoreButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}