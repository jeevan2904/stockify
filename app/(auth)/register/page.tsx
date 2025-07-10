"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

const SignUpPage: FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <>
      <section className="mt-6">
        <div className="text-center">
          <h2 className="font-semibold text-md">Create an Account</h2>
          <p className="font-light text-xs">
            Join Us! Please provide your details to register:
          </p>
        </div>

        <form className="mt-6 space-y-4">
          <div className="">
            <label htmlFor="fullName" className="text-sm block">
              Full Name:
            </label>

            <div className="mt-1 relative">
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter Full Name"
                required
                className="w-full border-0 outline-0 ring-1 ring-slate-400 rounded-sm pl-7 py-1 text-xs focus:ring-indigo-500 placeholder:text-slate-500"
              />

              <User className="w-4 h-4 absolute top-1.5 left-1.5 text-slate-500" />
            </div>
          </div>

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
            <label htmlFor="password" className="block text-sm">
              Password:
            </label>

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
            className="w-full text-center text-xs rounded-sm mt-1 bg-indigo-600 text-slate-50 hover:bg-indigo-500 py-1.5 font-semibold cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          Already have an account?&nbsp;
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </section>
    </>
  );
};

export default SignUpPage;
