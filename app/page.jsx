"use client";

import React from "react";
import {
  Benif,
  Confident,
  Cta,
  Faq,
  Features,
  Hero,
  Intro,
  Main,
  Testimonials,
} from "./sections";
import Image from "next/image";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Features />
      <Main />
      <Benif />
      <Cta />
      <Confident />
      <section style={{ position: "relative", width: "100%", height: "100vh" }}>
        <Image
          src="/assets/images/group-bg.png"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
        />
      </section>
      <Intro />
      <Testimonials />
      <Faq />
    </React.Fragment>
  );
}
