import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView
} from "react-native";
import BadgeWindow from "../components/BadgeWindow";

const MyBadges = ({ }) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollView}>
          <BadgeWindow isShared={true} imgSource={require('../assets/badge.png')} Title="Cleaned a Beach!" Date="11/11/2022 10AM-3:00PM" Caption="You have volunteered to clean the Tasman Sea!" />
          <BadgeWindow isShared={true} imgSource={require('../assets/animalBadge.png')} Title="Took Care of Animals!" Date="27/10/2022 10AM-3:00PM" Caption="You have helped workers at Toranga Zoo take care of the animals! Good Job! " />
          <BadgeWindow isShared={false} imgSource={require('../assets/rvBadge.png')} Title="Revived Volunteering!" Date="3/4/2022 10AM-3:00PM" Caption="You hosted an event to take care of the enviroment!" />
          <BadgeWindow isShared={false} imgSource={require('../assets/joinedBadge.png')} Title="Joined Us!" Date="1/4/2022 6:00PM" Caption="You have joined Champion Sustainability!" />
        </ScrollView>
      </View>

    </>

  );
}



const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "lightgray"
  },

  scrollView: {
    marginHorizontal: 20,
  },


});
export default MyBadges;


