"use client";

import { FC } from "react";
import { Luggage } from "lucide-react";

export const Logo: FC = () => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 rounded-lg bg-slate-900 text-slate-50 flex items-center justify-center">
          <Luggage className="w-5 h-5" />
        </div>

        <h2 className="text-lg font-semibold">Stockify</h2>
      </div>
    </>
  );
};
