import { StyleSheet } from "react-native";
import { palette } from "@theme/themes";

const commonStyles = StyleSheet.create({
  headingTitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    lineHeight: 20,
  },
  title: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
  shadow: {
    shadowColor: "#52006A",
    elevation: 20,
  },
  imageWrapper: {
    borderRadius: 5,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: palette.borderColor,
  },
  flatlist: {
    width: "100%",
    paddingLeft: 20,
  },
  image: {
    height: 115,
    width: 181,
    borderRadius: 3,
  },
  card: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    borderColor: "yellow",
    maxWidth: 185,
  },
});

export default commonStyles;
