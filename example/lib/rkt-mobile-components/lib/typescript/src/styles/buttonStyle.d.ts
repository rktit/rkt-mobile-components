import { Colors } from "./themeStyle";
export declare const stylesBtnDefault: (disabled: boolean) => {
    default: {
        display: "flex";
        width: "100%";
        flexDirection: "row";
        justifyContent: "center";
        alignItems: "center";
        borderRadius: number;
        opacity: number;
    };
};
export declare const stylesBtnIcon: (disabled: boolean) => {
    default: {
        display: "flex";
        flexDirection: "row";
        justifyContent: "center";
        alignItems: "center";
        borderRadius: number;
        opacity: number;
    };
};
export declare const stylesButton: (disabled: boolean) => {
    transparent: {
        backgroundColor: string;
    };
    primary: {
        backgroundColor: Colors;
    };
    secondary: {
        backgroundColor: Colors;
    };
    disabled: {
        backgroundColor: Colors;
    };
    icon: {
        backgroundColor: string;
    };
    rounded: {
        backgroundColor: Colors;
    };
    bordered: {
        backgroundColor: string;
        borderWidth: number;
    };
    underline: {};
};
export declare const stylesBtnShadow: {
    shadow: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
};
export declare const stylesBtnSizes: {
    lg: {
        minHeight: number;
        paddingHorizontal: number;
        paddingVertical: number;
    };
    md: {
        minHeight: number;
        paddingHorizontal: number;
        paddingVertical: number;
    };
    sm: {
        minHeight: number;
        paddingHorizontal: number;
        paddingVertical: number;
    };
};
//# sourceMappingURL=buttonStyle.d.ts.map