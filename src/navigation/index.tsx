import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local & Shared Imports
 */
import { SCREENS } from "@shared-constants";
import { palette } from "@theme/themes";

import CherrySvg from "@assets/icons/cherry.svg";
import Home2Svg from "@assets/icons/home-2.svg";
import TrophySvg from "@assets/icons/trophy.svg";
import LighteningSvg from "@assets/icons/lightening.svg";

import HomeScreen from "@screens/home/HomeScreen";

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabIcon = (routeName: string) => {
    switch (routeName) {
      case SCREENS.HOME:
        return (
          <RNBounceable>
            <CherrySvg />
          </RNBounceable>
        );
      case SCREENS.SEARCH:
        return (
          <RNBounceable>
            <Home2Svg />
          </RNBounceable>
        );
      case SCREENS.NOTIFICATION:
        return (
          <RNBounceable>
            <TrophySvg />
          </RNBounceable>
        );
      case SCREENS.PROFILE:
        return (
          <RNBounceable>
            <LighteningSvg />
          </RNBounceable>
        );
      default:
        return (
          <RNBounceable>
            <CherrySvg />
          </RNBounceable>
        );
    }
  };

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => renderTabIcon(route.name),
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: palette.black,
            shadowColor: "#fff",
            shadowOffset: {
              width: -10,
              height: -10,
            },
            shadowOpacity: 0.5,
            height: 65,
            elevation: 1,
            backgroundColor: palette.bottomTab,
          },
        })}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.SEARCH} component={HomeScreen} />
        <Tab.Screen name={SCREENS.NOTIFICATION} component={HomeScreen} />
        <Tab.Screen name={SCREENS.PROFILE} component={HomeScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={renderTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
