import React from "react";
import { type DimensionValue } from "react-native";
interface IContainer {
    children: React.ReactNode;
    padding?: boolean;
    height?: DimensionValue | undefined;
    color?: string;
    style?: object;
}
declare const Container: ({ children, color, style, padding, }: IContainer) => React.JSX.Element;
export default Container;
//# sourceMappingURL=Container.d.ts.map