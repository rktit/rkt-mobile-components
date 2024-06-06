declare const enum Colors {
    primary = "#C44040",
    secondary = "#1A1A1A",
    black = "#000",
    white = "#FFF",
    grey = "#B2B2B2",
    greyLight = "#F9F9F9",
    lighter = "#FFFFFF",
    disabled = "#E3E3E3",
    success = "#00FF00",
    error = "#FF0000",
    errorBackground = "#FFD7D7"
}
declare const theme: {
    app: {
        colors: {
            primary: Colors;
            secondary: Colors;
            black: Colors;
            white: Colors;
            greyLight: Colors;
            lighter: Colors;
            disabled: Colors;
            success: Colors;
            error: Colors;
            errorBackground: Colors;
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
                backgroundColor: Colors;
                borderRadius: number;
                paddingHorizontal: number;
                paddingVertical: number;
                borderWidth: number;
                borderColor: Colors;
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
                borderColor: Colors;
                backgroundColor: Colors;
            };
            helperText: {
                paddingHorizontal: number;
                paddingVertical: number;
            };
        };
    };
};
export { Colors, theme };
//# sourceMappingURL=themeStyle.d.ts.map