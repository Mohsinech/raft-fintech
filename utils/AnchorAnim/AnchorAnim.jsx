"use client";

import React from "react";
import styles from "./anchor.module.css";
import { motion } from "framer-motion";

const AnchorAnim = ({ label, href, style }) => {
  return (
    <div className={styles.anchor}>
      <motion.a
        style={!style ? "" : style}
        href={href}
        className={styles.link}
        initial={{ y: 0 }}
        whileHover={{ y: -20 }}
      >
        {!label ? "label" : label}
      </motion.a>
    </div>
  );
};

export default AnchorAnim;
