"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const LoginPage: FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <>
      <section className="mt-6">
        <div className="text-center">
          <h2 className="font-semibold text-md">Login to your Account</h2>
          <p className="font-light text-xs">
            Welcome back! Please enter your details to login:
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

          <div className="">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm">
                Password:
              </label>

              <Link
                href="/forgot-password"
                className="font-semibold text-xs text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="mt-1 relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Password"
                required
                className="w-full border-0 outline-0 ring-1 ring-slate-400 rounded-sm px-7 py-1 text-xs focus:ring-indigo-500 placeholder:text-slate-500"
              />

              <Lock className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-500" />

              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute right-2 top-1.5 cursor-pointer"
              >
                {isPasswordVisible ? (
                  <EyeOff className="w-4 h-4 text-slate-500" />
                ) : (
                  <Eye className="w-4 h-4 text-slate-500" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-center text-xs rounded-sm bg-indigo-600 text-slate-50 hover:bg-indigo-500 py-1.5 mt-1 font-semibold cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          Not yet registered?&nbsp;
          <Link
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline cursor-pointer"
          >
            Signup Now
          </Link>
        </p>
      </section>
    </>
  );
};

export default LoginPage;
