import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    alignItems: "center",
    backgroundColor: "rgba(21, 22, 22, 0.7)", // Fundo escuro semi-transparente
    paddingBottom: 50, // Espaço extra no fim para o botão não ficar colado
    minHeight: '100%',
  },
  titleDiv: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#7D0A1B",
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F2B33D",
  },
  subtitle: {
    fontSize: 16,
    color: "#e4e4e4",
    marginTop: 5,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 40, // Espaço entre os filmes
  },
  movieCard: {
    alignItems: 'center',
    width: '90%',
  },
  image: {
    width: 350,
    height: 390, // Proporção de cartaz de cinema
    borderRadius: 15,
    borderWidth: 2,
  },
  movieTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e4e4e4",
  },
});
