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
}

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
}

export const baseTheme = {
  colors: {
    primary: "#C44040",
    secondary: "#1A1A1A",
    black: "#000",
    white: "#FFF",
    greyLight: "#B2B2B2",
    lighter: "#FFFFFF",
    disabled: "#E3E3E3",
    success: "#00FF00",
    error: "#FF0000",
    errorBackground: "#FFD7D7",
  },
  app: {
    colors: {
      primary: "#C44040",
      secondary: "#1A1A1A",
      black: "#000",
      white: "#FFF",
      greyLight: "#B2B2B2",
      lighter: "#FFFFFF",
      disabled: "#E3E3E3",
      success: "#00FF00",
      error: "#FF0000",
      errorBackground: "#FFD7D7",
    },
    input: {
      grid: {
        paddingHorizontal: 2,
        paddingVertical: 2,
      },
      default: {
        flexDirection: "row",
        alignItems: "center",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: "#FFF",
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: "#FFF",
      },
      input: {
        width: "100%",
      },
      label: {
        marginBottom: 8,
      },
      icon: {
        width: 24,
        marginRight: 32,
      },
      error: {
        borderWidth: 1,
        borderColor: "#FF0000",
        backgroundColor: "#FFD7D7",
      },
      helperText: {
        paddingHorizontal: 4,
        paddingVertical: 2,
      },
    },
  }
};
