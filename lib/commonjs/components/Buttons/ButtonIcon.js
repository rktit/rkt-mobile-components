"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _svg = _interopRequireDefault(require("../../assets/svg"));
var _buttonStyle = require("../../styles/buttonStyle");
var _ButtonHooks = _interopRequireDefault(require("./ButtonHooks"));
var _styledComponents = require("styled-components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BtnIcon = ({
  type = "primary",
  color = "primary",
  icon,
  style,
  disabled = false,
  shadow = true,
  size = "md",
  onClick: handleClick
}) => {
  const {
    fontColor,
    iconSize
  } = (0, _ButtonHooks.default)();
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: [(0, _buttonStyle.stylesBtnIcon)(disabled).default, (0, _buttonStyle.stylesButton)(disabled, theme.colors[type])[type], _buttonStyle.stylesBtnSizes[size], shadow && type !== "bordered" && _buttonStyle.stylesBtnShadow.shadow, {
      ...style,
      borderColor: disabled ? theme.colors.disabled : color
    }],
    activeOpacity: 0.7,
    disabled: disabled,
    onPress: handleClick
  }, icon && /*#__PURE__*/_react.default.createElement(_svg.default, {
    image: icon,
    width: iconSize(size),
    height: iconSize(size),
    color: fontColor(disabled, type, color)
  }));
};
var _default = exports.default = BtnIcon;
//# sourceMappingURL=ButtonIcon.js.map