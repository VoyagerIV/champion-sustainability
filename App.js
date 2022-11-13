import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Event from "./components/Event";
import Comment from "./components/Comment";
import Categories from './components/Categories';
import { StarRating } from './components/StarRating';
import SB from './components/SearchBar';
import Slider from './components/Slider';
import MyModal from './components/Modal';
import TopBar from './components/TopBar';
import Search from "./screens/Search";
import SearchResults from "./screens/SearchResults";
import EventPage from "./screens/EventPage";
import Login from './screens/Login';
import Register from './screens/Register';

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
      {/* <Categories />  */}
      {/* <StarRating /> */}
      {/* <SB /> */}
      {/* <Slider message="Km from my location: " start={0} end={12} step={1}/>
      <MyModal txt={"Insert message here"}/> */}
      {/* <TopBar
      icon="https://cdn-icons-png.flaticon.com/512/4090/4090434.png"
      title="Welcome Ben"></TopBar> */}
      {/* <TopBar
      icon="https://img.icons8.com/ios/512/left.png"
      title="Host Event"></TopBar> */}
      {/* Screens */}
      {/* <Search /> */}
      {/* <SearchResults /> */}
      <EventPage image="https://assets.weforum.org/article/image/lllYzG60bDfxJ6CRQUI5FTjkqI7-acWR4vam2s901IU.jpg" />
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
    fontSize: 16,
  },
});
