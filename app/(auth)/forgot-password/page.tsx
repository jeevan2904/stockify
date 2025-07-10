"use client";

import { FC } from "react";
import Link from "next/link";
import { ArrowLeft, Fingerprint, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const ForgotPasswordPage: FC = () => {
  return (
    <>
      <section className="mt-6">
        <div className="text-center">
          <Button variant="outline" size="icon" className="pointer-events-none">
            <Fingerprint className="w-5 h-5" />
          </Button>
          <h2 className="font-semibold text-md">Forgot Your Password?</h2>
          <p className="font-light text-xs">
            No worries! We&apos;ll send you reset instructions:
          </p>
        </div>

        <form className="mt-6 space-y-4">
          <div className="">
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

          <button
            type="submit"
            className="w-full text-center text-xs rounded-sm bg-indigo-600 text-slate-50 hover:bg-indigo-500 py-1.5 mt-1 font-semibold cursor-pointer"
          >
            Reset Password
          </button>
        </form>

        <Link
          href="/login"
          className="flex items-center justify-center mt-6 text-xs font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          &nbsp; Go Back
        </Link>
      </section>
    </>
  );
};

export default ForgotPasswordPage;
