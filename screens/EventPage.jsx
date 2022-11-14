import { useState } from "react";
import { StyleSheet, View, ScrollView, Image, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import IonIcon from "@expo/vector-icons/Ionicons";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import Comment from "../components/Comment";
import { SmallButton } from "../components/CustomButton";
import { CommentModal } from "../components/Modal";
import CustomButton from "../components/CustomButton";

const EventPage = ({ route }) => {
  const {
    image,
    title,
    organiser,
    date,
    time,
    location,
    attendees,
    capacity,
    categories,
    status,
    description,
    comments,
  } = route.params;

  const [isModalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <View>
      <ScrollView style={styles.screenContainer}>
        <CommentModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          rating={rating}
          setRating={setRating}
          message={message}
          setMessage={setMessage}
          submitComment={() => {
            console.log({ rating: rating, comment: message })
            setModalVisible(false)
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Text style={styles.heading}>{title}</Text>
        <View style={styles.infoRow}>
          <FontAwesome
            style={styles.infoIcon}
            name="building-o"
            color="#00CA90"
            size={20}
          />
          <Text style={styles.text}>{organiser}</Text>
        </View>
        <View style={styles.infoRow}>
          <IonIcon
            style={styles.infoIcon}
            name="people-outline"
            color="#00CA90"
            size={20}
          />
          <Text style={styles.text}>
            {attendees} / {capacity}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome
            style={styles.infoIcon}
            name="calendar"
            color="#00CA90"
            size={20}
          />
          <Text style={styles.text}>
            {date}, {time}
          </Text>
        </View>
        <Text style={[styles.subheading, styles.subheadingMargin]}>
          Description
        </Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={[styles.subheading, styles.subheadingMargin]}>
          Location
        </Text>
        <Text style={styles.text}>{location}</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -33.865143,
            longitude: 151.2099,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: -33.865143, longitude: 151.2099 }} />
        </MapView>
        <View style={styles.commentsHeader}>
          <Text style={styles.subheading}>Comments</Text>
          <SmallButton
            title="Comment"
            style={{ width: 100, backgroundColor: "#00CA90" }}
            onPress={() => setModalVisible(true)}
          />
        </View>
        {comments.map((comment, indx) => {
          return (
            <Comment
              key={indx}
              poster={comment.poster}
              posterImg={comment.posterImg}
              rating={comment.rating}
              comment={comment.comment}
            />
          );
        })}
        <CustomButton
          title="Join Event"
          disabled={false}
          style={{ marginTop: 15 }}
          onPress={() => {}}
        />
        <View style={styles.offset} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    width: "100%",
    display: "flex",
    paddingHorizontal: 23,
    paddingTop: 150,
  },
  image: {
    width: "100%",
    height: 180,
  },
  infoRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "600",
  },
  subheadingMargin: {
    marginTop: 12,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  infoIcon: {
    marginRight: 7,
    width: 22,
  },
  map: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
  offset: {
    height: 200,
  },
  commentsHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 10,
  },
});

export default EventPage;
