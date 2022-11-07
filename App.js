import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Event from "./components/Event";

export default function App() {
  return (
    <View style={styles.container}>
      <Event
        title="Event Title"
        organiser="Event host"
        date="Event date"
        time="Event time"
        location="Event location"
        image="https://olympus-imaging.com.au/content/000107507.jpg"
        categories={["category1", "category2"]}
      />
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
