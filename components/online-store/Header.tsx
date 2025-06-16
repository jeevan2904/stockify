"use client";

import { FC } from "react";
import Image from "next/image";
import { LayoutGrid, SearchIcon, ShoppingBasket } from "lucide-react";

import { Button } from "../ui/button";
import { Logo, ModeToggle } from "../global";

export const Header: FC = () => {
  return (
    <>
      <header className="w-full h-auto border-b border-slate-300 py-3 mb-4">
        <nav className="container flex items-center gap-4">
          <Logo />

          <Button
            variant="default"
            size="sm"
            className="flex items-center gap-1"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="sr-only sm:not-sr-only text-xs">Catalog</span>
          </Button>

          <div className="flex-1 relative">
            <input
              type="search"
              placeholder="Search here for Products, Categories etc.,"
              className="w-full border-0 outline-0 rounded-md block py-2 pl-7 pr-2 text-gray-800 text-xs shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-violet-500"
            />

            <SearchIcon className="absolute top-2 left-1.5 w-4 h-4 text-slate-500" />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="cursor-pointer">
              <ShoppingBasket className="w-5 h-5" />
            </Button>

            <ModeToggle />

            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full"
            >
              <Image
                src="/avatar.jpeg"
                alt="user-image"
                width={512}
                height={512}
                className="w-5 h-5"
              />
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};
