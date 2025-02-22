'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import styles from './carousel.module.css';

interface CarouselProps {
    items: React.ReactNode[];
    slidesPerView?: number | 'auto';
    spaceBetween?: number;
}

export default function Carousel({ 
    items,
    slidesPerView = 'auto',
    spaceBetween = 16
}: CarouselProps) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [totalSlides] = React.useState(items.length);

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div className={styles.carousel}>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                onSlideChange={handleSlideChange}
                className={styles.swiper}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.pagination}>
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.pagination_bullet} ${index === activeIndex ? styles.pagination_bullet_active : ''}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
