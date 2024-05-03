import { useEffect } from "react";
import styles from "../ui/home.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#contactTitle", {
      y: 50,
      opacity: 0,
    });
    gsap.to("#contactTitle", {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#contactTitle",
        start: "-100px bottom",
        end: "top -100px",
        scrub: true,
      },
    });
    gsap.from("#contactImage", {
      scale: 1.2,
    });
    gsap.to("#contactImage", {
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#contactImage",
        start: "-100px bottom",
        end: "top -100px",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className={styles.contact}>
      <div className={styles.contactLeft}>
        <Image src="/images/contact-dp.webp" alt="" width={600} height={600} id="contactImage"/>
      </div>
      <div className={styles.contactRight}>
        <h2 id="contactTitle">
          Contatta <br />
          un nostro <span>esperto</span>
        </h2>
        <p id="contactTitle">
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
