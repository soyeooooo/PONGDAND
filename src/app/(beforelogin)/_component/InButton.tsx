'use client'

import Link from 'next/link';
import styles from "@/app/(beforelogin)/out.module.css";

export default function InButtons() {
  return (
    <>
      <Link href="/login">
        <button className={`${styles.loginButton} ${styles.customFont}`}>
          로그인
        </button>
      </Link>
      <Link href="/Signup">
        <button className={`${styles.signupButton} ${styles.customFont}`}>
          회원가입
        </button>
      </Link>
    </>
  );
}
