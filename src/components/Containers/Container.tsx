import React from "react";
import { View, StyleSheet, type DimensionValue } from "react-native";

interface IContainer {
  children: React.ReactNode;
  padding?: boolean;
  height?: DimensionValue | undefined;
  color?: string;
  style?: object;
}

const Container = ({
  children,
  color = "#F9F9F9",
  style,
  padding = true,
}: IContainer) => {
  return (
    <View style={[styles(color, padding).container, style]}>{children}</View>
  );
};

const styles = (color: string, padding: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: padding ? 24 : 0,
      paddingVertical: padding ? 48 : 0,
      backgroundColor: color,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  });

export default Container;
