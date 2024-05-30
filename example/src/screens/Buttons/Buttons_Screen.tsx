import React from "react";
import { StyleSheet } from "react-native";
import Config from "react-native-config";
import { Button, Container, Item, Text } from "../../components";
import { Colors } from "../../styles/themeStyle";
import { ContentContainer } from "../../containers";

export default function Home() {
  console.log("API_URL:", Config.API_URL);

  return (
    <Container padding={false}>
      <ContentContainer style={styles.content}>
        <Item style={{ paddingBottom: 12 }}>
          <Text text="buttons.title" type="h3" weight="bold" />
        </Item>
        <Item style={{ paddingBottom: 24 }}>
          <Text text="buttons.title" type="h5" align="left" width="100%" />
        </Item>
        <Button
          variant="button"
          text="buttons.primary"
          type="primary"
          color={Colors.primary}
        />
      </ContentContainer>
    </Container>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
