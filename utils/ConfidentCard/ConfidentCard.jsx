import React from "react";
import styles from "./confident.module.css";

const DATA = [
  {
    id: 0,
    title: "Spend better",
    icon: "/assets/icons/money-send.png",
    desc: "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.",
  },
  {
    id: 1,
    title: "Invest better",
    icon: "/assets/icons/wallet-minus.png",
    desc: "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.",
  },
];

const ConfidentCard = () => {
  return (
    <div className={styles.card}>
      {DATA.map((item) => (
        <div key={item.id} className={styles.cardItem}>
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>

          <img className={styles.icon} src={item.icon} alt={item.title} />
          <img
            className={styles.grid}
            src="/assets/images/grid.png"
            alt="grid"
          />
        </div>
      ))}
    </div>
  );
};

export default ConfidentCard;
