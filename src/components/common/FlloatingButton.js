import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

const FloatingButton = ({
  onPress = () => {},
  children,
  outerStyle = {},
  innerStyle = {}
}) => {
  return (
    <View style={outerStyle}>
      <TouchableOpacity onPress={() => onPress()}>
        <View style={[generateStyles().container, innerStyle]}>{children}</View>
      </TouchableOpacity>
    </View>
  );
};

const generateStyles = () => {
  return StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      height: 75,
      width: 75,
      borderRadius: 37.5,
      borderColor: "rgba(0,0,0,0.6)",
      borderWidth: 0.5
    }
  });
};

export { FloatingButton };
