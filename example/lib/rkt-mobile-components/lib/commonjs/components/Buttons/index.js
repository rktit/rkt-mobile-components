"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonTransparent = _interopRequireDefault(require("./ButtonTransparent"));
var _Button = _interopRequireDefault(require("./Button"));
var _ButtonIcon = _interopRequireDefault(require("./ButtonIcon"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ButtonComponent = props => {
  switch (props.variant) {
    case "link":
      return /*#__PURE__*/_react.default.createElement(_ButtonTransparent.default, props);
    case "icon":
      return /*#__PURE__*/_react.default.createElement(_ButtonIcon.default, props);
    default:
      return /*#__PURE__*/_react.default.createElement(_Button.default, props);
  }
};
var _default = exports.default = ButtonComponent;
//# sourceMappingURL=index.js.map