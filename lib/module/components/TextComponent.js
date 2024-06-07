import React, { memo } from 'react';
import { Text as TextBase } from "react-native";
import { stylesBase, stylesFont } from "../styles/fontStyle";
import { Colors } from "../styles/themeStyle";
import { useTranslation } from "react-i18next";
const Text = ({
  text,
  type = "paragraph",
  color = Colors.secondary,
  weight = "regular",
  testID = "text-id",
  underline = false,
  align = "center",
  width
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement(TextBase, {
    testID: testID,
    style: [stylesBase(color)[weight], stylesFont[type], {
      textDecorationLine: underline ? "underline" : "none",
      textAlign: align,
      width: width
    }]
  }, "123 - ", t(text));
};
export default /*#__PURE__*/memo(Text);
//# sourceMappingURL=TextComponent.js.map