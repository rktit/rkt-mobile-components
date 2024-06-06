import React from "react";
import { type DimensionValue } from "react-native";
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
declare const Item: ({ ml, mr, mt, mb, pl, pr, pt, pb, width, type, align, children, style }: IItem) => React.JSX.Element;
export default Item;
//# sourceMappingURL=Item.d.ts.map