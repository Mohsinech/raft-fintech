import React from "react";
import {
  Benif,
  Confident,
  Cta,
  Features,
  Hero,
  Intro,
  Main,
  Testimonials,
} from "./sections";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Main />
      <Benif />
      <Cta />
      <Confident />
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <Image
          src="/assets/images/group-bg.png"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <Intro />
      <Testimonials />
    </main>
  );
}
