import React from "react";
import { View, StyleSheet } from "react-native";
// import RNBounceable from "@freakycoder/react-native-bounceable";

// import MockData from "./mock/MockData";
import MainLayout from "@shared-components/layout/MainLayout";

import Text from "@shared-components/text-wrapper/TextWrapper";
// import fonts from "@fonts";
import { palette } from "@theme/themes";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>This is Home Screen</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.backgroundGrey,
  },
});

export default HomeScreen;
