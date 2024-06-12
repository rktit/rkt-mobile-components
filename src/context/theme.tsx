import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { baseTheme } from '../styles/themeStyle';

type IThemeProps = {
  readonly children: any;
  readonly theme?: any;
};

function ThemeLibProvider({ children, theme }: IThemeProps) {

  const mergeTheme = (theme: any) => {
    return {
      ...baseTheme,
      ...theme,
    };
  };

  const _merge = mergeTheme(theme);

  console.log("🚀 ~ ThemeLibProvider ~ mergedTheme:", _merge)
  return <ThemeProvider theme={_merge}>{children}</ThemeProvider>;;
}

export default ThemeLibProvider;
