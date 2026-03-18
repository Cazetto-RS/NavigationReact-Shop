import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    titleDiv: {
        marginTop: 50,
        width: "80%",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "light",
        textAlign: "center",
    },
    button: {
        marginTop: 10,
        backgroundColor: "#0000ff",
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 5,
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    divDetalhe: {
        width: "80%",
        marginVertical: 20,
        borderStyle: "solid",
        borderBottomWidth: 1,
    },
    detalhe: {
        fontSize: 18,
        fontWeight: "normal",
    }
})

export default styles