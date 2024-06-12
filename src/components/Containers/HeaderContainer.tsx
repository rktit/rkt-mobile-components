import React from 'react';
import Container from './Container';
import { useTheme } from 'styled-components/native';

interface ITopContainer {
  color: string;
  readonly children: React.ReactNode;
}

export default function TopContainer({ children, color }: ITopContainer) {
  const theme = useTheme();

  return (
    <Container
      padding={false}
      style={{
        backgroundColor: color ?? theme.colors.white,
        height: 124,
        maxHeight: 124,
      }}
    >
      {children}
    </Container>
  );
}
