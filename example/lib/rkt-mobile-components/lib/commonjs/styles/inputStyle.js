"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stylesInput = exports.InputStyle = void 0;
var _reactNative = require("react-native");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _themeStyle = require("./themeStyle");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const stylesInput = exports.stylesInput = _reactNative.StyleSheet.create({
  grid: {
    paddingHorizontal: 2,
    paddingVertical: 2
  },
  default: {
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: _themeStyle.Colors.white,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: _themeStyle.Colors.white
  },
  input: {
    width: "100%"
  },
  label: {
    marginBottom: 8
  },
  icon: {
    width: 24,
    marginRight: 32
  },
  error: {
    borderWidth: 1,
    borderColor: _themeStyle.Colors.error,
    backgroundColor: _themeStyle.Colors.errorBackground
  },
  helperText: {
    paddingHorizontal: 4,
    paddingVertical: 2
  }
});
const InputStyle = exports.InputStyle = (0, _styledComponents.default)(_reactNative.View)`
  flex-direction: row;
  align-items: center;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.22px;
  shadow-radius: 2.22px;
  elevation: 3;
  background-color: ${props => props.theme.app.colors.white};
  border-radius: 16px;
  padding-horizontal: 8px;
  padding-vertical: 2px;
  border-width: 1px;
  border-color: ${props => !props.error ? props.theme.app.colors.error : !props.actived ? props.theme.app.colors.white : props.theme.app.colors.success};
`;
//# sourceMappingURL=inputStyle.js.map