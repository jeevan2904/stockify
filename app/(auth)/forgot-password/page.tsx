"use client";

import { FC } from "react";
import Link from "next/link";
import { Fingerprint, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/global";

const ForgotPasswordPage: FC = () => {
  return (
    <>
      <section>
        <div className="mt-10">
          <Logo />
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="icon" className="pointer-events-none">
            <Fingerprint className="w-5 h-5" />
          </Button>
          <h2 className="font-medium text-md">Forgot your Password?</h2>
          <p className="text-xs font-light">
            No worries! We&apos;ll send you reset instructions on your email:
          </p>
        </div>

        <form className="mt-6 space-y-3">
          <div className="">
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-slate-900"
              >
                Email Address
              </label>
            </div>

            <div className="mt-1 relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                className="w-full text-xs border-0 outline-0 pl-7 pe-2 py-1.5 ring-1 ring-slate-400 focus:ring-indigo-500 placeholder:text-slate-400 text-slate-800 rounded-sm"
                required
              />

              <Mail className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-400" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full block rounded-sm border-0 bg-indigo-600 text-slate-50 text-sm font-semibold py-1 my-6 cursor-pointer hover:bg-indigo-500 capitalize"
          >
            Reset Password
          </button>
        </form>

        <div className="mt-10 text-center">
          <Link
            href="/login"
            className="text-sm text-indigo-600 cursor-pointer underline hover:text-indigo-500"
          >
            Go Back
          </Link>
        </div>
      </section>
    </>
  );
};

export default ForgotPasswordPage;
