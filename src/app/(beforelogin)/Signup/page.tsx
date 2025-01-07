'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Signup.module.css';

export default function Signup() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert('약관에 동의해주세요.');
      return;
    }
    
    try {
      // 여기에 실제 회원가입 API 호출 로직을 추가하세요
      // 예: const response = await api.signup(phoneNumber, password);
      
      console.log('회원가입 성공:', phoneNumber);
      
      // 회원가입 성공 후 홈 페이지로 이동
      router.push('/');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };
  

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleBack}>←</button>
      <h1 className={styles.title}>회원가입</h1>
      <form onSubmit={handleSignup} className={styles.form}>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={styles.input}
          placeholder="이메일 등록"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="비밀번호 등록"
          required
        />
        <div className={styles.termsContainer}>
          <input
            type="checkbox"
            id="agreeTerms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className={styles.checkbox}
          />
          <label htmlFor="agreeTerms" className={styles.termsLabel}>
            이용약관에 동의합니다
          </label>
        </div>
        <button type="submit" className={styles.SignupButton} disabled={!agreeTerms}>
          회원가입하기
        </button>
      </form>
    </div>
  );
}
