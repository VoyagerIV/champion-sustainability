import { StyleSheet, Text, View} from "react-native";
import TopBar from "../components/TopBar";
import React from 'react';
import { SearchBar } from "../components/SearchBar";
import { SmallButton } from "../components/CustomButton";

const Dashboard = ({}) => {
  return (
    <>
      <TopBar
        icon="https://cdn-icons-png.flaticon.com/512/4090/4090434.png"
        title="Welcome Ben!">
      </TopBar>
      <View style={styles.searchButton}> 
        <SearchBar></SearchBar>
      </View>
      
      <Text style={styles.text}>Discover Events</Text>
      <Text style={styles.text}>Joined Events</Text>
      <Text style={styles.text}>My Events</Text>
      
     {/* </> <View title={"+Host Event"}> */}
      <SmallButton title="+ Host Event"></SmallButton>
      
     

    </>
  );
};

const styles = StyleSheet.create({
text:{
    flex: 0.25,
    fontSize: 25,
    fontWeight: 'bold',
    top: '5%',
    left: 20,
},
container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  searchButton: {
    paddingTop: '35%',
    width:'90%',
    left: 20,
},


});

export default Dashboard;
