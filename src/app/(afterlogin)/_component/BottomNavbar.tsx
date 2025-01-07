'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './BottomNavbar.module.css';

const BottomNavbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/Map" className={`${styles.navLink} ${pathname === '/Map' ? styles.activeLink : ''}`}>
            <Image src="/map.png" alt="Map" width={24} height={24} />
            Map
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Feed" className={`${styles.navLink} ${pathname === '/Feed' ? styles.activeLink : ''}`}>
            <Image src="/map.png" alt="" width={24} height={24} />
            Feed
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/My" className={`${styles.navLink} ${pathname === '/My' ? styles.activeLink : ''}`}>
            <Image src="/my.png" alt="My" width={24} height={24} />
            My
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
