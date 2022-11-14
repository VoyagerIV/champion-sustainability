import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { SearchBar } from "../components/SearchBar";
import Event from "../components/Event";

import data from "../db";

// distance parameter will not be used for the prototype as user location is unknown
const SearchResults = ({ route, navigation }) => {
    const { searchInput, distance, categories } = route.params;
    const [newSearchInput, setNewSearchInput] = useState([]);
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
      // perform search based on given parameters
      setEvents(
        data["events"].filter(event => {
          // only show upcoming events
          if (event.status.complete === false) {
            return true;
          }
        })
      );
      console.log({
        "search": searchInput,
        "distance": distance,
        "categories": categories
      })
    }, []);

    return (
      <View style={styles.screenContainer}>
        <View style={styles.searchContainer}>
          <SearchBar
            value={newSearchInput}
            setValue={setNewSearchInput}
            submitSearch={() => console.log(`search: ${newSearchInput}`)}
          />
        </View>
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
                status=""
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
                    status: "",
                  })
                }
              />
            );
          })}
          <View style={styles.offset} />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  screenContainer: {
    width: "100%",
    maxHeight: "100%",
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 23,
    paddingTop: 150,
  },
  searchContainer: {
    width: "100%",
    paddingBottom: 15,
  },
  list: {
    width: "100%",
  },
  offset: {
    height: 50
  }
});

export default SearchResults;