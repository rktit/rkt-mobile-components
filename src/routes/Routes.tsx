import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/LoginScreen";
import Splash from "../screens/Splash/Splash";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

export default function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  const useAuth = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Splash">
        <Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}
