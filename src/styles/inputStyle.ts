import { StyleSheet, View } from "react-native";
import styled from "styled-components";
import { Colors } from "./themeStyle";

const stylesInput = StyleSheet.create({
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
});

interface InputProps {
  readonly actived: boolean;
  readonly error: boolean;
}

const InputStyle = styled(View) <InputProps>`
  flex-direction: row;
  align-items: center;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.22px;
  shadow-radius: 2.22px;
  elevation: 3;
  background-color: ${(props) => props.theme.app.colors.white};
  border-radius: 16px;
  padding-horizontal: 8px;
  padding-vertical: 2px;
  border-width: 1px;
  border-color: ${(props) =>
    !props.error ?
      props.theme.app.colors.error :
      !props.actived
        ? props.theme.app.colors.white
        : props.theme.app.colors.primary};
`;

export { stylesInput, InputStyle };
