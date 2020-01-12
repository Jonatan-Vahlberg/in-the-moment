import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FormFieldWrapper = ({
  style = {},
  label = null,
  labelStyle = {},
  children = null
}) => {
  const { baseStyle, baseLabelStyle } = generateStyles();

  return (
    <View style={[baseStyle, style]}>
      {label && <Text style={[baseLabelStyle, labelStyle]}>{label}</Text>}
      {children}
    </View>
  );
};

const generateStyles = () => {
  return StyleSheet.create({
    baseStyle: {
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "flex-start",
      marginTop: 10,
      marginBottom: 20,
      marginHorizontal: 20,
      backgroundColor: "#f8f8f8",
      paddingHorizontal: 10
    },
    baseLabelStyle: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 10
    }
  });
};

export { FormFieldWrapper };
