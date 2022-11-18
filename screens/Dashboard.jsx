import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import TopBar from "../components/TopBar";
import React from 'react';
import { SearchBar } from "../components/SearchBar";
import Carousel from "../components/Carousal";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Dashboard = ({ navigation }) => {
  return (
    <>
      <TopBar
        icon="https://cdn-icons-png.flaticon.com/512/4090/4090434.png"
        title="Welcome Ben!">
      </TopBar>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollView}>

          <View style={styles.searchButton}>
            <SearchBar></SearchBar>
          </View>

          <Text style={styles.text}>Discover Events</Text>
          <Carousel data={[{ "t": "Clean The Tasman Sea", 'i': require('../assets/turtle.jpg') },
          { "t": "Clean Manly Beach", 'i': require('../assets/beach.jpg') },
          {
            "t": "Introduction to Bee Keeping",
            'i': require('../assets/bees.jpg')
          }]} />
          <Text style={styles.text}>Joined Events</Text>
          <Carousel data={[{ "t": "Sustainability Discussion", 'i': require('../assets/discussion.jpeg') },
          { "t": "Sustainability Fashion", 'i': require('../assets/fashion.jpg') }]} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.text}>My Events</Text>
            <TouchableOpacity style={styles.btn}
              onPress={() => {
                handleSubmit
                navigation.navigate('DashBoard')
              }} title={"HostEvent"}
            >
              <Text style={styles.title} >
                + HOST EVENT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View >
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    left: 20,
    marginVertical: 10,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  searchButton: {
    paddingTop: '35%',
    width: '90%',
    left: 20,
  },
  btn: {
    height: 40,
    width: 140,
    borderRadius: 80,
    backgroundColor: "#3BB143",
    marginVertical: 9,
    alignItems: "center",
    justifyContent: "center",

  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  scrollView: {
    marginHorizontal: 20,
  },


});

export default Dashboard;
