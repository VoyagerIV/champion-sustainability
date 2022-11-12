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
              />
            );
          })}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 50, // TODO: remove this after topbar is added
    width: "100%",
    maxHeight: "100%",
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 23,
  },
  searchContainer: {
    width: "100%",
    paddingBottom: 15
  },
  list: {
    width: "100%",
  },
});

export default SearchResults;