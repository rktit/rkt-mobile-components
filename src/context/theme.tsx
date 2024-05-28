import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

interface IThemeProps {
  children: React.ReactNode;
  theme: any;
}

const ThemeContext = createContext({ theme: "light" });

const RktThemeProvider = ({ children, theme }: IThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ThemeContext, RktThemeProvider };
