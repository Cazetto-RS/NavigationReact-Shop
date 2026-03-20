import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#151616ad",
    },
    titleDiv: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#7D0A1B",
        paddingVertical: 40,
        paddingHorizontal: 50,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: "#e4e4e4",
        marginTop: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        color: "#F2B33D",
    },
    button: {
        marginTop: 10,
        paddingVertical: 15,
        width: 170,
        paddingHorizontal: 10,    
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    button2: {
        paddingVertical: 15,
        width: 170,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    buttonCompleted: {
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 65, 
        width: 355,   
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    button2Completed: {
        paddingVertical: 15,
        paddingHorizontal: 65,
        width: 355,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    buttonSubtitle: {
        fontSize: 14,
        color: "#000000",
        textAlign: "center",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap: 20,
        rowGap: 10,
    },
})

export default styles