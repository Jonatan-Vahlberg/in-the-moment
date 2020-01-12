import React from "react";
import { View } from "react-native";
import { Box } from "react-native-design-utility";
import Tabitem from "./Tabitem";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

class CameraScreenTabbar extends React.Component {
  render() {
    const { navigation, camera } = this.props;

    const BrowseItem = (
      <Tabitem
        navigation={navigation}
        name="md-home"
        isActive={false}
        routeName="browse"
      />
    );
    const ProfileItem = (
      <Tabitem
        navigation={navigation}
        name="md-person"
        isActive={false}
        routeName="profile"
      />
    );

    const cameraItem = (
      <TouchableOpacity onPress={this.snapPicture}>
        <Icon name="camera-iris" size={60} color={"black"} />
      </TouchableOpacity>
    );

    return (
      <Box
        center
        h={60}
        bg="white"
        dir="row"
        shadow={0}
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
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
          {cameraItem}
        </View>
        {ProfileItem}
      </Box>
    );
  }
  snapPicture = async () => {
    if (this.props.camera) {
      console.log(this.props.camera);

      let photo = await this.props.camera.takePictureAsync({
        quality: 1,
        base64: true
      });
      this.props.cameraOnPictureTaken();
      this.props.navigation.navigate("handleImage", { image: photo });
    } else if ("backup") {
      console.log(this.props.backupCamera);

      let photo = await this.props.backupCamera.takePictureAsync({
        quality: 1,
        base64: true
      });
      //this.props.cameraOnPictureTaken();
      this.props.navigation.navigate("handleImage", { image: photo });
    }
  };
}

export default CameraScreenTabbar;
