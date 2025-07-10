"use client";

import { Logo } from "@/components/global";
import { FC, ReactNode } from "react";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <main className="w-full h-screen flex items-center justify-center bg-slate-200 dark:bg-slate-700">
        <div className="w-[80%] max-w-[95%] min-h-[60%] bg-white dark:bg-slate-950 shadow-lg rounded-md grid grid-cols-1 md:grid-cols-2">
          <div className="p-3">
            <div className="mt-10">
              <Logo />
            </div>
            {children}
          </div>

          <div className="hidden md:block bg-blue-500 p-3 rounded-r-md">
            <div className="text-center text-slate-50">
              <h2 className="font-semibold text-md">
                Connect with Every Application
              </h2>
              <p className="text-xs font-light">
                Everything you need in an easily customizable dashboard.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
