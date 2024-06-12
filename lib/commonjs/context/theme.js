"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _native = require("styled-components/native");
var _themeStyle = require("../styles/themeStyle");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ThemeLibProvider({
  children,
  theme
}) {
  const mergeTheme = theme => {
    return {
      ..._themeStyle.baseTheme,
      ...theme
    };
  };
  const _merge = mergeTheme(theme);
  console.log("🚀 ~ ThemeLibProvider ~ mergedTheme:", _merge);
  return /*#__PURE__*/_react.default.createElement(_native.ThemeProvider, {
    theme: _merge
  }, children);
  ;
}
var _default = exports.default = ThemeLibProvider;
//# sourceMappingURL=theme.js.map