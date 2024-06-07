import React from "react";
import { View } from "react-native";
import { stylesItemAlign, stylesItemGrid, stylesItemMargin, stylesItemPadding } from "../../styles/containerStyle";
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
}) => {
  return /*#__PURE__*/React.createElement(View, {
    testID: "item-container",
    style: [stylesItemGrid(width)[type], stylesItemPadding(pl, pr, pt, pb).item, stylesItemMargin(ml, mr, mt, mb).item, stylesItemAlign[align], style]
  }, children);
};
export default Item;
//# sourceMappingURL=Item.js.map