import React from "react";
import { View, StyleSheet, Image } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";

import PlusSvg from "@assets/icons/plus.svg";
import PrizeSvg from "@assets/icons/prize.svg";
import MenuSvg from "@assets/icons/menu.svg";

const NavBar = () => {
  return (
    <>
      <View style={styles.container}>
        <RNBounceable style={styles.imageContainer}>
          <Image
            source={require("@assets/img/logo.png")}
            style={styles.image}
          />
        </RNBounceable>
        <View style={styles.iconContainer}>
          <RNBounceable>
            <PlusSvg width={18} height={18} />
          </RNBounceable>
          <RNBounceable>
            <PrizeSvg width={14} height={20} />
          </RNBounceable>
          <RNBounceable>
            <MenuSvg width={28} height={22} />
          </RNBounceable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 108,
    padding: 26,
    position: "relative",
  },
  imageContainer: {
    marginRight: 34,
  },
  image: {
    width: 44,
    height: 44,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 100,
    width: "100%",
  },
});

export default NavBar;
