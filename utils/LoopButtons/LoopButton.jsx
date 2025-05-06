"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./loop.module.css";

const buttons = [
  "+ $22.15 Received from Nguyen Shane",
  "+ $300.52 Received from Cooper Kristin",
  "+ $50.00 Received from Miles Esther",
];

export default function LoopButtons() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % buttons.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loop}>
      <AnimatePresence mode="popLayout">
        <motion.button
          key={index}
          className={styles.button}
          initial={{ y: -80, opacity: 0, scale: 0.6 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
        >
          <img src="/assets/icons/arrow.png" alt="Arrow" />
          {buttons[index]}
        </motion.button>
      </AnimatePresence>
    </div>
  );
}
