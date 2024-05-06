import Image from "next/image";
import styles from "../ui/home.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div onClick={() => window.scrollTo(0, 0)} className={styles.footerBtn}>
        <Image src="/images/click-top.svg" width={15} height={30} alt="" />
      </div>
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
