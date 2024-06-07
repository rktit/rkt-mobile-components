import React from "react";
import { type DimensionValue, View } from "react-native";

import {
  stylesItemAlign,
  stylesItemGrid,
  stylesItemMargin,
  stylesItemPadding,
} from "../../styles/containerStyle";

type TypesList = "item" | "input";
type AlignList = "center" | "left";

interface IItem {
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  width?: DimensionValue;
  type?: TypesList;
  align?: AlignList;
  children: React.ReactNode;
  style?: object;
}

const Item = ({
  ml = 0,
  mr = 0,
  mt = 6,
  mb = 6,
  pl = 0,
  pr = 0,
  pt = 0,
  pb = 0,
  width = "100%",
  type = "item",
  align = "center",
  children,
  style
}: IItem) => {
  return (
    <View
      testID="item-container"
      style={[
        stylesItemGrid(width)[type],
        stylesItemPadding(pl, pr, pt, pb).item,
        stylesItemMargin(ml, mr, mt, mb).item,
        stylesItemAlign[align],
        style
      ]}
    >
      {children}
    </View>
  );
};

export default Item;
