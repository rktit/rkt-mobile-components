import React from "react";
import { StyleSheet } from "react-native";
import Config from "react-native-config";
import { Button, Container, ContentContainer, Item } from "../../components";

import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { type RootStackParamList } from "../../routes/navigationStackParams";
import { useTheme } from "styled-components";

export default function Home_Screen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const theme = useTheme();
  console.log("API_URL:", Config.API_URL);

  return (
    <Container padding={false}>
      <ContentContainer style={styles.content}>
        <Item>
          <Button
            text="home.btn.botoes"
            type="bordered"
            color={theme.colors.secondary}
            onClick={() => navigation.navigate("Buttons_Screen")}
          />
        </Item>
        <Item>
          <Button
            text="home.btn.inputs"
            type="bordered"
            color={theme.colors.secondary}
            onClick={() => navigation.navigate("Inputs_Screen")}
          />
        </Item>
        <Item>
          <Button
            disabled
            text="home.btn.containers"
            type="primary"
            color={theme.colors.primary}
            onClick={() => navigation.navigate("Buttons_Screen")}
          />
        </Item>
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
