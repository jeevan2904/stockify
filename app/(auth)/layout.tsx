"use client";

import { FC, ReactNode } from "react";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-slate-200">
        <div className="w-[90%] md:w-[80%] max-w-[95%] min-h-[60%] bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">
          <div className="p-3 md:p-4">{children}</div>

          <div className="hidden md:flex flex-col rounded-tr-lg rounded-br-lg bg-indigo-500 text-slate-50 p-4 text-center">
            <h4 className="font-semibold text-medium">
              Connect with Every Application
            </h4>

            <p className="font-light text-xs">
              Everything you need in an easily customizable dashboard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
