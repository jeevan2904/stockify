"use client";

import { FC } from "react";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const FormHeader: FC = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="w-6 h-6 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="sr-only">Back</span>
        </Button>

        <h1 className="flex-1 shrink-0 text-md font-medium tracking-tight sm:grow-0 whitespace-nowrap">
          Add Category
        </h1>

        <div className="hidden md:flex items-center gap-2 md:ml-auto">
          <Button variant="outline" size="sm" className="cursor-pointer">
            Discard
          </Button>

          <Button variant="default" size="sm" className="cursor-pointer">
            Save Category
          </Button>
        </div>
      </div>
    </>
  );
};
