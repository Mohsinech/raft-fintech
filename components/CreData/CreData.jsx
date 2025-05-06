import React from "react";
import styles from "./cre.module.css";

const DATA = [
  { id: 0, title: "50+", desc: "Cities" },
  { id: 1, title: "50,000+", desc: "Transactions" },
  { id: 2, title: "3M+", desc: "Users" },
  { id: 3, title: "15+", desc: "user ratings" },
];

const titleStyles = {
  0: { textAlign: "start" },
  1: { textAlign: "center" },
  2: { textAlign: "center" },
  3: { textAlign: "end" },
};

const CreData = () => {
  return (
    <div className={styles.grid}>
      {DATA.map((item) => (
        <div key={item.id} className={`${styles.flex} flex flex-col gap-4`}>
          <h1 style={titleStyles[item.id]}>{item.title}</h1>
          <h3>{item.desc}</h3>
        </div>
      ))}
    </div>
  );
};

export default CreData;
