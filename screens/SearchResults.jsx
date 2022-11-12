import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { SearchBar } from "../components/SearchBar";
import Event from "../components/Event";

import data from "../db";

// distance parameter will not be used for the prototype as user location is unknown
const SearchResults = ({ searchInput, distance, categories }) => {
    const [newSearchInput, setNewSearchInput] = useState([]);
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
      // perform search based on given parameters
      setEvents(
        data["events"].filter(() => true)
      );
    }, []);

    return (
      <View style={styles.screenContainer}>
        <SearchBar value={newSearchInput} setValue={setNewSearchInput} submitSearch={() => console.log(`search: ${newSearchInput}`)} />
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
              />
            );
          })}
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
  },
  list: {
    width: "100%",
    height: "80%",
    marginTop: 10
  },
});

export default SearchResults;