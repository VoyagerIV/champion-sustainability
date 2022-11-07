import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const StarRatingStatic = ({ rating }) => {
  const selected = "#00CA90";
  const notSelected = "#C6C6C6";
  return (
    <View style={styles.ratingContainer}>
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

const styles = StyleSheet.create({
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    marginRight: 2
  }
});
