"use client";

import { FC } from "react";
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <NextThemeProvider {...props}>{children}</NextThemeProvider>
    </>
  );
};
