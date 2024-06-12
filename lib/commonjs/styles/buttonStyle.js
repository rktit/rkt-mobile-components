"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stylesButton = exports.stylesBtnSizes = exports.stylesBtnShadow = exports.stylesBtnIcon = exports.stylesBtnDefault = void 0;
var _reactNative = require("react-native");
var _style = require("../utils/style");
const stylesBtnDefault = disabled => _reactNative.StyleSheet.create({
  default: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    opacity: disabled ? 0.5 : 1
  }
});
exports.stylesBtnDefault = stylesBtnDefault;
const stylesBtnIcon = disabled => _reactNative.StyleSheet.create({
  default: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 48,
    opacity: disabled ? 0.5 : 1
  }
});
exports.stylesBtnIcon = stylesBtnIcon;
const stylesButton = (disabled, color) => _style.DynamicStyleSheet.create(theme => ({
  transparent: {
    backgroundColor: "transparent"
  },
  primary: {
    backgroundColor: disabled ? theme.app.colors.disabled : color
  },
  secondary: {
    backgroundColor: disabled ? theme.app.colors.disabled : color
  },
  disabled: {
    backgroundColor: disabled ? theme.app.colors.disabled : color
  },
  icon: {
    backgroundColor: "transparent"
  },
  rounded: {
    backgroundColor: disabled ? theme.app.colors.disabled : color
  },
  bordered: {
    backgroundColor: "transparent",
    borderWidth: disabled ? 0.5 : 1
  },
  underline: {}
}));
exports.stylesButton = stylesButton;
const stylesBtnShadow = exports.stylesBtnShadow = _style.DynamicStyleSheet.create(theme => ({
  shadow: {
    shadowColor: theme.app.colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
}));
const stylesBtnSizes = exports.stylesBtnSizes = _reactNative.StyleSheet.create({
  lg: {
    minHeight: 64,
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  md: {
    minHeight: 48,
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  sm: {
    minHeight: 32,
    paddingHorizontal: 8,
    paddingVertical: 8
  }
});
//# sourceMappingURL=buttonStyle.js.map