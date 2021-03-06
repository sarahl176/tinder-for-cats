import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import ChatsScreen from "../screens/ChatsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PetScreen from "../screens/PetScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: { headerMode: "none" }
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  },
  config,
  { headerMode: "none" }
);

HomeStack.navigationOptions = {
  tabBarLabel: "Browse",
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: '#CB9696'
  }
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    Pet: PetScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Saved",

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#CB9696'
  }
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: ChatsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Chat",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#CB9696'
  }
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
