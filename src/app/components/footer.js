import Image from "next/image";
import styles from "../ui/home.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <button onClick={() => window.scrollTo(0, 0)} name="gotoTop-button">
        <Image src="/images/click-top.png" width={15} height={30} alt="" />
      </button>
      <div className={styles.footerDiv}>
          <div className={styles.footerLeft}>
            <a className={styles.borderRight} href="">© 2022 Wesii</a>
            <a className={styles.borderRight} href="">Informativa privacy</a>
            <a href="">Informativa cookies</a>
          </div>
          <div className={styles.footerRight}>
            <h4><span>Bluedog</span> Web Agency Milano - Content Marketing Artificial Intelligence</h4>
          </div>
        </div>
    </div>
  );
}
