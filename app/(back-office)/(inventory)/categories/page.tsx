"use client";

import { FC } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const CategoriesPage: FC = () => {
  return (
    <>
      <div className="">
        <Button asChild>
          <Link href="/categories/new">New Category</Link>
        </Button>
      </div>
      <h2>Categories Page</h2>
    </>
  );
};

export default CategoriesPage;
