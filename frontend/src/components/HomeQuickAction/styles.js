import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 10, 
    marginBottom: 90
  },
  descriptionTitle: {
    fontSize: 22,
    marginBottom: 12, 
    fontFamily: "Inter_700Bold",
  },
  card: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    flex: 1, 
    margin: 6, 
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: "Inter_500Medium",
    marginTop: 6,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
});

export default styles;
