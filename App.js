import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  ImageBackground,
  Text,
  View
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <ImageBackground source={"../assets/bg.jpg"}>
        <Text style={styles.welcome}>React Native</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
