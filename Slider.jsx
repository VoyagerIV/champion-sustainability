// Formik x React Native example
import {React, useCallback, useState, useEffect} from 'react';
import { Button, TextInput, View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import { Flex } from '@react-native-material/core';

const styles = StyleSheet.create({
  slider: {
    width: "80%",
    
  },
  container: {
    flexDirection: "row",
  }
})

export default MySlider = (props) => {
    const [hookValue, setHookValue] = useState(0)



    return (<View style={styles.container}>

      <Text>{hookValue}</Text>
      <Slider
      style={styles.slider}
      minimumValue={0}
      maximumValue={10}
      step={1}
      minimumTrackTintColor="#00CA90"
      maximumTrackTintColor="#000000"
      onValueChange={(value)=> setHookValue(value)}
      onSlidingComplete={(value)=> console.log(value)}
      />
    </View>)
};