import React from "react";
import Container from "./Container";
import { useTheme } from "styled-components";

interface IContentContainer {
  readonly children: React.ReactNode;
  readonly color?: string;
  readonly padding?: boolean;
  readonly style?: object;
}

export default function ContentContainer({
  children,
  color,
  padding = true,
  style,
}: IContentContainer) {
  const theme = useTheme();
  return (
    <Container padding={padding} style={[style, { backgroundColor: color ?? theme.colors.greyLight }]}>
      {children}
    </Container>
  );
}
