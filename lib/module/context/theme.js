import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
const ThemeContext = /*#__PURE__*/createContext({
  theme: "light"
});
const RktThemeProvider = ({
  children,
  theme
}) => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, children);
};
export { ThemeContext, RktThemeProvider };
//# sourceMappingURL=theme.js.map