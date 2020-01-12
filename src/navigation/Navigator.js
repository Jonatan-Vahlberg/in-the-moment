import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import BrowseScreen from "./BrowseScreen";
import Tabbar from "../components/Tabbar";
import CameraScreen from "./CameraScreen";
import HandleImageScreen from "./HandleImageScreen";

const BrowseStack = createStackNavigator({
  browse: {
    screen: BrowseScreen
  }
});
const ProfileStack = createStackNavigator({
  profile: { screen: BrowseScreen }
});

const CameraStack = createStackNavigator(
  {
    camera: { screen: CameraScreen },
    handleImage: {
      screen: HandleImageScreen,
      navigationOptions: {
        headerShown: true
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

const BaseNavigator = createBottomTabNavigator(
  {
    BrowseStack: { screen: BrowseStack },
    cameraStack: {
      screen: CameraStack,
      navigationOptions: { tabBarVisible: false }
    },
    profileStack: { screen: ProfileStack }
  },
  {
    tabBarComponent: props => <Tabbar {...props} />
  }
);

export default createAppContainer(BaseNavigator);
