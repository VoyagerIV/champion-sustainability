///import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import TopBar from "../components/TopBar";
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
  } from "react-native";
  
const MyBadges = ({}) => {
  return (
    <>
    <View>
      <TopBar
        icon="https://img.icons8.com/ios/512/left.png"
        title="My Badges">
      </TopBar>
      
    </View>
    </>
    );
}



const styles = StyleSheet.create({
   
  });
  
export default MyBadges;


