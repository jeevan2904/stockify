"use client";

import { FC } from "react";
import { AlignJustify, SearchIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ModeToggle } from "../global";
import { AvatarMenu } from "./AvatarMenu";
import { QuickAccessMenu } from "./QuickAccessMenu";

export const Navbar: FC = () => {
  return (
    <>
      <header className="fixed w-full md:w-[calc(100%-220px)] lg:w-[calc(100%-280px)] h-14 lg:h-[60px] md:ml-[220px] lg:ml-[280px] px-2 bg-muted/40 border-b flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild className="block md:hidden ml-2 cursor-pointer">
            <Button variant="outline" size="sm">
              <AlignJustify className="w-4 h-4" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[220px]"></SheetContent>
        </Sheet>

        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Search for Products, Categories etc.,"
            className="w-full max-w-[600px] text-sm border-0 outline-0 pl-7 pe-2 py-1.5 ring-1 ring-slate-400 focus:ring-indigo-500 placeholder:text-slate-400 text-slate-800 rounded-md"
          />

          <SearchIcon className="w-4 h-4 absolute top-2 left-1.5 text-slate-400" />
        </div>

        <QuickAccessMenu />

        <ModeToggle />

        <AvatarMenu />
      </header>
    </>
  );
};
