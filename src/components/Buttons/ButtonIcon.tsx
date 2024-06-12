import React from "react";
import { TouchableOpacity } from "react-native";
import Svg from "../../assets/svg";
import {
  stylesBtnIcon,
  stylesBtnShadow,
  stylesBtnSizes,
  stylesButton,
} from "../../styles/buttonStyle";
import { type IButton } from ".";
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
  onClick: handleClick,
}: IButton) => {
  const { fontColor, iconSize } = useButton();
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        stylesBtnIcon(disabled).default,
        stylesButton(disabled, theme.colors[type])[type],
        stylesBtnSizes[size],
        shadow && type !== "bordered" && stylesBtnShadow.shadow,
        { ...style, borderColor: disabled ? theme.colors.disabled : color },
      ]}
      activeOpacity={0.7}
      disabled={disabled}
      onPress={handleClick}
    >
      {icon && (
        <Svg
          image={icon}
          width={iconSize(size)}
          height={iconSize(size)}
          color={fontColor(disabled, type, color)}
        />
      )}
    </TouchableOpacity>
  );
};

export default BtnIcon;
