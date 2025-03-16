import React from 'react';
import styles from './more-button.module.css';

interface MoreButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function MoreButton({ onClick, children }: MoreButtonProps) {
  return(
    <button className={styles['more-button']} onClick={onClick}>
      {children || 'Узнать подробности'}
    </button>
  )
}