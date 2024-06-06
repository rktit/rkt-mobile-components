import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "..";
import Svg from "../../assets/images/Svg";
import useButton from "./ButtonHooks";
import { stylesBtnDefault, stylesBtnShadow, stylesBtnSizes, stylesButton } from "../../styles/buttonStyle";
import { Colors } from "../../styles/themeStyle";
const Button = ({
  text,
  type = "primary",
  disabled = false,
  icon,
  style,
  color,
  underline = false,
  shadow = true,
  size = "md",
  onClick: handleClick
}) => {
  const {
    fontColor,
    iconSize,
    fontSize
  } = useButton();
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [stylesBtnDefault(disabled).default, stylesButton(disabled)[type], stylesBtnSizes[size], shadow && type !== "bordered" && stylesBtnShadow.shadow, {
      ...style,
      borderColor: disabled ? Colors.disabled : color
    }],
    activeOpacity: 0.7,
    onPress: handleClick,
    disabled: disabled
  }, icon && /*#__PURE__*/React.createElement(Svg, {
    image: icon,
    width: iconSize(size),
    height: iconSize(size),
    color: fontColor(disabled, type, color),
    style: {
      marginRight: 8
    }
  }), text && /*#__PURE__*/React.createElement(Text, {
    type: fontSize(size),
    underline: underline,
    testID: "text-btn-id",
    text: text,
    color: fontColor(disabled, type, color)
  }));
};
export default Button;
//# sourceMappingURL=Button.js.map