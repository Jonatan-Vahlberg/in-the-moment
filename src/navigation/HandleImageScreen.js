import React from "react";
import { View, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import { Text, Box } from "react-native-design-utility";
import { FormFieldWrapper, Button } from "../components/common";

class HandleImageScreen extends React.Component {
  state = {
    title: "",
    tags: [],
    tagsString: "",
    description: ""
  };
  render() {
    const image = this.props.navigation.getParam("image", "");
    const aspect = image.height > image.width ? 9 / 15 : 16 / 9;
    if (image !== null && image.base64 !== null) {
      return (
        <Box h="100%" rows={[4, 6]}>
          <Box center bg="black" w="100%" dir="col">
            <Image
              resizeMode="cover"
              style={{ aspectRatio: aspect, height: "100%" }}
              source={{ uri: `data:image/png;base64,${image.base64}` }}
            />
          </Box>
          <Box>
            <ScrollView>
              <FormFieldWrapper label="Title*">
                <TextInput
                  value={this.state.title}
                  onChangeText={title => this.setState({ title })}
                  placeholder="title of image"
                />
              </FormFieldWrapper>
              <FormFieldWrapper label="Tags">
                <TextInput
                  value={this.state.tagsString}
                  onChangeText={tagsString => this.generateTags(tagsString)}
                  placeholder="image tags separated by comma"
                />
              </FormFieldWrapper>
              <FormFieldWrapper label="Description">
                <TextInput
                  style={{ width: "100%" }}
                  value={this.state.description}
                  onChangeText={description => this.setState({ description })}
                  numberOfLines={4}
                />
              </FormFieldWrapper>
              <Button>
                <Text color="white" weight="bold" size="xl">
                  Post
                </Text>
              </Button>
            </ScrollView>
          </Box>
        </Box>
      );
    } else if (image.uri !== null) {
      console.log(image.uri);

      return (
        <View>
          <Image
            style={{ width: 250, height: 100 }}
            source={{ uri: image.uri }}
          />
        </View>
      );
    }
    return (
      <View>
        <Text>ARRGH</Text>
      </View>
    );
  }

  generateTags = (tagsString = "") => {
    const tags = tagsString.replace(/\s/g, "").split(",");
    this.setState({ tags, tagsString });
  };

  generateStyles = () => {
    return StyleSheet.create({});
  };
}

export default HandleImageScreen;
