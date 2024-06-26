"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themeStyle = require("../../styles/themeStyle");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const InputText = props => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    placeholderTextColor: _themeStyle.Colors.greyLight
  }, props));
};
var _default = exports.default = InputText;
//# sourceMappingURL=InputText.js.map