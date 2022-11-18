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
import MyBadges from './screens/MyBadges.jsx';
import BadgeWindow from './components/BadgeWindow';
import ProfilePage from './screens/ProfilePage';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen
          options={{
            header: () => <TopBar title="Welcome Ben!" />,
          }}
          name="Profile" component={ProfilePage} />

        <Stack.Screen
          options={{
            header: () => <TopBar title="Welcome Ben!" />,
          }}
          name="DashBoard"
          component={Dashboard}
        />

        <Stack.Screen
          options={{
            header: () => <TopBarBack title="My Badges" />,
          }}
          name="Badges"
          component={MyBadges}
        />

        <Stack.Screen
          options={{
            header: () => <TopBarBack title="Host Event" />,
          }}
          name="Host Event"
          component={HostEvent}
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
      <StatusBar style="auto" />
    </NavigationContainer>

    // <SearchResults />

    // <MyBadges/>
    // <Carousal/>
    // <JoinedEvents></JoinedEvents>
    // <MyBadges></MyBadges>
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
