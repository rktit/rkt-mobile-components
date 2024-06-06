import { StyleSheet } from "react-native";
const styleBox = (pdHorizontal, pdVertical, width) => StyleSheet.create({
  box: {
    paddingHorizontal: pdHorizontal,
    paddingVertical: pdVertical,
    width: width
  }
});
const stylesItemGrid = width => StyleSheet.create({
  item: {
    width: width || "100%"
  },
  input: {
    width: width || "100%"
  }
});
const stylesItemAlign = StyleSheet.create({
  center: {
    alignItems: "center"
  },
  left: {
    alignItems: "flex-start"
  }
});
const stylesItemPadding = (pl, pr, pt, pb) => StyleSheet.create({
  item: {
    paddingLeft: pl,
    paddingRight: pr,
    paddingTop: pt,
    paddingBottom: pb
  }
});
const stylesItemMargin = (ml, mr, mt, mb) => StyleSheet.create({
  item: {
    marginLeft: ml,
    marginRight: mr,
    marginTop: mt,
    marginBottom: mb
  }
});
export { styleBox, stylesItemAlign, stylesItemGrid, stylesItemMargin, stylesItemPadding };
//# sourceMappingURL=containerStyle.js.map