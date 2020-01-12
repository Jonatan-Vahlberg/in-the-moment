import React from "react";
import { View } from "react-native";
import { Box } from "react-native-design-utility";
import Tabitem from "./Tabitem";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Camera } from "expo-camera";

const Tabbar = props => {
  const { navigation, cameraIntent = () => {} } = props;
  const { routes, index } = navigation.state;

  const BrowseItem = (
    <Tabitem
      navigation={navigation}
      name="md-home"
      isActive={index === 0}
      {...routes[0]}
    />
  );
  const ProfileItem = (
    <Tabitem
      navigation={navigation}
      name="md-person"
      isActive={index === 2}
      {...routes[2]}
    />
  );

  const currentCameraIntent = () => {
    if (index === 1) {
      cameraIntent;
    } else {
      navigation.navigate(routes[1].routeName);
    }
  };

  return (
    <Box center h={60} bg="white" dir="row" shadow={0}>
      {BrowseItem}
      <View
        style={{
          flex: 1,
          height: 80,
          width: 80,
          backgroundColor: "#fff",
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 5
        }}
      >
        <TouchableOpacity onPress={() => currentCameraIntent()}>
          <Icon
            name="camera-iris"
            size={60}
            color={index == 1 ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
      {ProfileItem}
    </Box>
  );
};

export default Tabbar;
