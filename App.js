import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { UtilityThemeProvider } from "react-native-design-utility";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  return (
    <UtilityThemeProvider>
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <Navigator />
      </React.Fragment>
    </UtilityThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
