"use client";

import type { ISidebarItem } from "@/types";

import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, ChevronRight, Plus, Power } from "lucide-react";
import { cn } from "@/lib/utils";
import { sidebarConfig } from "@/config";

import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Logo } from "../global";

export const Sidebar: FC = () => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: number]: boolean;
  }>({});

  const pathname = usePathname();

  return (
    <>
      <div
        className="fixed hidden md:block md:w-[220px] lg:w-[280px] h-full
       bg-muted/40 border-r"
      >
        <div className="flex flex-col gap-2 h-full max-h-screen">
          <div className="h-14 lg:h-[60px] border-b flex items-center justify-between px-2">
            <Logo />

            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Bell className="w-5 h-5 text-slate-600" />
            </Button>
          </div>

          <div className="flex-1 mt-2">
            <nav className="grid items-start mx-2 space-y-2">
              {sidebarConfig.map((item: ISidebarItem, i: number) => {
                const {
                  title,
                  href = "#",
                  Icon,
                  isDropdown,
                  dropdownMenu,
                } = item;

                return (
                  <div key={i}>
                    {isDropdown ? (
                      <Collapsible>
                        <CollapsibleTrigger
                          onClick={() =>
                            setOpenDropdowns((prev) => ({
                              ...prev,
                              [i]: !prev[i],
                            }))
                          }
                          className={cn(
                            "w-full flex items-center gap-3 px-1.5 py-1.5 rounded-sm text-xs text-slate-600 dark:text-slate-300 transition-all hover:text-primary dark:hover:text-white hover:bg-muted/80 cursor-pointer",
                            dropdownMenu?.some(
                              ({ href }) => pathname === href
                            ) && "bg-muted text-primary dark:text-white"
                          )}
                        >
                          <Icon className="w-4 h-4" />
                          {title}
                          {openDropdowns[i] ? (
                            <ChevronDown className="w-4 h-4 ml-auto" />
                          ) : (
                            <ChevronRight className="w-4 h-4 ml-auto" />
                          )}
                        </CollapsibleTrigger>

                        <CollapsibleContent className="mt-1 p-2 bg-white dark:bg-slate-800 rounded-sm space-y-1">
                          {dropdownMenu?.map(({ label, href }, j: number) => (
                            <Link
                              key={j}
                              href={href}
                              className={cn(
                                "flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 dark:hover:text-white ml-4 px-1.5 py-1 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-sm",
                                pathname === href &&
                                  "bg-slate-200 text-primary dark:bg-slate-700 dark:text-white"
                              )}
                            >
                              {label}
                              <Plus className="w-3 h-3" />
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        href={href}
                        className={cn(
                          "w-full flex items-center gap-3 px-1.5 py-1.5 rounded-sm text-xs text-slate-600 dark:text-slate-300 transition-all hover:text-primary dark:hover:text-white hover:bg-muted/80 cursor-pointer",
                          pathname === href &&
                            "bg-muted text-primary dark:text-white"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        {title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          <Button variant="default" size="sm" className="mb-4 mx-2 text-sm">
            <Power className="w-2 h-2 text-xs" />
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};
