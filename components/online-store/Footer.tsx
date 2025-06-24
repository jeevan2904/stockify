"use client";

import { FC } from "react";
import Link from "next/link";

import { footerConfig } from "@/config";

export const Footer: FC = () => {
  const { Logo, summary, contacts, navigationLinks, policies, mediaLinks } =
    footerConfig;

  return (
    <>
      <footer className="mt-8">
        <div className="py-6 grid grid-cols-12 gap-6 border-b border-slate-200">
          <div className="col-span-full md:col-span-8 lg:col-span-4">
            <Logo />

            <p className="font-light text-xs line-clamp-3 mt-2">{summary}</p>

            <div className="space-y-2 mt-6">
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
              <h2 className="text-md font-semibold">{title}</h2>

              <div className="flex flex-col gap-1.5 mt-3 text-xs">
                {links.map(({ name, path }, j: number) => (
                  <Link
                    key={j}
                    href={path}
                    className="cursor-pointer hover:underline"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between flex-wrap space-y-2 py-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Stockify - All Rights Reserved
          </p>

          <div className="flex items-center flex-wrap gap-4">
            {policies.map(({ label, src }, i: number) => (
              <Link key={i} href={src} className="text-xs hover:underline">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            {mediaLinks.map(({ Icon, href }, k: number) => (
              <Link key={k} href={href} className="hover:scale-120">
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
