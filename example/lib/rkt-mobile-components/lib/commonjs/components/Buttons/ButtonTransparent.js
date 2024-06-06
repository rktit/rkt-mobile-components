"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ = require("../");
var _ButtonHooks = _interopRequireDefault(require("./ButtonHooks"));
var _Svg = _interopRequireDefault(require("../../assets/images/Svg"));
var _themeStyle = require("../../styles/themeStyle");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BtnTransparent = ({
  text,
  color,
  style,
  type = "primary",
  icon,
  disabled = false,
  underline = false,
  size = "md"
}) => {
  const {
    fontColor,
    fontSize
  } = (0, _ButtonHooks.default)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    activeOpacity: 0.5,
    style: [style, {
      opacity: disabled ? 0.5 : 1
    }],
    disabled: disabled
  }, icon && /*#__PURE__*/_react.default.createElement(_Svg.default, {
    image: icon,
    width: 24,
    height: 24,
    color: fontColor(disabled, type, color)
  }), text && /*#__PURE__*/_react.default.createElement(_.Text, {
    type: fontSize(size),
    underline: underline,
    text: text ?? "",
    color: disabled ? _themeStyle.Colors.disabled : color
  }));
};
var _default = exports.default = BtnTransparent;
//# sourceMappingURL=ButtonTransparent.js.map