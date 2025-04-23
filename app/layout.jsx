"use client";

import React from "react";
import "@styles/globals.css";
import useLenis from "@/hooks/Lenis";
import { Footer, Header } from "@/components/layouts";
import { ViewTransitions } from "next-view-transitions";

export default function RootLayout({ children }) {
  useLenis();

  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <title>Raft</title>
        </head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
