import { FunctionComponent, useCallback } from "react";
import Parsa from "../components/Parsa";
import GreeceGolang from "../components/GreeceGolang";
import NorwayER from "../components/NorwayER";
import Tuscany from "../components/Tuscany";
import styles from "./CardsContainer.module.css";
const CardsContainer: FunctionComponent = () => {
  const onCol4Click = useCallback(() => {
    window.open("https://www.bing.com/");
  }, []);

  return (
    <div className={styles.cardsContainer}>
      <button className={styles.col1}>
        <div className={styles.pariscard}>
          <img
            className={styles.parisimageIcon}
            alt=""
            src="/parisimage@2x.png"
          />
          <div className={styles.destinationDetails}>
            <b className={styles.parsa}>
              <Parsa />
            </b>
            <div className={styles.details}>
              <div className={styles.div}>211</div>
              <div className={styles.from}>from</div>
            </div>
          </div>
        </div>
      </button>
      <button className={styles.col1}>
        <div className={styles.pariscard}>
          <img
            className={styles.parisimageIcon}
            alt=""
            src="/greeceimage@2x.png"
          />
          <div className={styles.destinationDetails1}>
            <GreeceGolang />
            <div className={styles.details1}>
              <div className={styles.div1}>$9009</div>
              <div className={styles.from1}>from</div>
            </div>
          </div>
        </div>
      </button>
      <button className={styles.col1}>
        <div className={styles.pariscard}>
          <img
            className={styles.parisimageIcon}
            alt=""
            src="/norwayimage@2x.png"
          />
          <div className={styles.destinationDetails1}>
            <NorwayER />
            <div className={styles.details2}>
              <div className={styles.div2}>$895</div>
              <div className={styles.from2}>from</div>
            </div>
          </div>
        </div>
      </button>
      <button className={styles.col4} onClick={onCol4Click}>
        <div className={styles.pariscard}>
          <img
            className={styles.parisimageIcon}
            alt=""
            src="/tuscanyimage@2x.png"
          />
          <div className={styles.destinationDetails1}>
            <Tuscany />
            <div className={styles.details3}>
              <div className={styles.div3}>$1245</div>
              <div className={styles.from3}>from</div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CardsContainer;
