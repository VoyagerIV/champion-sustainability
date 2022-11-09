import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StarRatingStatic } from "./StarRating";

const Comment = ({ poster, posterImg, rating, comment}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: `${posterImg}` }} />
        <View style={styles.commentContainer}>
          <View style={styles.commentHeader}>
            <Text style={[styles.text, styles.poster]}>{poster}</Text>
            <StarRatingStatic rating={rating} />
          </View>
          <Text style={styles.text}>{comment}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2F1ED",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 22
  },
  poster: {
    fontWeight: '500',
    marginRight: 7
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100,
    alignSelf: "flex-start"
  },
  commentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  commentHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default Comment;
