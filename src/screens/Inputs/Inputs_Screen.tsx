import React from "react";
import { StyleSheet } from "react-native";
import Config from "react-native-config";
import { Container, Input, Item, Text } from "../../components";
import { ContentContainer } from "../../containers";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/navigationStackParams";
import useInputs from "./InputHooks";

export default function Home() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  console.log("API_URL:", Config.API_URL);

  const { control } = useInputs();

  return (
    <Container padding={false}>
      <ContentContainer style={styles.content}>
        <Item style={{ paddingBottom: 12 }}>
          <Text text="inputs.title" type="h3" weight="bold" />
        </Item>
        <Item style={{ paddingBottom: 24 }}>
          <Text text="inputs.title" type="h5" align="left" width="100%" />
        </Item>
        <Item>
          <Input control={control} name="email" />
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
