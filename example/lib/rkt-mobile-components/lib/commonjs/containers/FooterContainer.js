"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FooterContainer;
var _react = _interopRequireDefault(require("react"));
var _components = require("../components");
var _themeStyle = require("../styles/themeStyle");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function FooterContainer({
  children
}) {
  return /*#__PURE__*/_react.default.createElement(_components.Container, {
    height: 70,
    color: _themeStyle.Colors.white,
    padding: false,
    style: {
      borderTopLeftRadius: 8,
      borderTopEndRadius: 8,
      height: 70,
      maxHeight: 70,
      paddingHorizontal: 0,
      flexDirection: "row",
      borderWidth: 1,
      borderColor: _themeStyle.Colors.greyLight
    }
  }, children);
}
//# sourceMappingURL=FooterContainer.js.map