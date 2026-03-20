import React from "react";
import { View, Text, ImageBackground, Pressable, Image } from "react-native";

import { styles } from "../style/StyleLojas";

export function Lojas({ navigation }): any {
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
            Aproveite seu dia de compras no Balacobaco
          </Text>
          <Text style={styles.subtitle}>O que deseja para hoje?</Text>
        </View>

        <View style={styles.imageContainer}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/Furia.png")}
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
              Furia
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/Vitallity.png")}
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
              Vitallity
            </Text>
          </View>
                    <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/IBuyPower.png")}
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
              IBuyPower
            </Text>
          </View>
                    <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/Luminosity.png")}
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
              Luminosity
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
