"use client";

import { FC } from "react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormHeader } from "./FormHeader";

export const CategoryForm: FC = () => {
  return (
    <>
      <FormHeader />

      <div className="grid grid-cols-12 gap-4 lg:gap-6 mt-3">
        <div className="col-span-full md:col-span-8">
          <Card></Card>
        </div>

        <div className="col-span-full md:col-span-4 space-y-4 lg:space-y-6">
          <Card></Card>

          <Card>
            <CardHeader>
              <CardTitle>Category Image</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="w-full h-[100px] border rounded-sm p-1">
                <Image
                  src={"/"}
                  className="w-full object-cover"
                  alt="category-image"
                  width="300"
                  height="300"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
