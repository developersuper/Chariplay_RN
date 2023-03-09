import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { recommended } from "../mock/MockData";
import commonStyles from "./styles";

const Recommended = () => {
  return (
    <View style={styles.container}>
      <Text style={[commonStyles.headingTitle, styles.headingTitle]}>
        Recommended for you
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={recommended}
        style={commonStyles.flatlist}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity key={item.title}>
                <View style={[commonStyles.card]}>
                  <View
                    style={[commonStyles.imageWrapper, commonStyles.shadow]}
                  >
                    <Image source={item.image} style={[commonStyles.image]} />
                  </View>
                  <Text style={[commonStyles.title, styles.title]}>
                    {item.title}
                  </Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                </View>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
            </>
          );
        }}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  headingTitle: {
    paddingLeft: 20,
    marginBottom: 15,
    marginTop: 20,
  },
  title: {
    marginTop: 3,
    paddingLeft: 2,
  },
  desc: {
    paddingLeft: 2,
    fontSize: 14,
    color: "white",
    lineHeight: 17,
    fontWeight: "400",
  },
});
