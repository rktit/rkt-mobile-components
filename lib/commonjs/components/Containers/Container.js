"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = ({
  children,
  color = "#F9F9F9",
  style,
  padding = true
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles(color, padding).container, style]
  }, children);
};
const styles = (color, padding) => _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: padding ? 24 : 0,
    paddingVertical: padding ? 48 : 0,
    backgroundColor: color,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }
});
var _default = exports.default = Container;
//# sourceMappingURL=Container.js.map