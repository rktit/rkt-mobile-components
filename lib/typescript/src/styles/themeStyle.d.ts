export type IColor = {
    primary: string;
    secondary: string;
    black: string;
    white: string;
    greyLight: string;
    lighter: string;
    disabled: string;
    success: string;
    error: string;
    errorBackground: string;
};
export type ITheme = {
    app: {
        colors: {
            primary: string;
            secondary: string;
            black: string;
            white: string;
            greyLight: string;
            lighter: string;
            disabled: string;
            success: string;
            error: string;
            errorBackground: string;
        };
        input: any;
    };
    colors: any;
    input: any;
};
export declare const baseTheme: {
    colors: {
        primary: string;
        secondary: string;
        black: string;
        white: string;
        greyLight: string;
        lighter: string;
        disabled: string;
        success: string;
        error: string;
        errorBackground: string;
    };
    app: {
        colors: {
            primary: string;
            secondary: string;
            black: string;
            white: string;
            greyLight: string;
            lighter: string;
            disabled: string;
            success: string;
            error: string;
            errorBackground: string;
        };
        input: {
            grid: {
                paddingHorizontal: number;
                paddingVertical: number;
            };
            default: {
                flexDirection: string;
                alignItems: string;
                shadowOffset: {
                    width: number;
                    height: number;
                };
                shadowOpacity: number;
                shadowRadius: number;
                elevation: number;
                backgroundColor: string;
                borderRadius: number;
                paddingHorizontal: number;
                paddingVertical: number;
                borderWidth: number;
                borderColor: string;
            };
            input: {
                width: string;
            };
            label: {
                marginBottom: number;
            };
            icon: {
                width: number;
                marginRight: number;
            };
            error: {
                borderWidth: number;
                borderColor: string;
                backgroundColor: string;
            };
            helperText: {
                paddingHorizontal: number;
                paddingVertical: number;
            };
        };
    };
};
//# sourceMappingURL=themeStyle.d.ts.map