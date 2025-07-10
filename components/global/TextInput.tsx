"use client";

import { FC } from "react";
import { Mail } from "lucide-react";

export const TextInput: FC = () => {
  return (
    <>
      <div className="my-4">
        <label htmlFor="email" className="text-sm block">
          Email Address:
        </label>

        <div className="mt-1 relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            required
            className="w-full border-0 outline-0 ring-1 ring-slate-400 rounded-sm pl-7 py-1 text-xs focus:ring-indigo-500 placeholder:text-slate-500"
          />

          <Mail className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-500" />
        </div>
      </div>
    </>
  );
};
