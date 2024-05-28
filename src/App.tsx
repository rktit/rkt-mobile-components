import React from "react";
import { StatusBar } from "react-native";
import Routes from "./routes/Routes";
import "./utils/i18n/i18n";
import { AuthProvider } from "./context/auth";
import { theme } from "./styles/themeStyle";
import { RktThemeProvider } from "./context/theme";

export default function App() {
  return (
    <RktThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </RktThemeProvider>
  );
}
