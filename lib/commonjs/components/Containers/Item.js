"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _containerStyle = require("../../styles/containerStyle");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Item = ({
  ml = 0,
  mr = 0,
  mt = 6,
  mb = 6,
  pl = 0,
  pr = 0,
  pt = 0,
  pb = 0,
  width = "100%",
  type = "item",
  align = "center",
  children,
  style
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [(0, _containerStyle.stylesItemGrid)(width)[type], (0, _containerStyle.stylesItemPadding)(pl, pr, pt, pb).item, (0, _containerStyle.stylesItemMargin)(ml, mr, mt, mb).item, _containerStyle.stylesItemAlign[align], style]
  }, children);
};
var _default = exports.default = Item;
//# sourceMappingURL=Item.js.map