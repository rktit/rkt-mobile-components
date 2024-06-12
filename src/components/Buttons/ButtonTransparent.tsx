import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../";
import useButton from "./ButtonHooks";
import { type IButton } from ".";
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
  size = "md",
}: IButton) => {
  const { fontColor, fontSize } = useButton();
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[style, {
        opacity: disabled ? 0.5 : 1,
      }]}
      disabled={disabled}
    >
      {icon && (
        <Svg
          image={icon}
          width={24}
          height={24}
          color={fontColor(disabled, type, color)}
        />
      )}
      {text && (
        <Text
          type={fontSize(size)}
          underline={underline}
          text={text ?? ""}
          color={disabled ? theme.colors.disabled : color}
        />
      )}
    </TouchableOpacity>
  );
};

export default BtnTransparent;
