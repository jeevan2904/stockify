"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const LoginPage: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState<Boolean>(false);

  return (
    <>
      <div className="mt-10 text-center">
        <h2 className="font-semibold">Login to your Account</h2>
        <p className="text-xs font-thin">
          Welcome Back! Please fill in your details to login:
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

        <div className="">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-slate-900"
            >
              Password
            </label>

            <Link
              href="/forgot-password"
              className="font-semibold text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot Password?
            </Link>
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
          Sign In
        </button>
      </form>

      <p className="mt-10 text-center text-sm text-slate-700">
        Not yet registered? &nbsp;
        <Link
          href="/signup"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline"
        >
          Signup Now
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
