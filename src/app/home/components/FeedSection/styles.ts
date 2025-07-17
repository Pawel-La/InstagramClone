import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainSection: {
    width: 630,
    gap: 16,
    backgroundColor: "blue",
  },
  topBar: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 10,
    borderBottomColor: "red",
    borderBottomWidth: 0.8,
  },
  topBarText: {
    fontSize: 16,
    lineHeight: 20,
  },
  storiesBar: {
    padding: 8,
    backgroundColor: "yellow",
  },
  feedSection: {
    width: 470,
    backgroundColor: "purple",
    alignSelf: "center",
  },
});

export default styles;
