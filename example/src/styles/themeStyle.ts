const enum Colors {
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
  errorBackground = "#FFD7D7",
}

const theme = {
  app: {
    colors: {
      primary: Colors.primary,
      secondary: Colors.secondary,
      black: Colors.black,
      white: Colors.white,
      greyLight: Colors.greyLight,
      lighter: Colors.lighter,
      disabled: Colors.disabled,
      success: Colors.success,
      error: Colors.error,
      errorBackground: Colors.errorBackground,
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
        backgroundColor: Colors.white,
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: Colors.white,
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
        borderColor: Colors.error,
        backgroundColor: Colors.errorBackground,
      },
      helperText: {
        paddingHorizontal: 4,
        paddingVertical: 2,
      },
    },
  }
};

export { Colors, theme };
