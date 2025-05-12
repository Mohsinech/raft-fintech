import React from "react";
import styles from "./features.module.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const DURATION = 1;
const EASE = [0.87, 0.13, 0, 1];

const Features = () => {
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
      // viewport={{ once: true }}
      className={styles.features}
    >
      <img src="./assets/images/features.png" alt="Feature Image" />

      <div className={styles.feature_content}>
        <h3>featured and seen in</h3>
        <div className={styles.blur_sides}>
          <Marquee
            className={styles.marquee}
            speed={20}
            gradient={true}
            gradientColor={"#000"}
            gradientWidth={100}
            gradientColors={["#000", "#000"]}
          >
            <img src="./assets/images/cnn-logo.png" alt="CNN" />
            <img src="./assets/images/bloomberg.png" alt="CNN" />
            <img src="./assets/images/cnbc.png" alt="CNN" />
            <img src="./assets/images/Forbes_logo.png" alt="CNN" />
            <img src="./assets/images/reuters.png" alt="CNN" />
          </Marquee>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
