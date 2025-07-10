"use client";

import { FC } from "react";
import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/global";

export const Sidebar: FC = () => {
  return (
    <>
      <div className="h-full max-h-screen fixed hidden md:block md:w-[220px] lg:w-[280px] bg-muted border-r">
        <div className="h-full flex flex-col gap-2">
          <div className="h-14 lg:h-[60px] border-b flex items-center justify-between px-3">
            <Logo />

            <Button variant="outline" size="icon" className="cursor-pointer">
              <Bell className="w-4 h-4" />
            </Button>
          </div>

          <nav className="flex-1"></nav>

          <Button
            variant="default"
            size="sm"
            className="mx-3 mb-4 font-semibold"
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};
