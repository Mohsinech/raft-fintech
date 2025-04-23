import React from "react";
import styles from "./main.module.css";
import { LoopButtons } from "@/utils";

const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1>Elevate Your Financial Journey With RAFT.</h1>
        <h3>
          RAFT offers a world of financial possibilities. From investments to
          payments, we've got you covered. Join us and unlock your financial
          potential today.
        </h3>
      </div>

      {/* Bento Grid */}

      <div className={styles.grid}>
        <div className={styles.first_row}>
          {/* First box */}
          <div className={styles.fs_box}>
            <div className={styles.loop_btn}>
              <LoopButtons />
            </div>
            <div className={styles.overlay}></div>

            <div className={styles.fs_content}>
              <h1>Seamless Payments</h1>
              <h3>
                Enjoy secure, seamless transactions that make managing your
                money a breeze.
              </h3>
            </div>
          </div>

          {/* Second box */}
          <div className={styles.se_box}>
            <div className={styles.overlay}></div>
          </div>
        </div>

        <div className={styles.second_row}>
          {/* Third box */}
          <div className={styles.th_box}>
            <div className={styles.overlay}></div>
          </div>
          {/* Fourth box */}
          <div className={styles.fo_box}>
            $ <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
