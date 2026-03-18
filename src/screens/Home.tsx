import React from 'react';
import { View, Text, Pressable } from "react-native"
import styles from "./StyleHome"

export function Home({navigation}): any {

    function navToDetails() {
        navigation.navigate('details')
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleDiv}>
                <Text style={styles.title}>
                    Seja bem-vindo ao Shopping do Balacobaco
                </Text>
            </View>

            <View style={styles.divDetalhe}>
                <Text style={styles.detalhe}>Escolha uma opção</Text>
            </View>

            <View>
                <Pressable style={styles.button} onPress={navToDetails}>
                    <Text style={styles.buttonTitle}>
                        Lojas
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={navToDetails}>
                    <Text style={styles.buttonTitle}>
                        Restaurntes
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={navToDetails}>
                    <Text style={styles.buttonTitle}>
                        Cinema
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={navToDetails}>
                    <Text style={styles.buttonTitle}>
                        Promoções
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={navToDetails}>
                    <Text style={styles.buttonTitle}>
                        Mapa do Shopping
                    </Text>
                </Pressable>
            </View>
        </View>
    );
} 