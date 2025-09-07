import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 12,
  },
  documentTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  documentCounter: {
    fontSize: 12,
    fontStyle: "italic",
    color: "gray",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#2c3e50",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#7f8c8d",
  },
  warningBadge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    minWidth: 50,
    minHeight: 20,
    alignItems: "center",
  },
  warningText: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default styles;
