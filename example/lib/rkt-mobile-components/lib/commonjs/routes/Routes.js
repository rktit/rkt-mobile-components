"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Routes;
var _react = _interopRequireDefault(require("react"));
var _native = require("@react-navigation/native");
var _nativeStack = require("@react-navigation/native-stack");
var _Home_Screen = _interopRequireDefault(require("../screens/Home/Home_Screen"));
var _Buttons_Screen = _interopRequireDefault(require("../screens/Buttons/Buttons_Screen"));
var _Inputs_Screen = _interopRequireDefault(require("../screens/Inputs/Inputs_Screen"));
var _Splash = _interopRequireDefault(require("../screens/Splash/Splash"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Routes() {
  const {
    Navigator,
    Screen
  } = (0, _nativeStack.createNativeStackNavigator)();
  return /*#__PURE__*/_react.default.createElement(_native.NavigationContainer, null, /*#__PURE__*/_react.default.createElement(Navigator, {
    initialRouteName: "Splash",
    screenOptions: {
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }, /*#__PURE__*/_react.default.createElement(Screen, {
    name: "Splash",
    component: _Splash.default,
    options: {
      headerShown: false
    }
  }), /*#__PURE__*/_react.default.createElement(Screen, {
    name: "Home_Screen",
    component: _Home_Screen.default,
    options: {
      headerTitle: "Componentes",
      headerBackVisible: false
    }
  }), /*#__PURE__*/_react.default.createElement(Screen, {
    name: "Buttons_Screen",
    component: _Buttons_Screen.default,
    options: {
      headerTitle: "Botões"
    }
  }), /*#__PURE__*/_react.default.createElement(Screen, {
    name: "Inputs_Screen",
    component: _Inputs_Screen.default,
    options: {
      headerTitle: "Inputs"
    }
  })));
}
//# sourceMappingURL=Routes.js.map