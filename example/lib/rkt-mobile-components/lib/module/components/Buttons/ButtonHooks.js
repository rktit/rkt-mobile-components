import { Colors } from "../../styles/themeStyle";
const useButton = () => {
  const fontColor = (disabled, type, color) => {
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
  const iconSize = size => {
    switch (size) {
      case "lg":
        return 48;
      case "sm":
        return 24;
      default:
        return 32;
    }
  };
  const fontSize = size => {
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
    fontSize
  };
};
export default useButton;
//# sourceMappingURL=ButtonHooks.js.map