import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Event from "../components/Event";

import data from "../db";

const JoinedEvents = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(
      data["events"].filter((event) => {
        // only show joined but not hosted events
        if (event.status.joined === true && event.status.organised === false) {
          return true;
        }
      })
    );
  }, []);

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.list}>
        {events.map((event, indx) => {
          return (
            <Event
              key={indx}
              image={event.image}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              categories={event.categories}
              status={event.status.complete ? "attended" : "attending"}
              onPress={() =>
                navigation.navigate("Event", {
                  image: event.image,
                  title: event.title,
                  organiser: event.organiser,
                  date: event.organiser,
                  time: event.time,
                  location: event.location,
                  attendees: event.attendees,
                  capacity: event.capacity,
                  categories: event.categories,
                  description: event.description,
                  comments: event.comments,
                  status: ""
                })
              }
            />
          );
        })}
        <View style={styles.offset} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    width: "100%",
    maxHeight: "100%",
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 23,
    paddingTop: 150,
  },
  list: {
    width: "100%",
  },
  offset: {
    height: 50,
  },
});

export default JoinedEvents;
