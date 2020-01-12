import React, { Children } from "react";
import { View, ViewPropTypes, StyleSheet } from "react-native";

const Card = ({ children, cardStyle }) => {
  return <View style={[generateStyles().cardBase, cardStyle]}>{children}</View>;
};

Card.propTypes = {
  cardStyle: ViewPropTypes.style
};

Card.defaultProps = {
  children: null,
  cardStyle: {}
};

const generateStyles = () => {
  return StyleSheet.create({
    cardBase: {
      marginHorizontal: 10,
      marginVertical: 20,
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingHorizontal: 10
    }
  });
};

export { Card };
