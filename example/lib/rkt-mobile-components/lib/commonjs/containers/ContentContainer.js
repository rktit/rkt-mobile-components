"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContentContainer;
var _react = _interopRequireDefault(require("react"));
var _components = require("../components");
var _themeStyle = require("../styles/themeStyle");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ContentContainer({
  children,
  color,
  padding = true,
  style
}) {
  return /*#__PURE__*/_react.default.createElement(_components.Container, {
    padding: padding,
    style: [style, {
      backgroundColor: color ?? _themeStyle.Colors.greyLight
    }]
  }, children);
}
//# sourceMappingURL=ContentContainer.js.map