import React from "react";
import { Camera } from "expo-camera";
import { Box, Text } from "react-native-design-utility";
import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
import { withNavigationFocus } from "react-navigation";
import Tabbar from "../components/Tabbar";
import CameraUI from "../components/CameraUI";
import CameraScreenTabbar from "../components/CameraScreenTabbar";

class CameraScreen extends React.Component {
  state = {
    hasPremission: null,
    type: Camera.Constants.Type.back,
    camera: null
  };
  componentDidMount() {
    props.navigation.addListener("focus", () => {
      this.forceUpdate();
      console.log(this.camera);
      console.log("IM IN FOCUS");
    });
  }

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasPremission: status === "granted" });
  }

  render() {
    if (this.state.hasPremission === "null") {
      this.requestCameraPremissions();
      return (
        <Box bg="black" center>
          {null}
        </Box>
      );
    } else if (this.state.hasPremission === false) {
      return (
        <Box bg="black" center>
          <Text color="white" size="lg">
            No premission to access the camera given!
          </Text>
          <TouchableOpacity onPress={() => this.requestCameraPremissions()}>
            <Text size="lg" deco="underline">
              Rerequest premission?
            </Text>
          </TouchableOpacity>
          <Box></Box>
        </Box>
      );
    } else if (this.state.hasPremission && !this.props.isFocused) {
      return null;
    }
    return (
      <Box bg="black" f={1}>
        <Camera
          ref={ref => {
            this.camera = ref;
            //this.setState({ camera: ref });
          }}
          style={{ flex: 1 }}
          type={this.state.type}
        ></Camera>
        <CameraUI
          type={this.state.type}
          setType={() =>
            this.setState({
              type:
                this.state.type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
            })
          }
        />
        <CameraScreenTabbar
          camera={this.camera}
          backupCamera={this.state.camera}
          cameraOnPictureTaken={() => this.setState({ camera: this.camera })}
          navigation={this.props.navigation}
        />
      </Box>
    );
  }
  requestCameraPremissions = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasPremission: status === "granted" });
  };
}

export default withNavigationFocus(CameraScreen);
