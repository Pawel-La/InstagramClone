import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 244,
    borderRightColor: "gray",
    borderRightWidth: 1,
    paddingBottom: 20,
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  mainLogoContainer: {
    paddingTop: 30,
    paddingBottom: 11,
    paddingHorizontal: 12,
    marginBottom: 19,
  },
  sideBarButton: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 4,
    gap: 16,
  },
  sideBarButtonText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
