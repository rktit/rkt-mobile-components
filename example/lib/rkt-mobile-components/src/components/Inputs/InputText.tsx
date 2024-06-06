import React from "react";
import { TextInput } from "react-native";
import { Colors } from "../../styles/themeStyle";
import { type FieldError } from "react-hook-form";

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
  return <TextInput placeholderTextColor={Colors.greyLight} {...props} />;
};

export default InputText;
