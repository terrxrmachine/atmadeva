// components/more-button/more-button.tsx
import React from 'react';
import styles from './more-button.module.css';

interface MoreButtonProps {
  onClick?: () => void;
}

export default function MoreButton({ onClick }: MoreButtonProps) {
  return(
    <button className={styles['more-button']} onClick={onClick}>
      Узнать подробности
    </button>
  )
}