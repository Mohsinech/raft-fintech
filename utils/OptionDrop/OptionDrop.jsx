import React from "react";
import styles from "./option.module.css";
import { OptionData } from "@/constants/data";

const OptionDrop = () => {
  return (
    <div className={styles.grid}>
      {OptionData.map((item) => (
        <div key={item.id} className={styles.option}>
          <div className="flex items-center gap-4">
            <img src={item.icon} alt={item.name} />
            <h2>{item.name}</h2>
          </div>

          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default OptionDrop;
