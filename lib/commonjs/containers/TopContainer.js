"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopContainer;
var _react = _interopRequireDefault(require("react"));
var _components = require("../components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TopContainer({
  children,
  style
}) {
  return /*#__PURE__*/_react.default.createElement(_components.Container, {
    padding: false,
    style: [{
      backgroundColor: "#fff",
      height: 124,
      maxHeight: 124
    }, style]
  }, children);
}
//# sourceMappingURL=TopContainer.js.map