import React from "react";
import { View, Text, ImageBackground, Pressable, Image } from "react-native";

import { styles } from "../style/StylePromocoes";

export function Promocoes({ navigation }): any {
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

        <View style={styles.card}>
          <Text style={styles.promoBadge}>-20%</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.storeName}>Loja de Games</Text>
            <Text style={styles.description}>Todos os acessórios de PC</Text>
          </View>
        </View>

                <View style={styles.card}>
          <Text style={styles.promoBadge}>-25%</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.storeName}>Sorveteria dos Brodi</Text>
            <Text style={styles.description}>Picolé ICEBLU</Text>
          </View>
        </View>

                <View style={styles.card}>
          <Text style={styles.promoBadge}>-10%</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.storeName}>Sua casa</Text>
            <Text style={styles.description}>Sofás e poltronas</Text>
          </View>
        </View>

                <View style={styles.card}>
          <Text style={styles.promoBadge}>-75%</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.storeName}>NBA store</Text>
            <Text style={styles.description}>Camisas de time</Text>
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
