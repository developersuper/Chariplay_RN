import React, { ReactNode } from "react";
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";

import { palette } from "@theme/themes";
import NavBar from "./NavBar";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <ScrollView>
          <NavBar />
          {children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: palette.background,
  },
});

export default MainLayout;
