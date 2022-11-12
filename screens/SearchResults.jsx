import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import data from "../db";

// distance parameter will not be used for the prototype as user location is unknown
const SearchResults = ({ searchInput, distance, categories }) => {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
      // perform search based on given parameters
      setEvents(
        data.events.filter(event => true)
      );
    })

    return <View style={styles.screenContainer}>
      {
        events.map((event, indx) => {
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
        })
      }
    </View>
}

const styles = StyleSheet.create({
  screenContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 23,
  },

});

export default SearchResults;