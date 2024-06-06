import React from 'react';
import { type DimensionValue } from "react-native";
import { type FontTypesList, type WeightsList } from "../types/style";
export interface IFonts {
    text: string;
    type?: FontTypesList;
    weight?: WeightsList;
    color?: string;
    testID?: string;
    underline?: boolean;
    align?: "center" | "left" | "right" | "justify";
    width?: DimensionValue;
}
declare const _default: React.MemoExoticComponent<({ text, type, color, weight, testID, underline, align, width, }: IFonts) => React.ReactNode>;
export default _default;
//# sourceMappingURL=TextComponent.d.ts.map