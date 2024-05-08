"use client";
import { useState } from "react";
import styles from "../ui/home.module.scss";
import Image from "next/image";

export default function HeroBack() {
  let numberData = ["1 - 10", "10 - 50", "50 - 200", "200 - 500"];
  const [number, setNumber] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("50 - 200");

  let firstData = numberData
    .filter((item) => item !== currentNumber)
    .map((item, key) => {
      return (
        <h4 key={key} onClick={(e) => changeNumber(e)}>
          {item}
        </h4>
      );
    });
  const changeNumber = (e) => {
    setCurrentNumber(e.target.innerText);
    setNumber(!number);
  };

  return (
    <div className={styles.heroBack}>
      <div className={styles.heroLeft}>
        <div className={styles.titleDiv}>
          <h3>
            Stiamo <span>arrivando!</span>
          </h3>
          <p>
            Abbiamo in programma di volare nell’area geografica che hai
            selezionato. Lasciaci i tuoi dati per <span>scoprire quando</span> e
            per avere la possibilità di <span>aggiungere i tuoi impianti</span>{" "}
            al nostro piano di volo.
          </p>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.form}>
            <div className={styles.inputDiv}>
              <input
                type="text"
                required
                className={styles.input}
                id="firstInput"
                placeholder=" "
                defaultValue="Alessandro"
              />
              <label className={styles.label} htmlFor="firstInput">
                Nome*
              </label>
            </div>
            <div className={styles.inputDiv}>
              <input
                type="text"
                required
                className={styles.input}
                id="firstInput"
                defaultValue="Sancassani"
              />
              <label className={styles.label} for="firstInput">
                Cognome*
              </label>
            </div>
            <div className={styles.inputDiv}>
              <input
                type="email"
                required
                className={styles.input}
                id="firstInput"
                defaultValue="ale.sancassani@gmail.com"
              />
              <label className={styles.label} for="firstInput">
                E-mail*
              </label>
            </div>
            <div className={styles.inputDiv}>
              <input
                type="text"
                required
                className={styles.input}
                id="firstInput"
                defaultValue="+39 340 44 55 666"
              />
              <label className={styles.label} for="firstInput">
                Telefono*
              </label>
            </div>
            <div className={styles.inputDiv}>
              <input
                type="text"
                required
                className={styles.input}
                id="firstInput"
                defaultValue="Bluedog"
              />
              <label className={styles.label} for="firstInput">
                Azienda*
              </label>
            </div>
            <div
              className={styles.selectDiv}
              onClick={() => setNumber(!number)}
            >
              <div className={styles.selectLeft}>
                <h5>Numero impianti</h5>
                <h4>{currentNumber}</h4>
              </div>
              <div className={styles.selectRight} name="select-button3">
                <Image
                  src={
                    number ? "/images/up-arrow.svg" : "/images/down-arrow.svg"
                  }
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              {number && (
                <div className={styles.selectOptions}>{firstData}</div>
              )}
            </div>
          </div>
          <div className={styles.privacyDiv}>
            <input type="checkbox" aria-label="lorem ipsum" />
            <h6>
              Dichiaro di aver letto informativa privacy e acconsento al
              trattamento dei miei dati personali.
            </h6>
          </div>
          <button name="hero-button" type="submit">
            <h4>SCOPRI QUANDO</h4>
          </button>
        </form>
      </div>
      <div className={styles.heroRight}>
        <Image src="/images/map-bg.png" alt="" width={1000} height={1000} />
      </div>
    </div>
  );
  ``;
}
