import { useTheme } from "styled-components";
import { type FontTypesList } from "../../types/style";

interface IButton {
  fontColor: (disabled: boolean, type: string, color?: string) => string;
  iconSize: (size: string) => number;
  fontSize: (size: string) => FontTypesList;
}

const useButton = (): IButton => {
  const theme = useTheme();
  const fontColor = (
    disabled: boolean,
    type: string,
    color?: string
  ): string => {
    if (disabled) return theme.app.colors.secondary;
    switch (type) {
      case "primary":
        return theme.app.colors.black;
      case "secondary":
        return theme.app.colors.white;
      case "disabled":
        return theme.app.colors.secondary;
      case "icon":
        return theme.app.colors.secondary;
      case "rounded":
        return theme.app.colors.white;
      case "bordered":
        return color ?? theme.app.colors.primary;
      default:
        return theme.app.colors.primary;
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
