"use client";

import { FC } from "react";
import Image from "next/image";
import { LayoutGrid, SearchIcon, ShoppingCart, Tags } from "lucide-react";

import { Button } from "../ui/button";
import { Logo, ModeToggle } from "../global";

export const Header: FC = () => {
  return (
    <>
      <header className="h-14 lg:h-[60px] sticky top-0 border-b border-slate-300 flex items-center mb-2">
        <div className="container flex items-center gap-4 md:gap-6">
          <Logo />

          <Button
            variant="default"
            size="sm"
            className="flex items-center gap-1"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="sr-only md:not-sr-only">Catalog</span>
          </Button>

          <div className="relative flex-1">
            <input
              type="search"
              placeholder="Search for Products, Categories etc.,"
              className="w-full text-sm border-0 outline-0 pl-7 pe-2 py-1.5 ring-1 ring-slate-400 focus:ring-indigo-500 placeholder:text-slate-400 text-slate-800 rounded-md"
            />

            <SearchIcon className="w-4 h-4 absolute top-2 left-1.5 text-slate-400" />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="cursor-pointer">
              <Tags className="w-4 h-4" />
            </Button>

            <ModeToggle />

            <Button variant="outline" size="icon" className="cursor-pointer">
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full p-0.5 border cursor-pointer"
          >
            <Image
              src="/avatar.jpeg"
              alt="user-image"
              width={512}
              height={512}
              className="rounded-full"
            />
          </Button>
        </div>
      </header>
    </>
  );
};
