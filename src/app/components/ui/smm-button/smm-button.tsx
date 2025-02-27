import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './smm-button.module.css';

export type SMMType = 'whatsapp' | 'telegram' | 'instagram' | 'facebook';

interface SMMButtonProps {
  type: SMMType;
  href: string;
  size?: 'small' | 'medium' | 'large';
}

const iconPaths: Record<SMMType, string> = {
  whatsapp: '/icons/whatsapp.png',
  telegram: '/icons/telegram.png',
  instagram: '/icons/instagram.png',
  facebook: '/icons/facebook.png'
};

const SMMButton: React.FC<SMMButtonProps> = ({ type, href, size = 'medium' }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${styles[`button_${size}`]}`}
    >
      <Image
        src={iconPaths[type]}
        alt={`${type} icon`}
        width={204}
        height={204}
        className={styles.icon}
      />
    </Link>
  );
};

export default SMMButton;
