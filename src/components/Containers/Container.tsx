import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';

interface IContainer {
  children: React.ReactNode;
  padding?: boolean;
  color?: string;
  style?: object;
}

const Container = ({
  children,
  color,
  style,
  padding = true
}: IContainer) => {
  const theme = useTheme();

  return (
    <View style={[styles(color ?? theme.colors.white, padding).container, style]}>
      {children}
    </View>
  );
};

const styles = (color: string, padding: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: padding ? 24 : 0,
      paddingVertical: padding ? 48 : 0,
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  });

export default Container;
