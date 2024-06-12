import React, { memo } from 'react';
import { Text as TextBase } from "react-native";
import { stylesBase, stylesFont } from "../styles/fontStyle";
import { useTranslation } from "react-i18next";
import { useTheme } from 'styled-components/native';
const Text = ({
  text,
  type = "paragraph",
  color,
  weight = "regular",
  testID = "text-id",
  underline = false,
  align = "center",
  width
}) => {
  const {
    t
  } = useTranslation();
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(TextBase, {
    testID: testID,
    style: [stylesBase(color ?? theme.colors.black)[weight], stylesFont[type], {
      textDecorationLine: underline ? "underline" : "none",
      textAlign: align,
      width: width
    }]
  }, t(text));
};
export default /*#__PURE__*/memo(Text);
//# sourceMappingURL=TextComponent.js.map