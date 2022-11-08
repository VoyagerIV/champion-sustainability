// Formik x React Native example
import {React, useCallback, useState, useEffect} from 'react';
import { Button, TextInput, View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import { Flex } from '@react-native-material/core';

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    
  },
  container: {
    flexDirection: "column",
    width: "80%",
    padding: 20
    
  },

  text: {
    flexDirection: "row",
    justifyContent: "space-between"
  
  }
})

export default MySlider = ({message, start, end, step}) => {
    const [hookValue, setHookValue] = useState(0)



    return (<View style={styles.container}>

      <Text>{message}{hookValue}</Text>
      <Slider
      style={styles.slider}
      minimumValue={start}
      maximumValue={end}
      step={step}
      minimumTrackTintColor="#00CA90"
      maximumTrackTintColor="#000000"
      onValueChange={(value)=> setHookValue(value)}
      onSlidingComplete={(value)=> console.log(value)}
      />
      <View style={{...styles.text, }}>
        <Text style={{"paddingLeft" : 9}}>{start}</Text> 
        <Text style={{"paddingRight" : 9}}> {end}</Text> 
      </View>
    </View>)
};