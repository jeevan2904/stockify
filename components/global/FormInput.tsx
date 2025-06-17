"use client";

import { FC } from "react";
import { Mail } from "lucide-react";

export const FormInput: FC = () => {
  return (
    <>
      <div>
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-slate-900"
        >
          Email Address
        </label>

        <div className="mt-2 relative">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email Address"
            className="w-full block border-0 outline-0 rounded-sm bg-transparent py-1.5 px-7 ring-1 ring-slate-400 text-xs text-slate-900 placeholder:text-slate-500 focus:ring-indigo-500"
            required
          />

          <Mail className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-500" />
        </div>
      </div>
    </>
  );
};
