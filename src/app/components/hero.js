import styles from "../ui/home.module.scss";
import HeroFront from "../components/hero-front";
import HeroBack from "../components/hero-back";

export default function Hero({ setSwap, swap }) {
  return (
    <div className={styles.hero}>
      {swap ? <HeroFront setSwap={setSwap} /> : <HeroBack setSwap={setSwap} />}
    </div>
  );
}
