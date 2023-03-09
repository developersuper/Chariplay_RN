import React from "react";
import { View, StyleSheet } from "react-native";

import MainLayout from "@shared-components/layout/MainLayout";
import { palette } from "@theme/themes";
import SelectGameCategory from "./components/SelectGameCategory";
import MostPopularGame from "./components/MostPopularGame";
import Recommended from "./components/Recommended";
import MassiveRewards from "./components/MassiveRewards";
import { gameCategories } from "./mock/MockData";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <SelectGameCategory gameCategories={gameCategories} />
        <MostPopularGame />
        <Recommended />
        <MassiveRewards />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.backgroundGrey,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
});

export default HomeScreen;
