import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
  },
  descriptionTitle: {
    fontSize: 25,
    fontFamily: "Inter_700Bold",
    marginTop: -10,
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 23,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
  },
  cardDays: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
