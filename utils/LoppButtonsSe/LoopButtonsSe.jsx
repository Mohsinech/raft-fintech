"use client";

import { useState, useEffect } from "react";
import styles from "./loop.module.css";

const buttons = [
  { id: 0, img: "/assets/icons/stack.png", text: "Cryptocurrency" },
  {
    id: 1,
    img: "/assets/icons/portfolio.png",
    text: "Smart Portfolio Investing",
  },
  { id: 3, img: "/assets/icons/invest.png", text: "Sustainable Investing" },
];

export default function LoopButtonsSe() {
  return (
    <div className={styles.loop}>
      {buttons.map(({ id, img, text }) => (
        <button
          key={id}
          className={`${styles.button} ${styles[`button${id}`]}`}
        >
          <img src={img} alt={text} />
          {text}
        </button>
      ))}
    </div>
  );
}
