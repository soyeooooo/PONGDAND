'use client';

import React from 'react';
import styles from './SlidingMenu.module.css';

interface SlidingMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${styles.slidingMenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuContent}>
        <h2 className={styles.menuTitle}>메뉴</h2>
        <h3 className={styles.sectionTitle}>인기 검색어</h3>
        <ul className={styles.menuList}>
          <li>올림픽 규격 수영장</li>
          <li>온수 수영장</li>
          <li>어린이 수영 강습</li>
        </ul>
        <h3 className={styles.sectionTitle}>현재 진행 중인 수업</h3>
        <ul className={styles.menuList}>
          <li>초보자 수영</li>
          <li>아쿠아로빅</li>
          <li>고급 수영 기술</li>
        </ul>
      </div>
    </div>
  );
};

export default SlidingMenu;
