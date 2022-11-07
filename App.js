import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Comment from "./components/Comment";

export default function App() {
  return (
    <View style={styles.container}>
      <Comment
        poster="johnsmith"
        posterImg="https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg"
        rating={2}
        comment="Comment text"
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
