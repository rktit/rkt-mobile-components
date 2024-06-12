"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _fontStyle = require("../styles/fontStyle");
var _reactI18next = require("react-i18next");
var _native = require("styled-components/native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Text = ({
  text,
  type = "paragraph",
  color,
  weight = "regular",
  testID = "text-id",
  underline = false,
  align = "center",
  width
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const theme = (0, _native.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    testID: testID,
    style: [(0, _fontStyle.stylesBase)(color ?? theme.colors.black)[weight], _fontStyle.stylesFont[type], {
      textDecorationLine: underline ? "underline" : "none",
      textAlign: align,
      width: width
    }]
  }, t(text));
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Text);
//# sourceMappingURL=TextComponent.js.map