import React from 'react';
import { View, Text, Pressable } from "react-native"
import styles from "./StyleHome"

export function Home({navigation}): any {

    function navToDetails() {
        navigation.navigate('details')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Navagação estilo Stack
            </Text>
            <Pressable style={styles.button} onPress={navToDetails}>
                <Text style={styles.buttonTitle}>
                    Clique Aqui
                </Text>
            </Pressable>
        </View>
    );
} 