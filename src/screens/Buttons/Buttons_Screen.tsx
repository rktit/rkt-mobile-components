import React from "react";
import { StyleSheet } from "react-native";
import Config from "react-native-config";
import { Button, Container, ContentContainer, Item, Text } from "../../components";
import { useTheme } from "styled-components";

export default function Home() {
  console.log("API_URL:", Config.API_URL);

  const theme = useTheme();

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
          color={theme.colors.primary}
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
