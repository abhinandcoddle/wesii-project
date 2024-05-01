import styles from "../ui/home.module.scss";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactLeft}>
        <Image src="/images/contact-dp.webp" alt="" width={200} height={100}/>
      </div>
      <div className={styles.contactRight}>
        <h2>
          Contatta <br />
          un nostro <span>esperto</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit,
          <br /> sed do eiusmod tempor incidunt ut labore et dolore magna
          aliqua.
        </p>
        <form>
          <div className={styles.inputSection}>
            <input
              required
              type="text"
              placeholder="Nome*"
              aria-label="lorem ipsum"
            />
            <input
              required
              type="text"
              placeholder="Cognome*"
              aria-label="lorem ipsum"
            />
            <input
              required
              type="email"
              placeholder="E-mail*"
              aria-label="lorem ipsum"
            />
            <input
              type="number"
              placeholder="Telefono"
              aria-label="lorem ipsum"
            />
          </div>
          <div className={styles.privacySection}>
            <input type="checkbox" aria-label="lorem ipsum" />
            <h6>
              Dichiaro di aver letto informativa privacy e acconsento al
              trattamento dei miei dati personali.
            </h6>
          </div>
          <button name="contact-button" type="submit">
            <h4>VOGLIO ESSERE RICONTATTATO</h4>
          </button>
        </form>
      </div>
    </div>
  );
}
