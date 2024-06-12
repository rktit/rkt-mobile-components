"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Splash;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _native = require("@react-navigation/native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Splash() {
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    setTimeout(() => {
      navigation.navigate("Home_Screen");
    }, 3000);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeInUp.duration(1500),
    exiting: _reactNativeReanimated.FadeOut
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../../assets/images/logo.png"),
    style: styles.image,
    resizeMode: "contain"
  })));
}
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  image: {
    flex: 1,
    maxWidth: "90%",
    maxHeight: "100%",
    justifyContent: "center"
  },
  pet: {
    flex: 1,
    maxHeight: 180,
    justifyContent: "center"
  }
});
//# sourceMappingURL=Splash.js.map