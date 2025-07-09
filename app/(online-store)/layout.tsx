"use client";

import { FC, ReactNode } from "react";

import { Footer, Header } from "@/components/online-store";

const OnlineStoreLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />

      <section className="container pt-4">
        {children}
        <Footer />
      </section>
    </>
  );
};

export default OnlineStoreLayout;
