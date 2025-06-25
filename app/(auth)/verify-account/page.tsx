"use client";

import { FC } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Logo } from "@/components/global";

const VerifyAccountPage: FC = () => {
  return (
    <>
      <section>
        <div className="mt-10">
          <Logo />
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="icon" className="pointer-events-none">
            <Lock className="w-5 h-5" />
          </Button>
          <h2 className="font-medium text-md">Enter the code</h2>
          <p className="text-xs font-light">
            We sent a one-time code to your email address to confirm:
          </p>
        </div>

        <form className="mt-6 space-y-3">
          <div className="max-w-[60%] mx-auto">
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              className="w-full"
            >
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
            className="w-full block rounded-sm border-0 bg-indigo-600 text-slate-50 text-sm font-semibold py-1 my-6 cursor-pointer hover:bg-indigo-500 capitalize"
          >
            Verify Account
          </button>
        </form>

        <div className="mt-10 text-center">
          <Link
            href="/register"
            className="text-sm text-indigo-600 cursor-pointer underline hover:text-indigo-500"
          >
            Go Back
          </Link>
        </div>
      </section>
    </>
  );
};

export default VerifyAccountPage;
