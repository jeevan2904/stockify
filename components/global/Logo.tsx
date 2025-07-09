"use client";

import { FC } from "react";
import Link from "next/link";
import { Store } from "lucide-react";

export const Logo: FC = () => {
  return (
    <>
      <Link href="/" className="flex items-center gap-2">
        <div className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900">
          <Store className="w-4 h-4" />
        </div>

        <h2 className="font-bold text-md">Stockify</h2>
      </Link>
    </>
  );
};
