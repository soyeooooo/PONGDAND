import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <p>어디서든 물이 좋은 당신을 위한</p>
        <h1>퐁당!</h1>
        <button className={styles.loginButton}>로그인</button>
        <button className={styles.signupButton}>회원가입</button>
      </header>

    </div>
  );
}
