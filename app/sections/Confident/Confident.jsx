import React from "react";
import styles from "./confident.module.css";
import { ConfidentCard } from "@/utils";
import CreData from "@/components/CreData/CreData";

const Confident = () => {
  return (
    <section className={styles.confident}>
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
    </section>
  );
};

export default Confident;
