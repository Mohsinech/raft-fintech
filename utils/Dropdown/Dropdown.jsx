"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./drop.module.css";

const Dropdown = ({ title, content, index, isOpen, onToggle }) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.head_content} onClick={() => onToggle(index)}>
        <h1>{title}</h1>
        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 1, ease: [0.87, 0.13, 0, 1] }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fff"
          className={`size-6 ${isOpen ? styles.rotate : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </motion.svg>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.p
            className={styles.content}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 1, ease: [0.87, 0.13, 0, 1] }}
          >
            {content}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
