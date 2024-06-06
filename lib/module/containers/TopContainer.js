import React from "react";
import { Container } from "../components";
export default function TopContainer({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement(Container, {
    padding: false,
    style: [{
      backgroundColor: "#fff",
      height: 124,
      maxHeight: 124
    }, style]
  }, children);
}
//# sourceMappingURL=TopContainer.js.map