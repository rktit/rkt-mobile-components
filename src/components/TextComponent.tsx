import React, { memo } from 'react';
import { type DimensionValue, Text as TextBase } from "react-native";
import { stylesBase, stylesFont } from "../styles/fontStyle";
import { useTranslation } from "react-i18next";
import { type FontTypesList, type WeightsList } from "../types/style";
import { useTheme } from 'styled-components/native';

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
  color,
  weight = "regular",
  testID = "text-id",
  underline = false,
  align = "center",
  width,
}: IFonts): React.ReactNode => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <TextBase
      testID={testID}
      style={[stylesBase(color ?? theme.colors.black)[weight], stylesFont[type], {
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
