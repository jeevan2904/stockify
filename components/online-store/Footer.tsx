"use client";

import { FC } from "react";

import { Logo } from "../global";

export const Footer: FC = () => {
  return (
    <>
      <footer>
        <div className="grid grid-cols-12 gap-6 mt-4 pb-8 border-b border-slate-300">
          <div className="col-span-full md:col-span-8 lg:col-span-4">
            <Logo />

            <p className="text-xs font-light italic line-clamp-2 mt-2">
              Full Stack Next.js E-Commerce application involving 3 systems -
              POS, Online Store & Inventory System.
            </p>
          </div>
          <div className="col-span-full sm:col-span-3 md:col-span-4 lg:col-span-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ea
              facere dolorum quo amet repudiandae eligendi odit, ad corrupti cum
              iste error. Earum, sunt assumenda.
            </p>
          </div>
          <div className="col-span-full sm:col-span-3 md:col-span-4 lg:col-span-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ea
              facere dolorum quo amet repudiandae eligendi odit, ad corrupti cum
              iste error. Earum, sunt assumenda.
            </p>
          </div>
          <div className="col-span-full sm:col-span-3 md:col-span-4 lg:col-span-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ea
              facere dolorum quo amet repudiandae eligendi odit, ad corrupti cum
              iste error. Earum, sunt assumenda.
            </p>
          </div>
          <div className="col-span-full sm:col-span-3 md:col-span-4 lg:col-span-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ea
              facere dolorum quo amet repudiandae eligendi odit, ad corrupti cum
              iste error. Earum, sunt assumenda.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
