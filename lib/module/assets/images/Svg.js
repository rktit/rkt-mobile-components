import React from "react";
import SvgHideOn from "./SVG/hide-on.svg";
import SvgHideOff from "./SVG/hide-off.svg";
import SvgLogo from "./SVG/logo.svg";
const Svg = ({
  image,
  width = 24,
  height = 24,
  color,
  style
}) => {
  switch (image) {
    case "hide-on":
      return /*#__PURE__*/React.createElement(SvgHideOn, {
        width: width,
        height: height,
        fill: color,
        style: style
      });
    case "hide-off":
      return /*#__PURE__*/React.createElement(SvgHideOff, {
        width: width,
        height: height,
        fill: color,
        style: style
      });
    case "logo":
      return /*#__PURE__*/React.createElement(SvgLogo, {
        width: width,
        height: height,
        style: style
      });
  }
};
export default Svg;
//# sourceMappingURL=Svg.js.map