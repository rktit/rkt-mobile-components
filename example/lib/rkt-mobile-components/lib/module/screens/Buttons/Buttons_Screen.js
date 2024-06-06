import React from "react";
import { StyleSheet } from "react-native";
import Config from "react-native-config";
import { Button, Container, Item, Text } from "../../components";
import { Colors } from "../../styles/themeStyle";
import { ContentContainer } from "../../containers";
export default function Home() {
  console.log("API_URL:", Config.API_URL);
  return /*#__PURE__*/React.createElement(Container, {
    padding: false
  }, /*#__PURE__*/React.createElement(ContentContainer, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(Item, {
    style: {
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Text, {
    text: "buttons.title",
    type: "h3",
    weight: "bold"
  })), /*#__PURE__*/React.createElement(Item, {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Text, {
    text: "buttons.title",
    type: "h5",
    align: "left",
    width: "100%"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "button",
    text: "buttons.primary",
    type: "primary",
    color: Colors.primary
  })));
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
//# sourceMappingURL=Buttons_Screen.js.map