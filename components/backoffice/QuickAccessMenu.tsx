"use client";

import { FC } from "react";
import Link from "next/link";
import { Home, Plus } from "lucide-react";
import { sidebarConfig } from "@/config";

import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ISidebarItem } from "@/types";

export const QuickAccessMenu: FC = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="default" size="sm" className="cursor-pointer">
            <Plus className="w-5 h-5" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-screen max-w-max mt-2 mr-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="">
            <div className="flex items-center gap-2 text-slate-600">
              <Home className="w-4 h-4" />
              <h2 className="uppercase text-sm">General</h2>
            </div>

            <div className="mt-2 flex flex-col gap-1.5">
              {sidebarConfig
                .filter(
                  (item) => !item.isDropdown && item.href !== "/dashboard"
                )
                .map((item: ISidebarItem, i: number) => (
                  <Link
                    key={i}
                    href={item.href ?? "#"}
                    className="flex items-center gap-2"
                  >
                    <Plus className="w-3 h-3 text-slate-500" />
                    <span className="text-xs text-slate-500 hover:text-slate-800 hover:underline">
                      {item.title}
                    </span>
                  </Link>
                ))}
            </div>
          </div>

          {sidebarConfig
            .filter((item) => item.isDropdown)
            .map((item: ISidebarItem, i: number) => {
              const { title, Icon, dropdownMenu } = item;

              return (
                <div key={i} className="">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Icon className="w-4 h-4" />
                    <h2 className="uppercase text-sm">{title}</h2>
                  </div>

                  <div className="mt-2 flex flex-col gap-1.5">
                    {dropdownMenu?.map(({ label, href }, j: number) => (
                      <Link
                        key={j}
                        href={href}
                        className="flex items-center gap-2"
                      >
                        <Plus className="w-3 h-3 text-slate-500" />
                        <span className="text-xs text-slate-500 hover:text-slate-800 hover:underline">
                          {label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
        </PopoverContent>
      </Popover>
    </>
  );
};
