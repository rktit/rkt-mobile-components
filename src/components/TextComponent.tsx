import React, { memo } from 'react';
import { DimensionValue, Text as TextBase } from "react-native";
import { stylesBase, stylesFont } from "../styles/fontStyle";
import { Colors } from "../styles/themeStyle";
import { useTranslation } from "react-i18next";
import { FontTypesList, WeightsList } from "../types/style";

export interface IFonts {
  text: string;
  type?: FontTypesList;
  weight?: WeightsList;
  color?: string;
  testID?: string;
  underline?: boolean;
  align?: "center" | "left" | "right" | "justify";
  width?: DimensionValue;
}

const Text = ({
  text,
  type = "paragraph",
  color = Colors.secondary,
  weight = "regular",
  testID = "text-id",
  underline = false,
  align = "center",
  width,
}: IFonts): React.ReactNode => {
  const { t } = useTranslation();

  return (
    <TextBase
      testID={testID}
      style={[stylesBase(color)[weight], stylesFont[type], {
        textDecorationLine: underline ? "underline" : "none",
        textAlign: align,
        width: width,
      }]}
    >
      {t(text)}
    </TextBase>
  );
};

export default memo(Text);
