import React from "react";
import styles from "./test.module.css";

const TestimonialCard = ({ text, name, role, profile }) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <p>{text}</p>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-2.5 max-sm:gap-1.5">
          <h2>{name}</h2>
          <p className={styles.role}>{role}</p>
        </div>

        <img src={profile} alt={name} />
      </div>
    </div>
  );
};

export default TestimonialCard;
