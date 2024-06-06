"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeConfig = _interopRequireDefault(require("react-native-config"));
var _components = require("../../components");
var _themeStyle = require("../../styles/themeStyle");
var _containers = require("../../containers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Home() {
  console.log("API_URL:", _reactNativeConfig.default.API_URL);
  return /*#__PURE__*/_react.default.createElement(_components.Container, {
    padding: false
  }, /*#__PURE__*/_react.default.createElement(_containers.ContentContainer, {
    style: styles.content
  }, /*#__PURE__*/_react.default.createElement(_components.Item, {
    style: {
      paddingBottom: 12
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    text: "buttons.title",
    type: "h3",
    weight: "bold"
  })), /*#__PURE__*/_react.default.createElement(_components.Item, {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    text: "buttons.title",
    type: "h5",
    align: "left",
    width: "100%"
  })), /*#__PURE__*/_react.default.createElement(_components.Button, {
    variant: "button",
    text: "buttons.primary",
    type: "primary",
    color: _themeStyle.Colors.primary
  })));
}
const styles = _reactNative.StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
//# sourceMappingURL=Buttons_Screen.js.map