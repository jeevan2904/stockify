"use client";

import { FC, ReactNode } from "react";

const BackofficeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <section>{children}</section>
    </>
  );
};

export default BackofficeLayout;
