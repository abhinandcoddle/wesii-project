"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../ui/home.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroFront({ setSwap }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger) 

    gsap.to("#plane, #planeRot", {
      duration: 0.6,
      x: -355,
      y: 200,
    });
    gsap.to("#planeRot", {
      rotate: 360,
      duration: 0.4,
      ease: "none",
      repeat: -1,
    });
    gsap.to("#windRot", {
      rotate: 360,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const [main, setMain] = useState(true);
  const [states, setStates] = useState(false);
  const [region, setRegion] = useState(false);
  const [currentState, setCurrentState] = useState("Italia");
  const [currentRegion, setCurrentRegion] = useState("Lombardia");
  const changeHero = () => {
    setMain(true);
    window.location.reload();
  };
  const changeState = (e) => {
    setCurrentState(e.target.innerText);
    setStates(!states);
  };
  const changeRegion = (e) => {
    setCurrentRegion(e.target.innerText);
    setRegion(!region);
  };
  const navigatePage = () => {
    setSwap(false)
    window.scrollTo(0, 0)
  }

  let stateData = ["Italia", "Germania", "Brasile", "Francia"];
  let regionData = ["Lombardia", "Campania", "Basilicata", "Sardinia"];

  let firstData = stateData
    .filter((item) => item !== currentState)
    .map((item, key) => {
      return (
        <h4 key={key} onClick={(e) => changeState(e)}>
          {item}
        </h4>
      );
    });
  let secondData = regionData
    .filter((item) => item !== currentRegion)
    .map((item, key) => {
      return (
        <h4 key={key} onClick={(e) => changeRegion(e)}>
          {item}
        </h4>
      );
    });

  return (
    <div>
      <div className={styles.titleDiv}>
        <h3>
          <span>Reduce</span>
          <br />
          energy loss
        </h3>
      </div>
      <div className={styles.heroButton}>
        <button
          className={main ? styles.activeButton : styles.buttonDiv}
          onClick={() => changeHero()}
          name="hero-swap1"
        >
          <h3>Cos’è</h3>
        </button>
        <button
          className={main ? styles.buttonDiv : styles.activeButton}
          onClick={() => setMain(false)}
          name="hero-swap2"
        >
          <h3>Come funziona</h3>
        </button>
      </div>
      <div className={styles.textDiv}>
        <h4>
          Can aerial termography be painless? We think so! <br />
          <br />
          WESII is flying on hundred plants everyday. Check if your plant was
          already flied to get a detailed inspection in few hours or discover
          our next flight schedule.
          <br />
          <br /> Huge benefits for complete portfolio management.
          <br />
          <span>Easier, faster, better, massive.</span>
        </h4>
      </div>
      <div className={styles.locationDiv}>
        <div className={styles.heroLocation}>
          <div className={styles.locLeft}>
            <Image src="/images/loc-icon.svg" alt="" width={25} height={27} />
            <input
              type="text"
              placeholder="Enter your location..."
              defaultValue="Seleziona uno Stato e una regione"
            />
          </div>
          <div className={styles.locRight}>
            <div
              className={styles.selectDiv}
              onClick={() => setStates(!states)}
            >
              <div className={styles.selectLeft}>
                <h5>Stato</h5>
                <h4>{currentState}</h4>
              </div>
              <button className={styles.selectRight} name="select-button1">
                <Image
                  src={
                    states ? "/images/up-arrow.svg" : "/images/down-arrow.svg"
                  }
                  alt=""
                  width={40}
                  height={40}
                />
              </button>
              {states && (
                <div className={styles.selectOptions}>{firstData}</div>
              )}
            </div>
            <div
              className={styles.selectDiv}
              onClick={() => setRegion(!region)}
            >
              <div className={styles.selectLeft}>
                <h5>Regione</h5>
                <h4>{currentRegion}</h4>
              </div>
              <button className={styles.selectRight} name="select-button2">
                <Image
                  src={
                    region ? "/images/up-arrow.svg" : "/images/down-arrow.svg"
                  }
                  alt=""
                  width={40}
                  height={40}
                />
              </button>
              {region && (
                <div className={styles.selectOptions}>{secondData}</div>
              )}
            </div>
            <button
              className={styles.submitBtn}
              onClick={navigatePage}
              name="submit-button"
            >
              <Image
                src="/images/submit-btn.png"
                alt=""
                width={20}
                height={20}
                id="submit-arrow"
                aria-label="submit"
              />
            </button>
          </div>
        </div>
      </div>
      {main ? (
        <div>
          <div>
            <Image
              src="/images/wesii-plane.svg"
              alt=""
              width={280}
              height={180}
              id="plane"
              className={styles.planeImage}
            />
            <Image
              src="/images/airo-rot.svg"
              alt=""
              width={45}
              height={45}
              id="planeRot"
              className={styles.planeRot}
            />
          </div>
          <div>
            <Image
              src="/images/wesii-wind.svg"
              alt=""
              width={450}
              height={450}
              className={styles.windImage}
            />
            <Image
              src="/images/fan.svg"
              alt=""
              width={110}
              height={110}
              id="windRot"
              className={styles.windRot1}
            />
            <Image
              src="/images/fan.svg"
              alt=""
              width={110}
              height={110}
              id="windRot"
              className={styles.windRot2}
            />
            <Image
              src="/images/fan.svg"
              alt=""
              width={110}
              height={110}
              id="windRot"
              className={styles.windRot3}
            />
          </div>
        </div>
      ) : (
        <div className={styles.workFlow}>
          <div className={styles.workDiv}>
            <div className={styles.workLeft}>
              <div className={styles.workIndex}>
                <h4>1</h4>
              </div>
              <Image src="/images/work1.svg" width={90} height={90} alt="" className={styles.workImage}/>
              <Image src="/images/work-arrow.svg" width={15} height={30} alt="" className={styles.workArrow}/>
            </div>
            <div className={styles.workRight}>
              <h3>CARICA I TUOI IMPIANTI</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h4>
            </div>
          </div>
          <div className={styles.workDiv}>
            <div className={styles.workLeft}>
              <div className={styles.workIndex}>
                <h4>2</h4>
              </div>
              <Image src="/images/work2.svg" width={80} height={80} alt="" className={styles.workImage}/>
              <Image src="/images/work-arrow.svg" width={15} height={30} alt="" className={styles.workArrow}/>
            </div>
            <div className={styles.workRight}>
              <h3>SCEGLI UN SERVIZIO</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h4>
            </div>
          </div>
          <div className={styles.workDiv}>
            <div className={styles.workLeft}>
              <div className={styles.workIndex}>
                <h4>3</h4>
              </div>
              <Image src="/images/work3.svg" width={80} height={80} alt="" className={styles.workImage}/>
            </div>
            <div className={styles.workRight}>
              <h3>ACCEDI ALLE ANALISI</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
