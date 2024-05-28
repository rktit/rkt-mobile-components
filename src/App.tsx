import React from "react";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./routes/Routes";
import "./utils/i18n/i18n";
import { AuthProvider } from "./context/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themeStyle";

const client = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
