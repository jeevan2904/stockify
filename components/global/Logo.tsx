"use client";

import { FC } from "react";
import { BaggageClaim } from "lucide-react";

export const Logo: FC = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900">
          <BaggageClaim className="w-4 h-4" />
        </div>

        <h2 className="font-bold text-xl">Stockify</h2>
      </div>
    </>
  );
};
