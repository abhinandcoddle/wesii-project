"use client";
import { useState } from "react";
import styles from "./ui/home.module.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer"
import Image from "next/image"

export default function Home() {
  const [swap, setSwap] = useState(true);

  return (
    <div className={styles.container}>
      <Header setSwap={setSwap} />
      <div className={styles.subContainer}>
        <Hero setSwap={setSwap} swap={swap} />
        <Services />
        <About />
        <Contact />
      </div>
      <Footer />
      <div className={styles.whiteBg}></div>
      <div>
        <Image src="/images/honey1.svg" width={100} height={100} className={styles.decor1} alt=""/>
        <Image src="/images/honey1.svg" width={100} height={100} className={styles.decor2} alt=""/>
        <Image src="/images/honey1.svg" width={100} height={100} className={styles.decor3} alt=""/>
        <Image src="/images/honey1.svg" width={100} height={100} className={styles.decor4} alt=""/>
        <Image src="/images/honey1.svg" width={100} height={100} className={styles.decor5} alt=""/>
      </div>
    </div>
  );
}
