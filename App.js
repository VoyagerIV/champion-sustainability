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
        location="Event location"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px'
  },
});
