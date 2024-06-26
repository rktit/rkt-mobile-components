"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home_Screen;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeConfig = _interopRequireDefault(require("react-native-config"));
var _components = require("../../components");
var _themeStyle = require("../../styles/themeStyle");
var _containers = require("../../containers");
var _native = require("@react-navigation/native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Home_Screen() {
  const navigation = (0, _native.useNavigation)();
  console.log("API_URL:", _reactNativeConfig.default.API_URL);
  return /*#__PURE__*/_react.default.createElement(_components.Container, {
    padding: false
  }, /*#__PURE__*/_react.default.createElement(_containers.ContentContainer, {
    style: styles.content
  }, /*#__PURE__*/_react.default.createElement(_components.Item, null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    text: "home.btn.botoes",
    type: "bordered",
    color: _themeStyle.Colors.secondary,
    onClick: () => navigation.navigate("Buttons_Screen")
  })), /*#__PURE__*/_react.default.createElement(_components.Item, null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    text: "home.btn.inputs",
    type: "bordered",
    color: _themeStyle.Colors.secondary,
    onClick: () => navigation.navigate("Inputs_Screen")
  })), /*#__PURE__*/_react.default.createElement(_components.Item, null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    disabled: true,
    text: "home.btn.containers",
    type: "primary",
    color: _themeStyle.Colors.primary,
    onClick: () => navigation.navigate("Buttons_Screen")
  }))));
}
const styles = _reactNative.StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
//# sourceMappingURL=Home_Screen.js.map