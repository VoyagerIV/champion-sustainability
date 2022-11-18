import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Avatar } from "@react-native-material/core";
import badge from "../assets/badge.png";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ icon, title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("Badges");
        }}
      >
        <Image
          source={require("../assets/badge.png")}
          style={styles.buttonImageIconStyle}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <Avatar
        image={{
          uri: "data:image/jpeg;base64,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",
        }}
      />
    </View>
  );
};

export const TopBarBack = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtnContainer}
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/left-arrow.png")}
          style={styles.backButton}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <Avatar
        image={{
          uri: "data:image/jpeg;base64,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",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 126,
    flexDirection: 'row', // row
    backgroundColor: '#00CA90',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 56,
    // position: 'absolute',
    top: 0,
    width: '100%',
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: "stretch",
  },
  backButton: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
  },
  backBtnContainer: {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TopBar;
