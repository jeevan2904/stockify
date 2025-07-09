"use client";

import { FC } from "react";
import Image from "next/image";
import { LayoutGrid, SearchIcon, ShoppingBasket } from "lucide-react";

import { Button } from "../ui/button";
import { Logo, ModeToggle } from "../global";

export const Header: FC = () => {
  return (
    <>
      <header className="h-14 lg:h-[60px] border-b border-slate-300 flex items-center">
        <nav className="container flex items-center gap-4">
          <Logo />

          <Button
            variant="default"
            size="sm"
            className="cursor-pointer text-xs"
          >
            <LayoutGrid className="w-3 h-3" />
            <span className="sr-only sm:not-sr-only">Catalog</span>
          </Button>

          <div className="flex-1 relative">
            <input
              type="search"
              placeholder="Search for Products, Categories etc.,"
              className="w-full border-0 outline-0 rounded-sm ring-1 ring-slate-400 focus:ring-indigo-500 pl-6 pe-2 text-xs py-1.5 text-slate-800 placeholder:text-slate-500"
            />

            <SearchIcon className="absolute w-4 h-4 top-1.5 left-1 text-slate-500" />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="cursor-pointer">
              <ShoppingBasket className="w-5 h-5" />
            </Button>

            <ModeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="border p-0.5 rounded-full cursor-pointer"
          >
            <Image
              src="/avatar.jpeg"
              alt="user-image"
              width={512}
              height={512}
              className="rounded-full"
            />
          </Button>
        </nav>
      </header>
    </>
  );
};
