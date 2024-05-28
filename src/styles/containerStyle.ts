import { DimensionValue, StyleSheet } from "react-native";

const styleBox = (
  pdHorizontal: number,
  pdVertical: number,
  width: DimensionValue
) =>
  StyleSheet.create({
    box: {
      paddingHorizontal: pdHorizontal,
      paddingVertical: pdVertical,
      width: width,
    },
  });

const stylesItemGrid = (width: DimensionValue) =>
  StyleSheet.create({
    item: {
      width: width || "100%",
    },
    input: {
      width: width || "100%",
    },
  });

const stylesItemAlign = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  left: {
    alignItems: "flex-start",
  },
});

const stylesItemPadding = (pl: number, pr: number, pt: number, pb: number) =>
  StyleSheet.create({
    item: {
      paddingLeft: pl,
      paddingRight: pr,
      paddingTop: pt,
      paddingBottom: pb,
    },
  });

const stylesItemMargin = (ml: number, mr: number, mt: number, mb: number) =>
  StyleSheet.create({
    item: {
      marginLeft: ml,
      marginRight: mr,
      marginTop: mt,
      marginBottom: mb,
    },
  });

export {
  styleBox,
  stylesItemAlign,
  stylesItemGrid,
  stylesItemMargin,
  stylesItemPadding,
};
