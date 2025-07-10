"use client";

import { FC, useState } from "react";
import { Eye, EyeOff, Fingerprint, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";

const ChangePasswordPage: FC = () => {
  const [isNewPasswordVisible, setIsNewPasswordVisible] =
    useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false);

  return (
    <>
      <section className="mt-6">
        <div className="text-center">
          <Button variant="outline" size="icon" className="pointer-events-none">
            <Fingerprint className="w-5 h-5" />
          </Button>
          <h2 className="font-semibold text-md">Change Your Password?</h2>
          <p className="font-light text-xs">
            Hurray! Please enter your new credentials:
          </p>
        </div>

        <form className="mt-6 space-y-4">
          <div className="">
            <label htmlFor="newPassword" className="block text-sm">
              New Password:
            </label>

            <div className="mt-1 relative">
              <input
                type={isNewPasswordVisible ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder="Enter New Password"
                required
                className="w-full border-0 outline-0 ring-1 ring-slate-400 rounded-sm px-7 py-1 text-xs focus:ring-indigo-500 placeholder:text-slate-500"
              />

              <Lock className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-500" />

              <button
                type="button"
                onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
                className="absolute right-2 top-1.5 cursor-pointer"
              >
                {isNewPasswordVisible ? (
                  <EyeOff className="w-4 h-4 text-slate-500" />
                ) : (
                  <Eye className="w-4 h-4 text-slate-500" />
                )}
              </button>
            </div>
          </div>

          <div className="">
            <label htmlFor="confirmPassword" className="block text-sm">
              Confirm Password:
            </label>

            <div className="mt-1 relative">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter Confirm Password"
                required
                className="w-full border-0 outline-0 ring-1 ring-slate-400 rounded-sm px-7 py-1 text-xs focus:ring-indigo-500 placeholder:text-slate-500"
              />

              <Lock className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-500" />

              <button
                type="button"
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
                className="absolute right-2 top-1.5 cursor-pointer"
              >
                {isConfirmPasswordVisible ? (
                  <EyeOff className="w-4 h-4 text-slate-500" />
                ) : (
                  <Eye className="w-4 h-4 text-slate-500" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-center text-xs rounded-sm mt-1 bg-indigo-600 text-slate-50 hover:bg-indigo-500 py-1.5 font-semibold cursor-pointer"
          >
            Change Password
          </button>
        </form>
      </section>
    </>
  );
};

export default ChangePasswordPage;
