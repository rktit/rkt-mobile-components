import { Colors } from "../../../styles/themeStyle";
import { Button, Input, Item, Text } from "../../../components";
import { StyleSheet } from "react-native";
import { ContentContainer } from "../../../containers";
import useLoginForm from "./LoginHook";

export default function LoginForm() {
  const { control, handleSubmit, onSubmit, errors, isValid } = useLoginForm();
  console.log("🚀 ~ LoginForm ~ errors:", errors);

  return (
    <ContentContainer style={styles.container}>
      <Text
        text={"login.formulario.titulo"}
        color={Colors.secondary}
        weight="bold"
      />

      <Item>
        <Input control={control} name="email" />
      </Item>
      <Item>
        <Input control={control} name="password" />
      </Item>

      <Button
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
        variant="button"
        text="login.formulario.logar"
        icon="hide-on"
        style={{ marginTop: 16 }}
      />
    </ContentContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});
