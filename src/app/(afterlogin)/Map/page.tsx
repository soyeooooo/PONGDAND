'use client';

import { useState } from 'react';
import styles from './Map.module.css';
import SearchBar from '../_component/SearchBar';
import SlidingMenu from '../_component/SlidingMenu';

const MapComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.mapContainer}>
      <SearchBar />
      <div className={styles.mapContent}>
        {/* 여기에 실제 지도 구현을 추가하세요 */}
        <p className={styles.placeholder}>지도가 여기에 표시됩니다</p>
      </div>
      <SlidingMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <button 
        className={styles.menuToggle}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '▼' : '▲'}
      </button>
    </div>
  );
};

export default MapComponent;
