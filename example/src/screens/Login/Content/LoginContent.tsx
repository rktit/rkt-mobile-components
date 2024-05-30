import { Colors } from "../../../styles/themeStyle";
import { Button, Container, Text } from "../../../components";
import { Image, StyleSheet } from "react-native";
import { FooterContainer, TopContainer } from "../../../containers";
import { LogoHorizontal } from "../../../assets";
import LoginForm from "./LoginForm";

export default function LoginContent() {
  return (
    <Container padding={false} style={{ backgroundColor: Colors.white }}>
      <TopContainer>
        <Image source={LogoHorizontal} style={styles.image} alt="Logo" />
      </TopContainer>

      <LoginForm />
      
      <FooterContainer>
        <Text text="login.registro" />
        <Button
          variant="link"
          text="login.cliqueAqui"
          color={Colors.primary}
          style={{ marginLeft: 8 }}
        />
      </FooterContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    maxHeight: 40,
    flex: 1,
    justifyContent: "center",
  },
});
