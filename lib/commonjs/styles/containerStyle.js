"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stylesItemPadding = exports.stylesItemMargin = exports.stylesItemGrid = exports.stylesItemAlign = exports.styleBox = void 0;
var _reactNative = require("react-native");
const styleBox = (pdHorizontal, pdVertical, width) => _reactNative.StyleSheet.create({
  box: {
    paddingHorizontal: pdHorizontal,
    paddingVertical: pdVertical,
    width: width
  }
});
exports.styleBox = styleBox;
const stylesItemGrid = width => _reactNative.StyleSheet.create({
  item: {
    width: width || "100%"
  },
  input: {
    width: width || "100%"
  }
});
exports.stylesItemGrid = stylesItemGrid;
const stylesItemAlign = exports.stylesItemAlign = _reactNative.StyleSheet.create({
  center: {
    alignItems: "center"
  },
  left: {
    alignItems: "flex-start"
  }
});
const stylesItemPadding = (pl, pr, pt, pb) => _reactNative.StyleSheet.create({
  item: {
    paddingLeft: pl,
    paddingRight: pr,
    paddingTop: pt,
    paddingBottom: pb
  }
});
exports.stylesItemPadding = stylesItemPadding;
const stylesItemMargin = (ml, mr, mt, mb) => _reactNative.StyleSheet.create({
  item: {
    marginLeft: ml,
    marginRight: mr,
    marginTop: mt,
    marginBottom: mb
  }
});
exports.stylesItemMargin = stylesItemMargin;
//# sourceMappingURL=containerStyle.js.map