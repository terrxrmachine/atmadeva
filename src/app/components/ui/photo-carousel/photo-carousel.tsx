'use client';
import React, { useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './photo-carousel.module.css';

interface PhotoCarouselProps {
  photos: {
    src: string;
    alt: string;
  }[];
  showCaption?: boolean;
}

// Navigation buttons component
const NavigationButtons = ({ 
  onPrevClick, 
  onNextClick 
}: { 
  onPrevClick: () => void; 
  onNextClick: () => void; 
}) => {
  return (
    <div className={styles.navButtons}>
      <button 
        onClick={onPrevClick} 
        className={styles.navButton}
        aria-label="Previous photo"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={onNextClick} 
        className={styles.navButton}
        aria-label="Next photo"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default function PhotoCarousel({ photos, showCaption = true }: PhotoCarouselProps) {
  const swiperRef = useRef<SwiperClass | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className={styles.photoCarousel}>
      <Swiper
        modules={[Navigation, Mousewheel]}
        slidesPerView="auto"
        spaceBetween={16}
        className={styles.swiper}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.contentWrapper}>
              <div className={styles.imageWrapper}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 75vw"
                  priority
                />
              </div>
              {showCaption && <p className={styles.caption}>{photo.alt}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <NavigationButtons onPrevClick={handlePrev} onNextClick={handleNext} />
    </div>
  );
}