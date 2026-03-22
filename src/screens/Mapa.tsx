import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
} from "react-native";

import { styles } from "../style/StyleMapa";

export function Mapa({ navigation }): any {
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
            <Text style={styles.title}>Se perdeu? Não se preocupe!</Text>
            <Text style={styles.subtitle}>O que vai ser hoje?</Text>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.movieCard}>
              <Image
                source={require("../../assets/map.png")}
                resizeMode="cover"
                style={styles.image}
              />
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
