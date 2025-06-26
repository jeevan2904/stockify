"use client";

import { FC, ReactNode } from "react";

import { Navbar } from "@/components/backoffice";

const BackofficeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen relative">
        <div className="fixed hidden md:block md:w-[220px] lg:w-[280px] h-full bg-muted/40 border-r"></div>

        <Navbar />

        <main className="md:ml-[220px] lg:ml-[280px] mt-14 lg:mt-[60px] absolute top-0 left-0 p-2 lg:p-4">
          {children}
        </main>
      </div>
    </>
  );
};

export default BackofficeLayout;
