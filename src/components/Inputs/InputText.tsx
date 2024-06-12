import React from "react";
import { TextInput } from "react-native";
import { type FieldError } from "react-hook-form";
import { useTheme } from "styled-components";

interface InputsProps {
  defaultValue?: string;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  helperText?: FieldError;
  onFocus?: () => void;
  onChangeText?: () => void;
  onBlur?: () => void;
}

const InputText = (props: InputsProps): JSX.Element => {
  const theme = useTheme();
  return <TextInput placeholderTextColor={theme.colors.greyLight} {...props} />;
};

export default InputText;
