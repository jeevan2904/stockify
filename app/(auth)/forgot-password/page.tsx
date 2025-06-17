"use client";

import { FC } from "react";
import Link from "next/link";
import { Fingerprint, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const ForgotPasswordPage: FC = () => {
  return (
    <>
      <div className="mt-10 text-center">
        <Button variant="outline" size="icon">
          <Fingerprint className="w-5 h-5" />
        </Button>

        <h2 className="font-semibold mt-4">Forgot your Password?</h2>
        <p className="text-xs font-thin">
          No worries! We'll send you reset instructions:
        </p>
      </div>

      <form className="w-full mt-8 space-y-4">
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

        <button
          type="submit"
          className="w-full text-center rounded-sm bg-indigo-600 hover:bg-indigo-500 py-1.5 mt-2 text-sm text-slate-50 font-medium cursor-pointer"
        >
          Reset Password
        </button>
      </form>

      <p className="mt-10 text-center text-sm text-slate-700">
        Remember your password? &nbsp;
        <Link
          href="/login"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline"
        >
          Go Back
        </Link>
      </p>
    </>
  );
};

export default ForgotPasswordPage;
