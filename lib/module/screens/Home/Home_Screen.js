import React from "react";
import { StyleSheet } from "react-native";
import Config from "react-native-config";
import { Button, Container, Item } from "../../components";
import { Colors } from "../../styles/themeStyle";
import { ContentContainer } from "../../containers";
import { useNavigation } from "@react-navigation/native";
export default function Home_Screen() {
  const navigation = useNavigation();
  console.log("API_URL:", Config.API_URL);
  return /*#__PURE__*/React.createElement(Container, {
    padding: false
  }, /*#__PURE__*/React.createElement(ContentContainer, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Button, {
    text: "home.btn.botoes",
    type: "bordered",
    color: Colors.secondary,
    onClick: () => navigation.navigate("Buttons_Screen")
  })), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Button, {
    text: "home.btn.inputs",
    type: "bordered",
    color: Colors.secondary,
    onClick: () => navigation.navigate("Inputs_Screen")
  })), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Button, {
    disabled: true,
    text: "home.btn.containers",
    type: "primary",
    color: Colors.primary,
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