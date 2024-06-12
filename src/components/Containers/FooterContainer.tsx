import React from "react";
import Container from "./Container";
import { useTheme } from "styled-components/native";

interface IFooterContainer {
  readonly children: React.ReactNode;
}

export default function FooterContainer({ children }: IFooterContainer) {
  const theme = useTheme();

  return (
    <Container
      color={theme.colors.white}
      padding={false}
      style={{
        borderTopLeftRadius: 8,
        borderTopEndRadius: 8,
        height: 70,
        maxHeight: 70,
        paddingHorizontal: 0,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: theme.colors.greyLight,
      }}
    >
      {children}
    </Container>
  );
}
