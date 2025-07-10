"use client";

import { FC, ReactNode } from "react";

import { Navbar, Sidebar } from "@/components/backoffice";

const BackofficeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen relative">
        <Sidebar />

        <Navbar />

        <main className="absolute md:ml-[220px] lg:ml-[280px] mt-14 lg:mt-[60px] py-3 px-4">
          {children}
        </main>
      </div>
    </>
  );
};

export default BackofficeLayout;
