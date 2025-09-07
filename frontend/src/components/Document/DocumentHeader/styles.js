import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#d01f1f",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 20,
    elevation: 5,
    shadowColor: "#000",
  },
  headerTextContainer: {
    flex: 1,
    marginLeft:10
  },
  headerText: {
    fontSize: 30,
    fontFamily: "Inter_700Bold",
    color: "#fff",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
