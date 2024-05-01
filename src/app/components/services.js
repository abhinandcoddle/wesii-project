import { useEffect } from "react";
import Image from "next/image";
import styles from "../ui/home.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to("#services", {
    //   x: 200,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: "#services",
    //     start: "top bottom",
    //     end: "bottom center",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
  }, []);
  return (
    <div className={styles.services} id="services">
      <div className={styles.servicesHeader}>
        <h3>
          Services to help you get <span>on top of your business,</span>{" "}
          literally
        </h3>
        <h4>
          Using drones and airplanes we are able to capture data from an aerial
          view.. and then tell you what it actually means AND how it can help
          your business using our in-house developed software.
        </h4>
      </div>
      <div className={styles.servicesBlock}>
        <div className={styles.servicesList}>
          <Image src="/images/solar1.svg" alt="" width={100} height={100} />

          <div className={styles.serviceDesc}>
            <h2>FOTOVOLTAICO</h2>
            <h3>Monitoring</h3>
            <p>
              Lorem ipsum dolor sit amet deatem instructa eas nequorum lorem
              ipsum dolor sit amet deatem instructa. <br />
              <br />
              Lorem ipsum dolor sit amet deatem instructa eas nequorum lorem
              ipsum dolor sit amet deatem instructa.
            </p>
          </div>
        </div>
        <div className={styles.servicesList}>
          <Image src="/images/solar2.svg" alt="" width={100} height={100} />
          <div className={styles.serviceDesc}>
            <h2>FOTOVOLTAICO</h2>
            <h3>Photogrammetry</h3>
            <p>
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
