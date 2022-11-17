import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Event from "./components/Event";
import Comment from "./components/Comment";
import Categories from './components/Categories';
import { StarRating } from './components/StarRating';
import SB from './components/SearchBar';
import Slider from './components/Slider';
import MyModal from './components/Modal';
import TopBar from './components/TopBar';
import { TopBarBack } from './components/TopBar';
import Carousal from './components/Carousal';

// screens //
import Search from "./screens/Search";
import SearchResults from "./screens/SearchResults";
import JoinedEvents from "./screens/JoinedEvents";
import OrganisedEvents from "./screens/OrganisedEvents";
import EventPage from "./screens/EventPage";
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import HostEvent from './screens/HostEvent';
import Carousel from './components/Carousal'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
      {/* <EventPage
        image="https://worldslargestlesson.globalgoals.org/wp-content/uploads/2020/08/Turtle-trapped-in-plastic-scaled-e1607518143472-355x300.jpg"
        title="Clean the Tasman Sea"
        organiser="Daniel Floyd"
        date="11/11/2022"
        time="10:00AM - 3:00 PM"
        description="Hello! I am Daniel and I am a final year Marine Biologist student! I am inviting anyone who is interested to join me in cleaning the Tasman Sea next Saturday. Join me by bringing your hats, sunscreen, big bags for waste, gloves, and any other prefered materials.  Heads up there are multiple resturants nearby that serves all types of dietry!"
        attendees={25}
        capacity={100}
        location="Sydney NSW 2000"
        comments={[
          {
            poster: "johnsmith",
            posterImg:
              "https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg",
            rating: 5, // rating out of 5, 0 for no rating?
            comment:
              "Great event! Been with this team on three events so far and they're the best!",
          },
        ]}
      /> */}

      {/* <Login/> */}
      {/* <Register/> */}

      <Stack.Navigator>

        <Stack.Screen
          name="Register"
          component={Register}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{
            header: () => <TopBarBack title="Search" />,
          }}
          name="Search"
          component={Search}
        />
        <Stack.Screen
          options={{
            header: () => <TopBarBack title="Events" />,
          }}
          name="SearchResults"
          component={SearchResults}
        />
        <Stack.Screen
          options={{
            header: () => <TopBarBack title="Joined Events" />,
          }}
          name="JoinedEvents"
          component={JoinedEvents}
        />
        <Stack.Screen
          options={{
            header: () => <TopBarBack title="Organised Events" />,
          }}
          name="OrganisedEvents"
          component={OrganisedEvents}
        />
        <Stack.Screen
          options={{
            header: () => <TopBarBack title="Event" />,
          }}
          name="Event"
          component={EventPage}
        />
      </Stack.Navigator>
      <StatusBar style="auto" /> */}
      {/* <HostEvent /> */}
      <Carousal />
    </NavigationContainer>
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
