import React from "react";
import { DimensionValue, View } from "react-native";

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
  children: React.ReactElement<any>;
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
}: IItem) => {
  return (
    <View
      style={[
        stylesItemGrid(width)[type],
        stylesItemPadding(pl, pr, pt, pb).item,
        stylesItemMargin(ml, mr, mt, mb).item,
        stylesItemAlign[align],
      ]}
    >
      {children}
    </View>
  );
};

export default Item;
