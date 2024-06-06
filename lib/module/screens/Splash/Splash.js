import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInUp, FadeOut } from "react-native-reanimated";
import { Colors } from "../../styles/themeStyle";
export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home_Screen");
    }, 3000);
  }, []);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Animated.View, {
    entering: FadeInUp.duration(1500),
    exiting: FadeOut
  }, /*#__PURE__*/React.createElement(Image, {
    source: require("../../assets/images/logo.png"),
    style: styles.image,
    resizeMode: "contain"
  })));
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  image: {
    flex: 1,
    maxWidth: "90%",
    maxHeight: "100%",
    justifyContent: "center"
  },
  pet: {
    flex: 1,
    maxHeight: 180,
    justifyContent: "center"
  }
});
//# sourceMappingURL=Splash.js.map