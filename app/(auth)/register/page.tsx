"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

import { Logo } from "@/components/global";

const SignUpPage: FC = () => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

  return (
    <>
      <section className="">
        <div className="mt-10">
          <Logo />
        </div>

        <div className="mt-8 text-center">
          <h2 className="font-medium text-md">Register Now on Stockify</h2>
          <p className="text-xs font-light">
            Congrats! Please enter in your details to signup:
          </p>
        </div>

        <form className="mt-6 space-y-3">
          <div className="">
            <div className="flex items-center justify-between">
              <label
                htmlFor="fullName"
                className="block text-sm/6 font-medium text-slate-900"
              >
                Full Name
              </label>
            </div>

            <div className="mt-1 relative">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                className="w-full text-xs border-0 outline-0 pl-7 pe-2 py-1.5 ring-1 ring-slate-400 focus:ring-indigo-500 placeholder:text-slate-400 text-slate-800 rounded-sm"
                required
              />

              <User className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-400" />
            </div>
          </div>

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

          <div className="">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-slate-900"
              >
                Password
              </label>
            </div>

            <div className="mt-1 relative">
              <input
                type={isPasswordShown ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter Password"
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
            Register
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm">
            Already a member?&nbsp;
            <Link
              href="/login"
              className="text-indigo-600 cursor-pointer underline hover:text-indigo-500"
            >
              Login Now
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
