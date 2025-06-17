"use client";

import { FC } from "react";
import { Bell } from "lucide-react";

import { Button } from "../ui/button";
import { Logo } from "../global";

export const Sidebar: FC = () => {
  return (
    <>
      <div className="hidden md:flex flex-col md:fixed h-screen border-r bg-muted/40 md:w-[220px] lg:w-[280px]">
        <div className="h-14 lg:h-[60px] border-b flex items-center justify-between px-4 lg:px-6">
          <Logo />

          <Button variant="ghost" size="sm" className="cursor-pointer">
            <Bell className="w-4 h-4" />
          </Button>
        </div>

        <nav className="flex-1"></nav>
      </div>
    </>
  );
};
