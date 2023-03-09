import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import commonStyles from "./styles";

const MostPopularGame = () => {
  return (
    <View style={styles.container}>
      <Text style={[commonStyles.headingTitle, styles.headingTitle]}>
        Most Popular Game
      </Text>
      <View style={[commonStyles.imageWrapper, commonStyles.shadow]}>
        <Image
          source={require("@assets/img/most_popular_game.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.overload}>Overload RTX</Text>
    </View>
  );
};

export default MostPopularGame;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 18,
    paddingRight: 18,
  },
  headingTitle: {
    marginBottom: 7,
    marginTop: 15,
  },
  image: {
    height: 163,
    width: "100%",
    borderRadius: 3,
  },
  overload: {
    marginTop: 5,
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
  },
});
