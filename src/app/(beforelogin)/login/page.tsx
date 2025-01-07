'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 시도:', phoneNumber, password);
    router.push('/Map');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleBack}>←</button>
      <h1 className={styles.title}>로그인</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={styles.input}
          placeholder="전화번호"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="비밀번호"
          required
        />
        <button type="submit" className={styles.loginButton}>
          로그인하기
        </button>
      </form>
    </div>
  );
}
