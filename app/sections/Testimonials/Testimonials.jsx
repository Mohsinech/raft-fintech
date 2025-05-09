import React from "react";
import styles from "./testi.module.css";
import { TestimonialData } from "@/constants/data";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h1>Join over 3 million members</h1>

      {/* Gird */}
      <div className={styles.grid}>
        {TestimonialData.map((data) => (
          <TestimonialCard key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
