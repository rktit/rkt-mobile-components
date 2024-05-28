import React from "react";
import { StyleSheet } from "react-native";
import { Container } from "../components";

interface ITopContainer {
  readonly children: React.ReactNode;
}

export default function TopContainer({ children }: ITopContainer) {
  return (
    <Container
      padding={false}
      style={{
        backgroundColor: "#fff",
        height: 175,
        maxHeight: 175,
      }}
    >
      {children}
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
