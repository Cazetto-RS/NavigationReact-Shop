import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
} from "react-native";

import { styles } from "../style/StyleCinema";

export function Cinema({ navigation }): any {
  function navToHome() {
    navigation.navigate("home");
  }

return (
    <ImageBackground
      source={require("../../assets/wallpaper.png")}
      resizeMode="cover"
      style={{ flex: 1 }} // Estilo direto para garantir que o fundo ocupe tudo
    >
      <ScrollView 
        // O segredo está aqui: flexGrow garante que o conteúdo estique
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.scrollContent}> 
          
          <View style={styles.titleDiv}>
            <Text style={styles.title}>Veja os últimos lançamentos aqui!</Text>
            <Text style={styles.subtitle}>Que tal um filminho hoje?</Text>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.movieCard}>
              <Image
                source={require("../../assets/panico.png")}
                resizeMode="cover"
                style={styles.image}
              />
              <Text style={styles.movieTitle}>Pânico</Text>
            </View>

            <View style={styles.movieCard}>
              <Image
                source={require("../../assets/fusca.png")}
                resizeMode="cover"
                style={styles.image}
              />
              <Text style={styles.movieTitle}>Fusca</Text>
            </View>
          </View>

          <Pressable onPress={navToHome} style={styles.buttonContainer}>
            <View style={[styles.button, { backgroundColor: "#7D0A1B" }]}>
              <Text style={styles.buttonTitle}>Retornar ao Menu</Text>
            </View>
          </Pressable>

        </View>
      </ScrollView>
    </ImageBackground>
  );
}
