import React from "react";
import { View, Text, ImageBackground, Pressable, Image } from "react-native";

import { styles } from "../style/StyleCinema";

export function Cinema({ navigation }): any {
  function navToHome() {
    navigation.navigate("home");
  }

  return (
    <ImageBackground
      source={require("../../assets/wallpaper.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.titleDiv}>
          <Text style={styles.title}>
            Com fome? Experimente nossos melhores restaurantes 
          </Text>
          <Text style={styles.subtitle}>O que deseja para hoje?</Text>
        </View>

        

        <View>
          <Pressable onPress={navToHome}>
            <View style={[styles.button, { backgroundColor: "#7D0A1B" }]}>
              <Text style={styles.buttonTitle}>Retornar ao Menu</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
