"use client";

import { FC, ReactNode } from "react";

const BackOfficeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="">{children}</div>
    </>
  );
};

export default BackOfficeLayout;
