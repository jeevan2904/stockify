"use client";

import { FC } from "react";
import Image from "next/image";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const AvatarMenu: FC = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
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
        </SheetTrigger>

        <SheetContent side="right"></SheetContent>
      </Sheet>
    </>
  );
};
