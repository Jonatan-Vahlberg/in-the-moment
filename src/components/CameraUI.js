import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box } from "react-native-design-utility";

class CameraUI extends React.Component {
  render() {
    const { container, switchCamera } = this.generateStyles();

    return (
      <View style={container}>
        <View style={switchCamera}>
          <TouchableOpacity onPress={() => this.props.setType()}>
            <Icon
              name={this.props.type === 0 ? "camera-front" : "camera-rear"}
              color="white"
              size={50}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  generateStyles = () => {
    return StyleSheet.create({
      container: {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0)"
      },
      camera: {
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 20,
        justifyContent: "center",
        alignItems: "center"
      },
      bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        justifyContent: "space-between",
        height: 60,
        flexDirection: "row",
        backgroundColor: "white"
      },
      bottomLeft: {
        marginLeft: 60
      },
      bottomRight: {
        alignContent: "flex-end",
        marginRight: 60
      },
      switchCamera: {
        position: "absolute",
        right: 20,
        bottom: 80,
        justifyContent: "center",
        alignItems: "center"
      }
    });
  };
}

export default CameraUI;
