import React from "react";
import { Container } from "../components";

interface ITopContainer {
  readonly children: React.ReactNode;
  readonly style?: object;
}

export default function TopContainer({ children, style }: ITopContainer) {
  return (
    <Container
      padding={false}
      style={[{
        backgroundColor: "#fff",
        height: 124,
        maxHeight: 124,
      }, style]}
    >
      {children}
    </Container>
  );
}
