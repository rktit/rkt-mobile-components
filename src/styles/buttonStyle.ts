import { StyleSheet } from "react-native";
import { DynamicStyleSheet } from "../utils/style";

export const stylesBtnDefault = (disabled: boolean) =>
  StyleSheet.create({
    default: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      opacity: disabled ? 0.5 : 1,
    },
  });

export const stylesBtnIcon = (disabled: boolean) => StyleSheet.create({
  default: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 48,
    opacity: disabled ? 0.5 : 1,
  },
});

export const stylesButton = (disabled: boolean, color: string) =>
  DynamicStyleSheet.create((theme) => ({
    transparent: {
      backgroundColor: "transparent",
    },
    primary: {
      backgroundColor: disabled ? theme.app.colors.disabled : color,
    },
    secondary: {
      backgroundColor: disabled ? theme.app.colors.disabled : color,
    },
    disabled: {
      backgroundColor: disabled ? theme.app.colors.disabled : color,
    },
    icon: {
      backgroundColor: "transparent",
    },
    rounded: {
      backgroundColor: disabled ? theme.app.colors.disabled : color,
    },
    bordered: {
      backgroundColor: "transparent",
      borderWidth: disabled ? 0.5 : 1,
    },
    underline: {},
  }));

export const stylesBtnShadow = DynamicStyleSheet.create((theme) => ({
  shadow: {
    shadowColor: theme.app.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}));

export const stylesBtnSizes = StyleSheet.create({
  lg: {
    minHeight: 64,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  md: {
    minHeight: 48,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  sm: {
    minHeight: 32,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});
