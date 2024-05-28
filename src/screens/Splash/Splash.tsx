import { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { RootStackParamList } from "../../routes/navigationStackParams";
import Svg from "../../assets/images/Svg";

export default function Splash() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn}>
        <Svg
          image="logo"
          height={500}
          width={Dimensions.get("screen").width - 112}
          style={styles.image}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    flex: 1,
    maxWidth: 500,
    maxHeight: 500,
    justifyContent: "center",
  },
  pet: {
    flex: 1,
    maxHeight: 180,
    justifyContent: "center",
  },
});
