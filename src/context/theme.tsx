import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

interface IThemeProps {
  children: React.ReactNode;
  theme: any;
}

const ThemeContext = createContext({ theme: "light" });

const ConfigProvider = ({ children, theme }: IThemeProps) => {
  return (
    <ThemeContext.Provider
      value={{
        theme: "light",
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ConfigProvider };
