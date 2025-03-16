"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

// Type for our image data
interface ImageData {
  src: string;
  alt: string;
  category: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to collect all images from the public directory
    const fetchImages = async () => {
      setIsLoading(true);

      // Collect images from different folders
      const locationImages = Array.from({ length: 15 }, (_, i) => ({
        src: `/location/${i + 1}loc.webp`,
        alt: `Локация ${i + 1}`,
        category: 'location'
      }));

      const placesToVisitImages = Array.from({ length: 12 }, (_, i) => ({
        src: `/places-to-visit/${i + 1}.webp`,
        alt: `Место ${i + 1}`,
        category: 'places'
      }));

      const teamImages = [
        ...Array.from({ length: 4 }, (_, i) => ({
          src: `/team/Mih-${i + 1}.webp`,
          alt: `Михаил ${i + 1}`,
          category: 'team'
        })),
        ...Array.from({ length: 5 }, (_, i) => ({
          src: `/team/Svet-${i}.webp`,
          alt: `Светлана ${i}`,
          category: 'team'
        })),
        ...Array.from({ length: 4 }, (_, i) => ({
          src: `/team/Val-${i + 1}.webp`,
          alt: `Валентина ${i + 1}`,
          category: 'team'
        })),
        { src: "/gallery/IMG_0351.JPG", alt: "Gallery Image 0351", category: 'team' },
        { src: "/gallery/IMG_0680.JPG", alt: "Gallery Image 0680", category: 'team' },
        { src: "/gallery/IMG_1026.JPG", alt: "Gallery Image 1026", category: 'team' },
        { src: "/gallery/IMG_1061.JPG", alt: "Gallery Image 1061", category: 'team' },
        { src: "/gallery/IMG_8754.JPG", alt: "Gallery Image 8754", category: 'team' },
        { src: "/gallery/IMG_8966.JPG", alt: "Gallery Image 8966", category: 'team' }
      ];

      const otherImages = [
        { src: '/hero.jpg', alt: 'Главное изображение', category: 'other' },
        { src: '/what-is-retreat/retreat.webp', alt: 'Ретрит', category: 'other' },
        { src: '/authors/authors.webp', alt: 'Авторы', category: 'other' }
      ];

      // Fixed: Convert paths to ImageData objects
      const galleryImagePaths = [
        "/gallery/IMG_0351.JPG",
        "/gallery/IMG_0613.JPG",
        "/gallery/IMG_0670.JPG",
        "/gallery/IMG_0677.JPG",
        "/gallery/IMG_0680.JPG",
        "/gallery/IMG_0699.JPG",
        "/gallery/IMG_1026.JPG",
        "/gallery/IMG_1032.JPG",
        "/gallery/IMG_1061.JPG",
        "/gallery/IMG_1103.JPG",
        "/gallery/IMG_1109.JPG",
        "/gallery/IMG_1114.JPG",
        "/gallery/IMG_1135.JPG",
        "/gallery/IMG_1155.PNG",
        "/gallery/IMG_1173.JPG",
        "/gallery/IMG_1197.JPG",
        "/gallery/IMG_1669.JPG",
        "/gallery/IMG_3688.heic",
        "/gallery/IMG_3711.heic",
        "/gallery/IMG_3764.heic",
        "/gallery/IMG_3798.heic",
        "/gallery/IMG_8495.JPG",
        "/gallery/IMG_8534.JPG",
        "/gallery/IMG_8754.JPG",
        "/gallery/IMG_8776.JPG",
        "/gallery/IMG_8845.heic",
        "/gallery/IMG_8957.JPG",
        "/gallery/IMG_8962.JPG",
        "/gallery/IMG_8965.JPG",
        "/gallery/IMG_8966.JPG"
      ];

      // Convert paths to ImageData objects
      const galleryImages = galleryImagePaths.map(path => {
        const filename = path.split('/').pop() || '';
        return {
          src: path,
          alt: filename,
          category: 'gallery'
        };
      });

      // Combine all images
      const allImages = [
        ...locationImages,
        ...placesToVisitImages,
        ...teamImages,
        ...otherImages,
        ...galleryImages
      ];

      // Extract unique categories excluding 'other' and 'gallery' from buttons
      const uniqueCategories = ['all', 'location', 'places', 'team'];

      setImages(allImages);
      setCategories(uniqueCategories);
      setIsLoading(false);
    };

    fetchImages();
  }, []);

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className={styles.container} style={{ marginBottom: '2rem' }}>
      <h1 className={styles.title}>Галерея</h1>

      <div className={styles.categories}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' && 'Все'}
            {category === 'location' && 'Локации'}
            {category === 'places' && 'Места для посещения'}
            {category === 'team' && 'Команда'}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className={styles.loading}>Загрузка изображений...</div>
      ) : (
        <div className={styles.gallery}>
          {filteredImages.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={350}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                  unoptimized={true}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}