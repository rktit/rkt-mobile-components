import React from "react";
import { StyleSheet } from "react-native";
import { Container, Input, Item, Text } from "../../components";
import { ContentContainer } from "../../containers";
import useInputs from "./InputHooks";
export default function Home() {
  const {
    control
  } = useInputs();
  return /*#__PURE__*/React.createElement(Container, {
    padding: false
  }, /*#__PURE__*/React.createElement(ContentContainer, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(Item, {
    style: {
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Text, {
    text: "inputs.title",
    type: "h3",
    weight: "bold"
  })), /*#__PURE__*/React.createElement(Item, {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Text, {
    text: "inputs.title",
    type: "h5",
    align: "left",
    width: "100%"
  })), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Input, {
    control: control,
    name: "email"
  }))));
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
//# sourceMappingURL=Inputs_Screen.js.map