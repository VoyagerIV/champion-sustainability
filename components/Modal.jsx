import {React, useCallback, useState, useEffect} from 'react';
import { Button, TextInput, View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import { Flex } from '@react-native-material/core';
import Modal from "react-native-modal";

const styles = StyleSheet.create({
    modal :{
    backgroundColor: 'grey', 
    flex:1,
    alignContent: 'center',
    marginTop: "50%",
    maxHeight: "50%",
    borderRadius: 50
    },
    innerView: { 
    flex: 1, 
    justifyContent: "space-between",
    borderRadius: 50,
    padding: "20%"
    }
})



const MyModal = ({txt}) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Remove the top view style if you want


  return (
    <>
    <View style={{height: 100}}></View> 
    <Button title="Show modal" onPress={toggleModal} />
    <View style={{ flex: 1}}>

      <Modal isVisible={isModalVisible} hasBackdrop={false} style={styles.modal}>
        <View style={styles.innerView}>
          <View>
          <Text>{txt}</Text>
          </View>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
    </>
  );
}

export default MyModal;
