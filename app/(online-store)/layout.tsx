"use client";

import { FC, ReactNode } from "react";

import { Footer, Header } from "@/components/online-store";

const OnlineStoreLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />

      <div className="container">{children}</div>

      <Footer />
    </>
  );
};

export default OnlineStoreLayout;
