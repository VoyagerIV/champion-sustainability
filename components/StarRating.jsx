import { StyleSheet, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const StarRatingStatic = ({ rating }) => {
  const selected = "#00CA90";
  const notSelected = "#C6C6C6";
  return (
    <View style={styles.ratingContainer}>
      {[...Array(5).keys()].map((indx) => {
        return (
          <Icon
            key={indx}
            name="star"
            size={24}
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
});
