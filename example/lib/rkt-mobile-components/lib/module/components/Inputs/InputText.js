function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from "react";
import { TextInput } from "react-native";
import { Colors } from "../../styles/themeStyle";
const InputText = props => {
  return /*#__PURE__*/React.createElement(TextInput, _extends({
    placeholderTextColor: Colors.greyLight
  }, props));
};
export default InputText;
//# sourceMappingURL=InputText.js.map