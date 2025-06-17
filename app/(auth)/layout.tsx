"use client";

import { FC, ReactNode } from "react";

import { Logo } from "@/components/global";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center bg-slate-100">
        <div className="w-[80%] max-w-[95%] bg-white border border-slate-200 shadow-md rounded-lg grid grid-cols-1 md:grid-cols-2">
          <div className="p-4">
            <div className="mt-4">
              <Logo />
            </div>
            {children}
          </div>

          <div className="hidden md:block min-h-[60vh] bg-indigo-500 md:rounded-tr-lg rounded-br-lg">
            <div className="p-4 text-center text-slate-50">
              <h3>Connect with Every Application</h3>
              <p className="text-xs text-slate-300 font-light">
                Everything you need is customisable on the dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
