import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f9fa",     
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  contentTitle: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    color: "black",
  },
  addIcon: {
    padding: 4,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 18,
    marginRight: 12,
    alignItems: "center",
    width: 100,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    textAlign: "center",
  },
});

export default styles;
