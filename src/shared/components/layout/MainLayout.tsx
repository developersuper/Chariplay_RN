import React, { ReactNode } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import { palette } from "@theme/themes";
import MenuButton from "./MenuButton";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <MenuButton />
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    flex: 1,
  },
  header: {
    flexDirection: "row",
  },
});

export default MainLayout;
