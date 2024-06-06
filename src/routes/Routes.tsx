import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home_Screen from "../screens/Home/Home_Screen";
import Buttons_Screen from "../screens/Buttons/Buttons_Screen";
import Inputs_Screen from "../screens/Inputs/Inputs_Screen";
import Splash from "../screens/Splash/Splash";

export default function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Splash"
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Screen name="Home_Screen" component={Home_Screen} options={{ headerTitle: "Componentes", headerBackVisible: false }} />
        <Screen name="Buttons_Screen" component={Buttons_Screen} options={{
          headerTitle: "Botões",
        }} />
        <Screen name="Inputs_Screen" component={Inputs_Screen} options={{
          headerTitle: "Inputs",
        }} />
      </Navigator>
    </NavigationContainer>
  );
}
