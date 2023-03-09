import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { massiveRewards } from "../mock/MockData";
import commonStyles from "./styles";

const MassiveRewards = () => {
  return (
    <View style={styles.container}>
      <Text style={[commonStyles.headingTitle, styles.headingTitle]}>
        Massive Rewards
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={massiveRewards}
        style={styles.flatlist}
        renderItem={({ item, index }) => {
          return (
            <>
              <TouchableOpacity key={index}>
                <View style={[styles.card]}>
                  <View
                    style={[commonStyles.imageWrapper, commonStyles.shadow]}
                  >
                    <Image source={item.image} style={[styles.image]} />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
            </>
          );
        }}
      />
    </View>
  );
};

export default MassiveRewards;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  headingTitle: {
    paddingLeft: 20,
    marginBottom: 15,
    marginTop: 20,
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
