import Image from "next/image";
import styles from "@/app/(beforelogin)/out.module.css"
import InButton from "@/app/(beforelogin)/_component/InButton";

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
        <InButton/>
      </div>
    </div>
  );
}
