import React from "react";
import { StyleSheet } from "react-native";
import Config from "react-native-config";
import { Button, Container, ContentContainer, Item } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
export default function Home_Screen() {
  const navigation = useNavigation();
  const theme = useTheme();
  console.log("API_URL:", Config.API_URL);
  return /*#__PURE__*/React.createElement(Container, {
    padding: false
  }, /*#__PURE__*/React.createElement(ContentContainer, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Button, {
    text: "home.btn.botoes",
    type: "bordered",
    color: theme.colors.secondary,
    onClick: () => navigation.navigate("Buttons_Screen")
  })), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Button, {
    text: "home.btn.inputs",
    type: "bordered",
    color: theme.colors.secondary,
    onClick: () => navigation.navigate("Inputs_Screen")
  })), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Button, {
    disabled: true,
    text: "home.btn.containers",
    type: "primary",
    color: theme.colors.primary,
    onClick: () => navigation.navigate("Buttons_Screen")
  }))));
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
//# sourceMappingURL=Home_Screen.js.map