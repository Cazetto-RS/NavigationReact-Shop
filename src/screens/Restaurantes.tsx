import React from "react";
import { View, Text, ImageBackground, Pressable, Image } from "react-native";

import { styles } from "../style/StyleRestaurantes";

export function Restaurantes({ navigation }): any {
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

        <View style={styles.imageContainer}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/bk.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 17,
                marginTop: 5,
                marginBottom: -7,
              }}
            >
              Burger King
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/mc.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 17,
                marginTop: 5,
                marginBottom: -7,
              }}
            >
              McDonald's
            </Text>
          </View>
                    <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/giraffas.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 17,
                marginTop: 5,
                marginBottom: -7,
              }}
            >
              Giraffas
            </Text>
          </View>
                    <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/habibs.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 17,
                marginTop: 5,
                marginBottom: -7,
              }}
            >
              Habib's
            </Text>
          </View>
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
