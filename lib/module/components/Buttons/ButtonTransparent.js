import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../";
import useButton from "./ButtonHooks";
import Svg from "../../assets/svg";
import { useTheme } from "styled-components";
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
  const theme = useTheme();
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
    color: disabled ? theme.colors.disabled : color
  }));
};
export default BtnTransparent;
//# sourceMappingURL=ButtonTransparent.js.map