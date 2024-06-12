import React from "react";
import { TouchableOpacity } from "react-native";
import Svg from "../../assets/svg";
import { stylesBtnIcon, stylesBtnShadow, stylesBtnSizes, stylesButton } from "../../styles/buttonStyle";
import useButton from "./ButtonHooks";
import { useTheme } from "styled-components";
const BtnIcon = ({
  type = "primary",
  color = "primary",
  icon,
  style,
  disabled = false,
  shadow = true,
  size = "md",
  onClick: handleClick
}) => {
  const {
    fontColor,
    iconSize
  } = useButton();
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [stylesBtnIcon(disabled).default, stylesButton(disabled, theme.colors[type])[type], stylesBtnSizes[size], shadow && type !== "bordered" && stylesBtnShadow.shadow, {
      ...style,
      borderColor: disabled ? theme.colors.disabled : color
    }],
    activeOpacity: 0.7,
    disabled: disabled,
    onPress: handleClick
  }, icon && /*#__PURE__*/React.createElement(Svg, {
    image: icon,
    width: iconSize(size),
    height: iconSize(size),
    color: fontColor(disabled, type, color)
  }));
};
export default BtnIcon;
//# sourceMappingURL=ButtonIcon.js.map