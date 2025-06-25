"use client";

import { FC, useState } from "react";
import { Eye, EyeOff, Fingerprint, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/global";

const ChangePasswordPage: FC = () => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

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
          <h2 className="font-medium text-md">Change your Password?</h2>
          <p className="text-xs font-light">
            No worries! Enter your new password credentials:
          </p>
        </div>

        <form className="mt-6 space-y-3">
          <div className="">
            <div className="flex items-center justify-between">
              <label
                htmlFor="newPassword"
                className="block text-sm/6 font-medium text-slate-900"
              >
                New Password
              </label>
            </div>

            <div className="mt-1 relative">
              <input
                type={isPasswordShown ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                placeholder="Enter New Password"
                className="w-full text-xs border-0 outline-0 px-7 py-1.5 ring-1 ring-slate-400 focus:ring-indigo-500 placeholder:text-slate-400 text-slate-800 rounded-sm"
                required
              />

              <Lock className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-400" />

              <button
                type="button"
                onClick={() => setIsPasswordShown(!isPasswordShown)}
                className="absolute top-1.5 right-1.5 cursor-pointer"
              >
                {isPasswordShown ? (
                  <EyeOff className="w-4 h-4 text-slate-500" />
                ) : (
                  <Eye className="w-4 h-4 text-slate-500" />
                )}
              </button>
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm/6 font-medium text-slate-900"
              >
                Confirm Password
              </label>
            </div>

            <div className="mt-1 relative">
              <input
                type={isPasswordShown ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                className="w-full text-xs border-0 outline-0 px-7 py-1.5 ring-1 ring-slate-400 focus:ring-indigo-500 placeholder:text-slate-400 text-slate-800 rounded-sm"
                required
              />

              <Lock className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-400" />

              <button
                type="button"
                onClick={() => setIsPasswordShown(!isPasswordShown)}
                className="absolute top-1.5 right-1.5 cursor-pointer"
              >
                {isPasswordShown ? (
                  <EyeOff className="w-4 h-4 text-slate-500" />
                ) : (
                  <Eye className="w-4 h-4 text-slate-500" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full block rounded-sm border-0 bg-indigo-600 text-slate-50 text-sm font-semibold py-1 my-6 cursor-pointer hover:bg-indigo-500 capitalize"
          >
            Change Password
          </button>
        </form>
      </section>
    </>
  );
};

export default ChangePasswordPage;
