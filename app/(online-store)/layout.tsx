"use client";

import { FC, ReactNode } from "react";

import { Footer, Header } from "@/components/online-store";

const OnlineStroreLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />

      <section className="container">
        {children}

        <Footer />
      </section>
    </>
  );
};

export default OnlineStroreLayout;
