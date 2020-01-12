import React from "react";
import { View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tabitem = ({
  name = "md-home",
  isActive = false,
  navigation,
  routeName
}) => {
  return (
    <View style={{ marginHorizontal: 60 }}>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Icon
          name={name}
          color={isActive ? "red" : "rgba(0,0,0,0.6)"}
          size={40}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Tabitem;
