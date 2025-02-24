'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import styles from './photo-carousel.module.css';

interface PhotoCarouselProps {
    photos: {
        src: string;
        alt: string;
    }[];
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
    return (
        <div className={styles.photoCarousel}>
            <Swiper
                slidesPerView="auto"
                spaceBetween={16}
                className={styles.swiper}
            >
                {photos.map((photo, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 75vw"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
