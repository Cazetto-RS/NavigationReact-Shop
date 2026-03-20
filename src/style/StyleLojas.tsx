import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e4e4e4",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    padding: 10,
    marginBottom: 20
  },
});
