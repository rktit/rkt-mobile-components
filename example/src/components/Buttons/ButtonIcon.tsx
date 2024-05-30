import { TouchableOpacity } from "react-native";
import Svg from "../../assets/images/Svg";
import {
  stylesBtnIcon,
  stylesBtnShadow,
  stylesBtnSizes,
  stylesButton,
} from "../../styles/buttonStyle";
import { IButton } from ".";
import useButton from "./ButtonHooks";
import { Colors } from "../../styles/themeStyle";

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

  return (
    <TouchableOpacity
      style={[
        stylesBtnIcon(disabled).default,
        stylesButton(disabled)[type],
        stylesBtnSizes[size],
        shadow && type !== "bordered" && stylesBtnShadow.shadow,
        { ...style, borderColor: disabled ? Colors.disabled : color },
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
