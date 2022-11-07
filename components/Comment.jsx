import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StarRatingStatic } from "./StarRating";

const Comment = ({ poster, posterImg, rating, comment}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: `${posterImg}` }} />
        <Text>{poster}</Text>
        <Text>{comment}</Text>
        <StarRatingStatic rating={rating} />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2F1ED",
    width: "100%",
    display: "flex",
    displayDirection: "row",
    borderWidth: 1,
    borderColor: "red"
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: "100%"
  }
});

export default Comment;
