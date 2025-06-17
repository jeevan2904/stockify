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
      <div className="mt-10 text-center">
        <Button variant="outline" size="icon" className="pointer-events-none">
          <Lock className="w-5 h-5" />
        </Button>

        <h2 className="font-semibold mt-4">Enter the code</h2>
        <p className="text-xs font-thin">
          We sent a one-time code to your email address to confirm
        </p>
      </div>

      <form className="w-full mt-8 space-y-4">
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

        <button
          type="submit"
          className="w-full text-center rounded-sm bg-indigo-600 hover:bg-indigo-500 py-1.5 mt-2 text-sm text-slate-50 font-medium cursor-pointer"
        >
          Verify Email
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-700">
        <Link
          href="/signup"
          className="flex items-center justify-center gap-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </p>
    </>
  );
};

export default VerifyAccountPage;
