"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _InputText = _interopRequireDefault(require("./InputText"));
var _reactNative = require("react-native");
var _inputStyle = require("../../styles/inputStyle");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Input = ({
  control,
  name
}) => {
  const [actived, setActived] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_inputStyle.InputStyle, {
    actived: actived,
    error: !error
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    control: control,
    name: name,
    render: ({
      field: {
        onChange,
        value
      },
      fieldState: {
        error
      }
    }) => {
      setError(error);
      return /*#__PURE__*/_react.default.createElement(_InputText.default, {
        defaultValue: value,
        label: "nome do titular do cart\xE3o",
        onChangeText: onChange,
        onFocus: () => setActived(true),
        onBlur: () => setActived(false)
      });
    }
  }))), (error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, error === null || error === void 0 ? void 0 : error.message, "."));
};
var _default = exports.default = Input;
//# sourceMappingURL=index.js.map