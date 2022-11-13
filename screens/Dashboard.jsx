import { StyleSheet, SafeAreaView,  View, Image, Text, ScrollView, Dimensions} from "react-native";
import TopBar from "../components/TopBar";
import React from 'react';
import CarouselCards from "../components/CarouselCardItem";


const Dashboard = ({}) => {
  return (
    <>
    <TopBar
      icon="https://cdn-icons-png.flaticon.com/512/4090/4090434.png"
      title="Welcome Ben">
      </TopBar>
    <Text style={styles.text}>Discover Events</Text>
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
    <Text style={styles.text}>Joined Events</Text>
    <Text style={styles.text}>My Events</Text>

    </>
  );
};

const styles = StyleSheet.create({
text:{
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent:'left',
},
container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});

export default Dashboard;
