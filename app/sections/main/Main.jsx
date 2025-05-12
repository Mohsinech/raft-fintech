import React from "react";
import styles from "./main.module.css";
import { FinanceCard, LoopButtons, LoopButtonsSe, ProfileCard } from "@/utils";
import { motion } from "framer-motion";

const DURATION = 1;

const Main = () => {
  // Animation for the section
  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: DURATION, delay: 0.4 }}
      className={styles.main}
    >
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
            <div className={styles.loop_btn_se}>
              <LoopButtonsSe />
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.fs_content}>
              <h1>Smart investing</h1>
              <h3>
                Grow your wealth confidently with our personalized investment
                solutions, tailored to your financial goals.
              </h3>
            </div>
          </div>
        </div>

        <div className={styles.second_row}>
          {/* Third box */}
          <div className={styles.th_box}>
            <div className={styles.loop_btn}>
              <ProfileCard />
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.fs_content}>
              <h1>Wealth Management</h1>
              <h3>
                Make informed decisions for your financial future with our
                wealth management expertise.
              </h3>
            </div>
          </div>
          {/* Fourth box */}
          <div className={styles.fo_box}>
            <div className={styles.overlay}>
              <div className={styles.loop_btn}>
                <FinanceCard />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.fs_content}>
                <h1>Financial Planning</h1>
                <h3>
                  Achieve your financial dreams with our comprehensive financial
                  planning services, guiding you toward a secure future.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Main;
