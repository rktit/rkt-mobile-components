import { Colors } from "../../styles/themeStyle";
import { type FontTypesList } from "../../types/style";

interface IButton {
  fontColor: (disabled: boolean, type: string, color?: string) => string;
  iconSize: (size: string) => number;
  fontSize: (size: string) => FontTypesList;
}

const useButton = (): IButton => {
  const fontColor = (
    disabled: boolean,
    type: string,
    color?: string
  ): string => {
    if (disabled) return Colors.secondary;
    switch (type) {
      case "primary":
        return Colors.black;
      case "secondary":
        return Colors.white;
      case "disabled":
        return Colors.secondary;
      case "icon":
        return Colors.secondary;
      case "rounded":
        return Colors.white;
      case "bordered":
        return color ?? Colors.primary;
      default:
        return Colors.primary;
    }
  };

  const iconSize = (size: string): number => {
    switch (size) {
      case "lg":
        return 48;
      case "sm":
        return 24;
      default:
        return 32;
    }
  };

  const fontSize = (size: string): FontTypesList => {
    switch (size) {
      case "lg":
        return "h3";
      case "sm":
        return "small";
      default:
        return "paragraph";
    }
  };

  return {
    fontColor,
    iconSize,
    fontSize,
  };
};

export default useButton;
