import { type DimensionValue } from "react-native";
declare const styleBox: (pdHorizontal: number, pdVertical: number, width: DimensionValue) => {
    box: {
        paddingHorizontal: number;
        paddingVertical: number;
        width: DimensionValue;
    };
};
declare const stylesItemGrid: (width: DimensionValue) => {
    item: {
        width: number | import("react-native").Animated.AnimatedNode | "auto" | `${number}%`;
    };
    input: {
        width: number | import("react-native").Animated.AnimatedNode | "auto" | `${number}%`;
    };
};
declare const stylesItemAlign: {
    center: {
        alignItems: "center";
    };
    left: {
        alignItems: "flex-start";
    };
};
declare const stylesItemPadding: (pl: number, pr: number, pt: number, pb: number) => {
    item: {
        paddingLeft: number;
        paddingRight: number;
        paddingTop: number;
        paddingBottom: number;
    };
};
declare const stylesItemMargin: (ml: number, mr: number, mt: number, mb: number) => {
    item: {
        marginLeft: number;
        marginRight: number;
        marginTop: number;
        marginBottom: number;
    };
};
export { styleBox, stylesItemAlign, stylesItemGrid, stylesItemMargin, stylesItemPadding, };
//# sourceMappingURL=containerStyle.d.ts.map