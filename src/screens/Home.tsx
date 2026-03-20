import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import styles from "../style/StyleHome";

export function Home({ navigation }): any {
  function navToLojas() {
    navigation.navigate("lojas");
  }

  function navToRestaurantes() {
    navigation.navigate("restaurantes");
  }

  function navToCinema() {
    navigation.navigate("cinema");
  }

  function navToPromocoes() {
    navigation.navigate("promocoes");
  }

  function navToMapa() {
    navigation.navigate("mapa");
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
            Seja bem-vindo ao Shopping do Balacobaco
          </Text>
          <Text style={styles.subtitle}>O que deseja para hoje?</Text>
        </View>

        <View style={styles.grid}>
          <Pressable onPress={navToLojas}>
            <View style={[styles.button, { backgroundColor: "#7D0A1B" }]}>
              <Text style={styles.buttonTitle}>Lojas</Text>
            </View>
            <View style={[styles.button2, { backgroundColor: "#e4e4e4" }]}>
              <Text style={styles.buttonSubtitle}>
                Moda, Eletrônicos, Casa e muito mais
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={navToRestaurantes}>
            <View style={[styles.button, { backgroundColor: "#7D0A1B" }]}>
              <Text style={styles.buttonTitle}>Restaurantes</Text>
            </View>
            <View style={[styles.button2, { backgroundColor: "#e4e4e4" }]}>
              <Text style={styles.buttonSubtitle}>
                Fast-food, Cafés, Lanches e muito mais
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={navToCinema}>
            <View style={[styles.button, { backgroundColor: "#7D0A1B" }]}>
              <Text style={styles.buttonTitle}>Cinema</Text>
            </View>
            <View style={[styles.button2, { backgroundColor: "#e4e4e4" }]}>
              <Text style={styles.buttonSubtitle}>
                Confira os filmes em cartaz e horários
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={navToPromocoes}>
            <View style={[styles.button, { backgroundColor: "#7D0A1B" }]}>
              <Text style={styles.buttonTitle}>Promoções</Text>
            </View>
            <View style={[styles.button2, { backgroundColor: "#e4e4e4" }]}>
              <Text style={styles.buttonSubtitle}>
                Confira as melhores ofertas do shopping
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={navToMapa}>
            <View
              style={[styles.buttonCompleted, { backgroundColor: "#7D0A1B" }]}
            >
              <Text style={styles.buttonTitle}>Mapa do Shopping</Text>
            </View>
            <View
              style={[styles.button2Completed, { backgroundColor: "#e4e4e4" }]}
            >
              <Text style={styles.buttonSubtitle}>
                Se perdeu? Confira o mapa para se localizar e encontrar o que
                procura
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
