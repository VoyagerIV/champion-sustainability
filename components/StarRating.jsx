import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const StarRatingStatic = ({ rating }) => {
  const selected = "#00CA90";
  const notSelected = "#C6C6C6";
  return (
    <View style={styles.ratingContainer} accessibilityLabel={`Rating ${rating} out of 5`}>
      {[...Array(5).keys()].map((indx) => {
        return (
          <FontAwesome
            key={indx}
            style={styles.star}
            name="star"
            size={22}
            color={rating > indx ? selected : notSelected}
          />
        );
      })}
    </View>
  );
};

export const StarRating = ({ rating, setRating }) => {

  const selected = "#00CA90";
  const notSelected = "#C6C6C6";
  return (
    <View style={styles.ratingContainer} accessibilityLabel={`Rating ${rating} out of 5`}>
      {[...Array(5).keys()].map((indx) => {
        return (
          <FontAwesome
            key={indx}
            style={styles.star}
            name="star"
            size={22}
            color={rating > indx ? selected : notSelected}
            onPress={() => {
              setRating(indx + 1)
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    marginRight: 2
  }
});
