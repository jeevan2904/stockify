"use client";

import { FC } from "react";
import Link from "next/link";

import { footerConfig } from "@/config";

export const Footer: FC = () => {
  const { Logo, summary, contacts, navigationLinks, policies, mediaLinks } =
    footerConfig;

  return (
    <>
      <footer className="container">
        <div className="border-b border-slate-200 py-6 grid grid-cols-12 gap-6">
          <div className="col-span-full md:col-span-8 lg:col-span-4">
            <Logo />

            <p className="my-2 font-light line-clamp-3 text-xs">{summary}</p>

            <div className="mt-6 space-y-2">
              {contacts.map(({ Icon, label }, i: number) => (
                <div key={i} className="flex gap-3 items-center text-xs">
                  <Icon className="w-4 h-4" />

                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {navigationLinks.map(({ title, links }, j: number) => (
            <div
              key={j}
              className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-2"
            >
              <h3 className="font-semibold text-base">{title}</h3>

              <div className="flex flex-col gap-2 mt-3 text-xs">
                {links.map(({ name, path }, k: number) => (
                  <Link key={k} href={path} className="hover:underline">
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center flex-wrap my-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Stockify - All Rights Reserved.
          </p>

          <div className="flex items-center gap-3 text-xs flex-wrap">
            {policies.map(({ label, path }, i: number) => (
              <Link key={i} href={path} className="hover:underline text-wrap">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {mediaLinks.map(({ Icon, href }, j: number) => (
              <Link key={j} href={href} className="hover:scale-120">
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
