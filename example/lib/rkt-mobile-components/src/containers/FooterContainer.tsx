import React from "react";
import { Container } from "../components";
import { Colors } from "../styles/themeStyle";

interface IFooterContainer {
  readonly children: React.ReactNode;
}

export default function FooterContainer({ children }: IFooterContainer) {
  return (
    <Container
      height={70}
      color={Colors.white}
      padding={false}
      style={{
        borderTopLeftRadius: 8,
        borderTopEndRadius: 8,
        height: 70,
        maxHeight: 70,
        paddingHorizontal: 0,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: Colors.greyLight,
      }}
    >
      {children}
    </Container>
  );
}
