import React, { Children } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";

const Button = ({
  children = null,
  action = () => {},
  spinner = false,
  loading = false,
  rounded = false,
  outline = false,
  color = "#008bcc",
  extraStyle = {}
}) => {
  const { baseButtonStyle, roundedStyle, outlineStyle } = generateStyles(color);
  const buttonStyles = [baseButtonStyle];
  if (rounded) {
    buttonStyles.push(roundedStyle);
  }
  if (outline) {
    buttonStyles.push(outlineStyle);
  }
  if (spinner && loading) {
    return <ActivityIndicator color={color} size="large" />;
  }
  return (
    <TouchableOpacity onPress={action} disabled={loading}>
      <View style={[...buttonStyles, extraStyle]}>{children}</View>
    </TouchableOpacity>
  );
};

const generateStyles = (color = "") => {
  return StyleSheet.create({
    baseButtonStyle: {
      backgroundColor: color,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginVertical: 5,
      marginHorizontal: 5,
      minHeight: 50,
      justifyContent: "center",
      alignItems: "center"
    },
    roundedStyle: {
      borderRadius: 15
    },
    outlineStyle: {
      borderColor: color,
      borderWidth: 1.5,
      backgroundColor: "transparent"
    }
  });
};

export { Button };
