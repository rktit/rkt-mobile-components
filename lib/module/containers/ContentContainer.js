import React from "react";
import { Container } from "../components";
import { Colors } from "../styles/themeStyle";
export default function ContentContainer({
  children,
  color,
  padding = true,
  style
}) {
  return /*#__PURE__*/React.createElement(Container, {
    padding: padding,
    style: [style, {
      backgroundColor: color ?? Colors.greyLight
    }]
  }, children);
}
//# sourceMappingURL=ContentContainer.js.map