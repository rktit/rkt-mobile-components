import React from "react";
import { type ImagesList } from "../../assets/svg";
import { type SizeTypes } from "../../types/style";
export type VariantList = "button" | "transparent" | "link" | "icon";
export type TypesList = "primary" | "secondary" | "transparent" | "disabled" | "icon" | "bordered" | "rounded";
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
declare const ButtonComponent: (props: IButton) => React.JSX.Element;
export default ButtonComponent;
//# sourceMappingURL=index.d.ts.map