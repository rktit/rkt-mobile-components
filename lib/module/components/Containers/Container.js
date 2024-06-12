import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';
const Container = ({
  children,
  color,
  style,
  padding = true
}) => {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(View, {
    style: [styles(color ?? theme.colors.white, padding).container, style]
  }, children);
};
const styles = (color, padding) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: padding ? 24 : 0,
    paddingVertical: padding ? 48 : 0,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});
export default Container;
//# sourceMappingURL=Container.js.map