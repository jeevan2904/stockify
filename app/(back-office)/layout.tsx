"use client";

import { FC, ReactNode } from "react";

import { Navbar, Sidebar } from "@/components/backoffice";

const BackofficeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen relative">
        <Sidebar />

        <Navbar />

        <main className="w-full md:w-[calc(100%-220px)] lg:w-[calc(100%-280px)] md:ml-[220px] lg:ml-[280px] mt-14 lg:mt-[60px] absolute top-0 left-0 p-2 lg:p-4">
          <div className="w-full max-w-[95%] mx-auto mt-4">{children}</div>
        </main>
      </div>
    </>
  );
};

export default BackofficeLayout;
