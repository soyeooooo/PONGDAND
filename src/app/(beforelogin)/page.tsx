import Image from "next/image";
import styles from "@/app/(beforelogin)/out.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.topSection}>
        <p className={styles.customFont}>어디서든 물이 좋은 당신을 위한</p>
        <h1 className={styles.customFont}>퐁당!</h1>
      </div>
      <div className={styles.bottomSection}>
        <Image
          src="/wave.gif"
          alt="Wave"
          fill
          className={styles.waveImage}
        />
        <button className={`${styles.loginButton} ${styles.customFont}`}>로그인</button>
        <button className={`${styles.signupButton} ${styles.customFont}`}>회원가입</button>
      </div>
    </div>
  );
}
