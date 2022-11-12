import { StyleSheet, View, Image, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const EventPage = ({
  image,
  title,
  organiser,
  date,
  time,
  location,
  categories,
  status,
  description,
  comments
}) => {
  return (
    <View style={styles.screenContainer}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text>{title}</Text>
      <View>
        <FontAwesome name="building-o" color="#00CA90" size={25} />
        <Text>{organiser}</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 50, // TODO: remove this after topbar is added
    width: "100%",
    maxHeight: "100%",
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 23,
  },
  image: {
    width: "100%",
    height: 180
  }
});

export default EventPage;