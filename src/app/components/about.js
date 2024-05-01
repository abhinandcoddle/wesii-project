import styles from "../ui/home.module.scss";
import Image from "next/image"

export default function About() {
  return (
    <div className={styles.about}>
      <Image src="/images/about-bg.webp" alt="" width={1000} height={1000}/>
      <div className={styles.aboutDiv}>
        <h3>
          Chi è <br />
          <span>Wesii</span>
        </h3>
        <div className={styles.aboutPara}>
          <p>
            Wesii è una start-up italiana fondata nel 2016 operante in tutto il
            mondo attraverso <span>numerose partnership</span>. Con oltre dieci
            anni di esperienza nelle attività di telerilevamento, Wesii fornisce
            servizi di <span>ispezione multispettrale all avanguardia</span> per
            un ampia varietà di aziende. Le applicazioni spaziano dagli impianti
            solari al monitoraggio dei siti di discarica, dall agricoltura al
            navale e persino allo sport.
          </p>
        </div>
        <div className={styles.aboutStats}>
          <div className={styles.statsGrid1}>
            <h2>10</h2>
            <h4>anni <br/>di esperienza</h4>
          </div>
          <div className={styles.statsGrid2}>
            <h2>+300</h2>
            <h4>aziende <br/>clienti</h4>
          </div>
          <div className={styles.statsGrid3}>
            <h2>+8.000</h2>
            <h4>ispezioni <br/>all anno</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
