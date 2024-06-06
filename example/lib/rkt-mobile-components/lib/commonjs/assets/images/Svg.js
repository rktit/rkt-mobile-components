"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _hideOn = _interopRequireDefault(require("./SVG/hide-on.svg"));
var _hideOff = _interopRequireDefault(require("./SVG/hide-off.svg"));
var _logo = _interopRequireDefault(require("./SVG/logo.svg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Svg = ({
  image,
  width = 24,
  height = 24,
  color,
  style
}) => {
  switch (image) {
    case "hide-on":
      return /*#__PURE__*/_react.default.createElement(_hideOn.default, {
        width: width,
        height: height,
        fill: color,
        style: style
      });
    case "hide-off":
      return /*#__PURE__*/_react.default.createElement(_hideOff.default, {
        width: width,
        height: height,
        fill: color,
        style: style
      });
    case "logo":
      return /*#__PURE__*/_react.default.createElement(_logo.default, {
        width: width,
        height: height,
        style: style
      });
  }
};
var _default = exports.default = Svg;
//# sourceMappingURL=Svg.js.map