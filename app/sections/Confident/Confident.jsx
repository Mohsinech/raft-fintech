import React from "react";
import styles from "./confident.module.css";
import { ConfidentCard } from "@/utils";
import CreData from "@/components/CreData/CreData";
import { motion } from "framer-motion";

const DURATION = 1;

const Confident = () => {
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
      className={styles.confident}
    >
      <div className={styles.content}>
        <h1>Confidently Shape Your Financial Future</h1>
        <h3>
          At RAFT, we empower you to confidently shape your financial future.Our
          modern approach simplifies saving and investing, making it easier than
          ever.
        </h3>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        <ConfidentCard />
      </div>

      {/* Credentiel */}
      <CreData />
    </motion.section>
  );
};

export default Confident;
