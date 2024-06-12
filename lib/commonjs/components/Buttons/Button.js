"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ = require("..");
var _svg = _interopRequireDefault(require("../../assets/svg"));
var _ButtonHooks = _interopRequireDefault(require("./ButtonHooks"));
var _buttonStyle = require("../../styles/buttonStyle");
var _styledComponents = require("styled-components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Button = ({
  text,
  type = "primary",
  disabled = false,
  icon,
  style,
  color,
  underline = false,
  shadow = true,
  size = "md",
  onClick: handleClick
}) => {
  const {
    fontColor,
    iconSize,
    fontSize
  } = (0, _ButtonHooks.default)();
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: [(0, _buttonStyle.stylesBtnDefault)(disabled).default, (0, _buttonStyle.stylesButton)(disabled, theme.colors[type])[type], _buttonStyle.stylesBtnSizes[size], shadow && type !== "bordered" && _buttonStyle.stylesBtnShadow.shadow, {
      ...style,
      borderColor: disabled ? theme.colors.disabled : color
    }],
    activeOpacity: 0.7,
    onPress: handleClick,
    disabled: disabled
  }, icon && /*#__PURE__*/_react.default.createElement(_svg.default, {
    image: icon,
    width: iconSize(size),
    height: iconSize(size),
    color: fontColor(disabled, type, color),
    style: {
      marginRight: 8
    }
  }), text && /*#__PURE__*/_react.default.createElement(_.Text, {
    type: fontSize(size),
    underline: underline,
    testID: "text-btn-id",
    text: text,
    color: fontColor(disabled, type, color)
  }));
};
var _default = exports.default = Button;
//# sourceMappingURL=Button.js.map