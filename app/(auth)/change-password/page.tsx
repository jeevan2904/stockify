"use client";

import { FC, useState } from "react";
import { Eye, EyeOff, Fingerprint, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";

const ChangePasswordPage: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState<Boolean>(false);

  return (
    <>
      <div className="mt-10 text-center">
        <Button variant="outline" size="icon">
          <Fingerprint className="w-5 h-5" />
        </Button>

        <h2 className="font-semibold mt-4">Change your Password</h2>
        <p className="text-xs font-thin">
          No worries! Fill in your new password to reset:
        </p>
      </div>

      <form className="w-full mt-8 space-y-4">
        <div className="">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-slate-900"
            >
              New Password
            </label>
          </div>

          <div className="mt-2 relative">
            <input
              type={isShowPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full block border-0 outline-0 rounded-sm bg-transparent py-1.5 px-7 ring-1 ring-slate-400 text-xs text-slate-900 placeholder:text-slate-500 focus:ring-indigo-500"
              required
            />

            <Lock className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-500 pointer-events-none" />

            <button
              type="button"
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="absolute top-1.5 right-2 text-slate-500 cursor-pointer"
            >
              {isShowPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-slate-900"
            >
              Confirm Password
            </label>
          </div>

          <div className="mt-2 relative">
            <input
              type={isShowPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full block border-0 outline-0 rounded-sm bg-transparent py-1.5 px-7 ring-1 ring-slate-400 text-xs text-slate-900 placeholder:text-slate-500 focus:ring-indigo-500"
              required
            />

            <Lock className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-500 pointer-events-none" />

            <button
              type="button"
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="absolute top-1.5 right-2 text-slate-500 cursor-pointer"
            >
              {isShowPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-center rounded-sm bg-indigo-600 hover:bg-indigo-500 py-1.5 mt-2 text-sm text-slate-50 font-medium cursor-pointer"
        >
          Reset Password
        </button>
      </form>
    </>
  );
};

export default ChangePasswordPage;
