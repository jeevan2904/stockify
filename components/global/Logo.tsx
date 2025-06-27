"use client";

import { FC } from "react";
import Link from "next/link";
import { Store } from "lucide-react";

export const Logo: FC = () => {
  return (
    <>
      <Link href="/" className="flex items-center gap-1">
        <div className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-900 text-slate-50">
          <Store className="w-5 h-5" />
        </div>

        <h2 className="font-bold text-lg">Stockify</h2>
      </Link>
    </>
  );
};
