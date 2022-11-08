import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Event from "./components/Event";
import Comment from "./components/Comment";
import Categories from './components/Categories';
import { StarRating } from './components/StarRating';
import SearchBar from './SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Event
        image="https://olympus-imaging.com.au/content/000107507.jpg"
        title="Event title"
        organiser="susansmith" // unique username
        date="Event date"
        time="Event time"
        location="Event location"
        description="Event description"
        categories={["category1", "category2"]}
        status="attended" // one of { none, attending, attended }
      /> */}
      {/* <Comment
        poster="johnsmith"
        posterImg="https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg"
        rating={2}
        comment="tincidunt rutrum. Fusce imperdiet pellentesque augue, faucibus commodo sem consequat sit amet.agna, acnar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptipsum d"
      /> */}
      {/* <Categories /> */}
      {/* <StarRating /> */}
      <SearchBar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFCF5",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  },
});
