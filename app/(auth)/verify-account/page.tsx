"use client";

import { FC } from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyAccountPage: FC = () => {
  return (
    <>
      <section className="mt-6">
        <div className="text-center">
          <Button variant="outline" size="icon" className="pointer-events-none">
            <Lock className="w-5 h-5" />
          </Button>
          <h2 className="font-semibold text-md">Enter the Code</h2>
          <p className="font-light text-xs">
            We sent a one-time code to your email address to confirm:
          </p>
        </div>

        <form className="mt-8 space-y-4">
          <div className="w-[60%] mx-auto">
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <button
            type="submit"
            className="w-full text-center text-xs rounded-sm mt-1 bg-indigo-600 text-slate-50 hover:bg-indigo-500 py-1.5 font-semibold cursor-pointer"
          >
            Verify Email
          </button>
        </form>

        <Link
          href="/register"
          className="flex items-center justify-center mt-6 text-xs font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          &nbsp; Go Back
        </Link>
      </section>
    </>
  );
};

export default VerifyAccountPage;
