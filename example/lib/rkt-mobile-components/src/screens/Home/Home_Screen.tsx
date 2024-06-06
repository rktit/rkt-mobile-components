import React from "react";
import { StyleSheet } from "react-native";
import Config from "react-native-config";
import { Button, Container, Item } from "../../components";
import { Colors } from "../../styles/themeStyle";
import { ContentContainer } from "../../containers";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { type RootStackParamList } from "../../routes/navigationStackParams";

export default function Home_Screen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  console.log("API_URL:", Config.API_URL);

  return (
    <Container padding={false}>
      <ContentContainer style={styles.content}>
        <Item>
          <Button
            text="home.btn.botoes"
            type="bordered"
            color={Colors.secondary}
            onClick={() => navigation.navigate("Buttons_Screen")}
          />
        </Item>
        <Item>
          <Button
            text="home.btn.inputs"
            type="bordered"
            color={Colors.secondary}
            onClick={() => navigation.navigate("Inputs_Screen")}
          />
        </Item>
        <Item>
          <Button
            disabled
            text="home.btn.containers"
            type="primary"
            color={Colors.primary}
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
