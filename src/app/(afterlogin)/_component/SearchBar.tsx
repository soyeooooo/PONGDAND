'use client';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="수영장 검색..."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
