import Image from "next/image";
import styles from "../ui/home.module.scss";

export default function Header({ setSwap }) {
  return (
    <div className={styles.header}>
      <Image
        src="/images/logo.png"
        alt=""
        width={70}
        height={32}
        className={styles.logo}
        onClick={() => setSwap(true)}
      />
      <div className={styles.headerLoader}>
        <div className={styles.loadingBar} style={{ width: "50%" }}>
          <div className={styles.loadingLeft}>
            <h5>PRESTO ON LINE CON IL NUOVO PORTALE</h5>
            <div className={styles.arrowIcon}>
              <Image
                src="/images/header-arrow.png"
                alt=""
                width={10}
                height={7}
              />
            </div>
            <h5>SCOPRI DI PIÙ</h5>
          </div>
          <div>
            <h4>50%</h4>
          </div>
        </div>
      </div>
      <a className={styles.headerButton} href="/">
        <h5>PARLA CON UN ESPERTO</h5>
      </a>
    </div>
  );
}
