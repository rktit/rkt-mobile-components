"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _themeStyle = require("../../styles/themeStyle");
const useButton = () => {
  const fontColor = (disabled, type, color) => {
    if (disabled) return _themeStyle.Colors.secondary;
    switch (type) {
      case "primary":
        return _themeStyle.Colors.black;
      case "secondary":
        return _themeStyle.Colors.white;
      case "disabled":
        return _themeStyle.Colors.secondary;
      case "icon":
        return _themeStyle.Colors.secondary;
      case "rounded":
        return _themeStyle.Colors.white;
      case "bordered":
        return color ?? _themeStyle.Colors.primary;
      default:
        return _themeStyle.Colors.primary;
    }
  };
  const iconSize = size => {
    switch (size) {
      case "lg":
        return 48;
      case "sm":
        return 24;
      default:
        return 32;
    }
  };
  const fontSize = size => {
    switch (size) {
      case "lg":
        return "h3";
      case "sm":
        return "small";
      default:
        return "paragraph";
    }
  };
  return {
    fontColor,
    iconSize,
    fontSize
  };
};
var _default = exports.default = useButton;
//# sourceMappingURL=ButtonHooks.js.map