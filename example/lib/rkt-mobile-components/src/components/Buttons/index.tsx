import React from "react";
import { type ImagesList } from "../../assets/images/Svg";
import BtnTransparent from "./ButtonTransparent";
import Button from "./Button";
import BtnIcon from "./ButtonIcon";
import { type SizeTypes } from "../../types/style";

export type VariantList = "button" | "transparent" | "link" | "icon";

export type TypesList =
  | "primary"
  | "secondary"
  | "transparent"
  | "disabled"
  | "icon"
  | "bordered"
  | "rounded";

export interface IButton {
  text?: string;
  variant?: VariantList;
  type?: TypesList;
  disabled?: boolean;
  icon?: ImagesList;
  color?: string;
  style?: object;
  underline?: boolean;
  shadow?: boolean;
  size?: SizeTypes;
  onClick?: () => void;
  handleIcon?: () => void;
}

const ButtonComponent = (props: IButton) => {
  switch (props.variant) {
    case "link":
      return <BtnTransparent {...props} />;
    case "icon":
      return <BtnIcon {...props} />;
    default:
      return <Button {...props} />;
  }
};

export default ButtonComponent;
