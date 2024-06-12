import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { baseTheme } from '../styles/themeStyle';
function ThemeLibProvider({
  children,
  theme
}) {
  const mergeTheme = theme => {
    return {
      ...baseTheme,
      ...theme
    };
  };
  const _merge = mergeTheme(theme);
  console.log("🚀 ~ ThemeLibProvider ~ mergedTheme:", _merge);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: _merge
  }, children);
  ;
}
export default ThemeLibProvider;
//# sourceMappingURL=theme.js.map