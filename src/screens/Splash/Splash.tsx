import { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Animated, { FadeInUp, FadeOut } from "react-native-reanimated";

import { RootStackParamList } from "../../routes/navigationStackParams";
import { Colors } from "../../styles/themeStyle";

export default function Splash() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home_Screen");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInUp.duration(1500)} exiting={FadeOut}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    flex: 1,
    maxWidth: "90%",
    maxHeight: "100%",
    justifyContent: "center",
  },
  pet: {
    flex: 1,
    maxHeight: 180,
    justifyContent: "center",
  },
});
