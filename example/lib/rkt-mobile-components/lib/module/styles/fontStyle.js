import { StyleSheet } from 'react-native';
const stylesBase = color => StyleSheet.create({
  regular: {
    color,
    fontFamily: 'SF-Pro-Display-Regular'
  },
  bold: {
    color,
    fontFamily: 'SF-Pro-Display-Bold'
  }
});
const stylesFont = StyleSheet.create({
  small: {
    fontSize: 14,
    lineHeight: 16
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 18
  },
  h5: {
    fontSize: 18,
    lineHeight: 20
  },
  h4: {
    fontSize: 20,
    lineHeight: 22
  },
  h3: {
    fontSize: 22,
    lineHeight: 24
  },
  h2: {
    fontSize: 26,
    lineHeight: 28
  },
  h1: {
    fontSize: 28,
    lineHeight: 32
  }
});
export { stylesBase, stylesFont };
//# sourceMappingURL=fontStyle.js.map