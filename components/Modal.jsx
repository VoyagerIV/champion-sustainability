import { React, useCallback, useState, useEffect } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
} from "react-native";
import { Flex } from "@react-native-material/core";
import Modal from "react-native-modal";
import { SmallButton } from "./CustomButton";
import { StarRating } from "./StarRating";

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#E2FFE9",
    flex: 1,
    alignContent: "center",
    marginTop: "50%",
    maxHeight: "50%",
    borderRadius: 50,
  },
  innerView: {
    flex: 1,
    justifyContent: "space-between",
    borderRadius: 50,
    paddingHorizontal: "15%",
    paddingVertical: "10%"
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#C6C6C6",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    lineHeight: 22,
    height: 200,
  },
  modalFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  heading: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5
  }
});

const MyModal = ({ txt }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Remove the top view style if you want

  return (
    <>
      <View style={{ height: 100 }}></View>
      <Button title="Show modal" onPress={toggleModal} />
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={isModalVisible}
          hasBackdrop={false}
          style={styles.modal}
        >
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
};

export const ReviewModal = ({
  isModalVisible,
  setModalVisible,
  rating,
  setRating,
  message,
  setMessage,
  submitComment,
}) => {
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={isModalVisible}
          hasBackdrop={true}
          style={styles.modal}
        >
          <View style={styles.innerView}>
            <View>
              <Text style={styles.heading}>Leave Comment</Text>
              <Text style={styles.label}>Rating (optional)</Text>
              <StarRating rating={rating} setRating={setRating} />
              <Text style={styles.label}>Message</Text>
              <TextInput
                multiline={true}
                onChangeText={setMessage}
                value={message}
                style={styles.textInput}
              />
            </View>
            <View style={styles.modalFooter}>
              <SmallButton
                title="Cancel"
                onPress={toggleModal}
                style={{ width: 110, backgroundColor: "#9A9A9A" }}
              />
              <SmallButton
                title="Comment"
                onPress={submitComment}
                style={{ width: 110, backgroundColor: "#00CA90" }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default MyModal;
