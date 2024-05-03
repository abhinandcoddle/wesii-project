import { useEffect } from "react";
import Image from "next/image";
import styles from "../ui/home.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from("#servicesTitle", {
      y: 50,
      opacity: 0,
    });
    gsap.to("#servicesTitle", {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#servicesTitle",
        start: "-100px bottom",
        end: "top -100px",
        scrub: true,
      },
    });
    gsap.from("#servicesBlockImage", {
      opacity: 0,
    });
    gsap.to("#servicesBlockImage", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#servicesBlockImage",
        start: "-100px bottom",
        end: "top -100px",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className={styles.services} id="services">
      <div className={styles.servicesHeader}>
        <h3 id="servicesTitle">
          Services to help you get <span>on top of your business,</span>{" "}
          literally
        </h3>
        <h4 id="servicesTitle">
          Using drones and airplanes we are able to capture data from an aerial
          view.. and then tell you what it actually means AND how it can help
          your business using our in-house developed software.
        </h4>
      </div>
      <div className={styles.servicesBlock}>
        <div className={styles.servicesList}>
          <Image
            src="/images/solar1.svg"
            alt=""
            width={100}
            height={100}
            id="servicesBlockImage"
          />

          <div className={styles.serviceDesc}>
            <h2 id="servicesTitle">FOTOVOLTAICO</h2>
            <h3 id="servicesTitle">Monitoring</h3>
            <p id="servicesTitle">
              Lorem ipsum dolor sit amet deatem instructa eas nequorum lorem
              ipsum dolor sit amet deatem instructa. <br />
              <br />
              Lorem ipsum dolor sit amet deatem instructa eas nequorum lorem
              ipsum dolor sit amet deatem instructa.
            </p>
          </div>
        </div>
        <div className={styles.servicesList}>
          <Image
            src="/images/solar2.svg"
            alt=""
            width={100}
            height={100}
            id="servicesBlockImage"
          />
          <div className={styles.serviceDesc}>
            <h2 id="servicesTitle">FOTOVOLTAICO</h2>
            <h3 id="servicesTitle">Photogrammetry</h3>
            <p id="servicesTitle">
              Lorem ipsum dolor sit amet deatem instructa eas nequorum lorem
              ipsum dolor sit amet deatem instructa. <br />
              <br />
              Lorem ipsum dolor sit amet deatem instructa eas nequorum lorem
              ipsum dolor sit amet deatem instructa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
