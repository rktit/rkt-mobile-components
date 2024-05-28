import { TouchableOpacity } from "react-native";
import { Text } from "../";
import useButton from "./ButtonHooks";
import { IButton } from ".";
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
  size = "md",
}: IButton) => {
  const { fontColor, fontSize } = useButton();

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
          color={disabled ? Colors.disabled : color}
        />
      )}
    </TouchableOpacity>
  );
};

export default BtnTransparent;
