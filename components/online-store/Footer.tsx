"use client";

import { FC } from "react";
import Link from "next/link";

import { footerConfig } from "@/config";

export const Footer: FC = () => {
  const { Logo, summary, contacts, navigationLinks, policies, mediaLinks } =
    footerConfig;

  return (
    <>
      <footer className="mt-6">
        <div className="grid grid-cols-12 gap-4 pb-6 border-b border-slate-300">
          <div className="col-span-full md:col-span-8 lg:col-span-4">
            <Logo />

            <p className="font-light text-xs italic mt-2 line-clamp-3">
              {summary}
            </p>

            <div className="space-y-2 mt-4">
              {contacts.map(({ label, Icon }, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />

                  <p className="text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {navigationLinks.map(({ title, links }, i: number) => (
            <div
              key={i}
              className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-2"
            >
              <h2 className="font-semibold text-sm">{title}</h2>

              <div className="mt-4 flex flex-col gap-1.5">
                {links.map(({ name, path }, j: number) => (
                  <Link
                    key={j}
                    href={path}
                    className="text-xs cursor-pointer hover:underline"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between flex-wrap space-y-1.5 py-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Stockify - All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            {policies.map(({ name, path }, i: number) => (
              <Link
                key={i}
                href={path}
                className="cursor-pointer text-xs hover:underline"
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {mediaLinks.map(({ Icon, href }, j: number) => (
              <Link key={j} href={href} className="hover:scale-125">
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
