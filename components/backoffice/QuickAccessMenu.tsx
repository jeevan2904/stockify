"use client";

import { FC } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const QuickAccessMenu: FC = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="default" size="sm" className="cursor-pointer">
            <Plus className="w-5 h-5" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="mt-2 mr-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="#" className="flex items-center gap-2">
            <Plus className="w-3 h-3 text-slate-500" />
            <span className="text-xs text-slate-500 hover:text-slate-800 hover:underline">
              Analytics
            </span>
          </Link>

          <Link href="#" className="flex items-center gap-2">
            <Plus className="w-3 h-3 text-slate-500" />
            <span className="text-xs text-slate-500">Analytics</span>
          </Link>
        </PopoverContent>
      </Popover>
    </>
  );
};
