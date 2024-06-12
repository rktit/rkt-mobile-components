"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ = require("../");
var _ButtonHooks = _interopRequireDefault(require("./ButtonHooks"));
var _svg = _interopRequireDefault(require("../../assets/svg"));
var _styledComponents = require("styled-components");
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
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    activeOpacity: 0.5,
    style: [style, {
      opacity: disabled ? 0.5 : 1
    }],
    disabled: disabled
  }, icon && /*#__PURE__*/_react.default.createElement(_svg.default, {
    image: icon,
    width: 24,
    height: 24,
    color: fontColor(disabled, type, color)
  }), text && /*#__PURE__*/_react.default.createElement(_.Text, {
    type: fontSize(size),
    underline: underline,
    text: text ?? "",
    color: disabled ? theme.colors.disabled : color
  }));
};
var _default = exports.default = BtnTransparent;
//# sourceMappingURL=ButtonTransparent.js.map