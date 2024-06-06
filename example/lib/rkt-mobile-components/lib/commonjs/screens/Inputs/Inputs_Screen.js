"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _components = require("../../components");
var _containers = require("../../containers");
var _InputHooks = _interopRequireDefault(require("./InputHooks"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Home() {
  const {
    control
  } = (0, _InputHooks.default)();
  return /*#__PURE__*/_react.default.createElement(_components.Container, {
    padding: false
  }, /*#__PURE__*/_react.default.createElement(_containers.ContentContainer, {
    style: styles.content
  }, /*#__PURE__*/_react.default.createElement(_components.Item, {
    style: {
      paddingBottom: 12
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    text: "inputs.title",
    type: "h3",
    weight: "bold"
  })), /*#__PURE__*/_react.default.createElement(_components.Item, {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    text: "inputs.title",
    type: "h5",
    align: "left",
    width: "100%"
  })), /*#__PURE__*/_react.default.createElement(_components.Item, null, /*#__PURE__*/_react.default.createElement(_components.Input, {
    control: control,
    name: "email"
  }))));
}
const styles = _reactNative.StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
//# sourceMappingURL=Inputs_Screen.js.map