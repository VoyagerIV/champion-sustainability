import * as React from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

const MyCarousel = ({ data }) => {
  const width = Dimensions.get("window").width - 40;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.carousel}
            onPress={() =>
              navigation.navigate("Event", {
                image:
                  "https://bloximages.chicago2.vip.townnews.com/tdn.com/content/tncms/assets/v3/editorial/d/9a/d9aa590b-95ca-5760-aba1-5ab8a79d460c/58a229d3cc894.image.jpg?resize=1200%2C800",
                title: item.t,
                organiser: "Environment & Heritage",
                date: "11/11/2022",
                time: "10:00 AM",
                location: "Bondi Beach NSW",
                attendees: 25,
                capacity: 50,
                categories: [],
                status: "",
                description:
                  "Trees soak up CO2 naturally, which helps to promote clean and healthy air for all of us. That’s not all though. With trees able to store CO2, they decrease the amount of CO2 in the atmosphere, while using it in the process of photosynthesis to produce sugar, provide energy, and release oxygen. Did you know that living near trees has been scientifically shown to improve our mental health? Having trees in your life is more than an aesthetic boost, they also help provide a natural boost to our cognitive and psychological health. Counsellor and psychologist, Amanda Woolveridge, believes trees can play a major role in mental health. So what are you waiting? Come join us in making our planet healthier and more sustainable.",
                comments: [
                  {
                    poster: "johnsmith",
                    posterImg:
                      "https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg",
                    rating: 5,
                    comment:
                      "Great event! Been with this team on three events so far and they're the best!",
                  },
                ],
              })
            }
          >
            <Image source={item.i} resizeMode="contain" style={styles.image} />
            <Text style={styles.text}>{item.t}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    borderWidth: 0,
    width: "100%",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    borderRadius: 20,
  },
  text: {
    textAlignVertical: "center",
    textAlign: "center",
    bottom: 30,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
export default MyCarousel;
