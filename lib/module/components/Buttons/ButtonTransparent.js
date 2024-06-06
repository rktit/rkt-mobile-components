import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../";
import useButton from "./ButtonHooks";
import Svg from "../../assets/images/Svg";
import { Colors } from "../../styles/themeStyle";
const BtnTransparent = ({
  text,
  color,
  style,
  type = "primary",
  icon,
  disabled = false,
  underline = false,
  size = "md"
}) => {
  const {
    fontColor,
    fontSize
  } = useButton();
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    activeOpacity: 0.5,
    style: [style, {
      opacity: disabled ? 0.5 : 1
    }],
    disabled: disabled
  }, icon && /*#__PURE__*/React.createElement(Svg, {
    image: icon,
    width: 24,
    height: 24,
    color: fontColor(disabled, type, color)
  }), text && /*#__PURE__*/React.createElement(Text, {
    type: fontSize(size),
    underline: underline,
    text: text ?? "",
    color: disabled ? Colors.disabled : color
  }));
};
export default BtnTransparent;
//# sourceMappingURL=ButtonTransparent.js.map