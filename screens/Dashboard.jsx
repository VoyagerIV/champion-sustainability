import { StyleSheet, View, Image, Text } from "react-native";
import TopBar from "../components/TopBar";

const Dashboard = ({}) => {
  return (
    <>
    <TopBar
      icon="https://cdn-icons-png.flaticon.com/512/4090/4090434.png"
      title="Welcome Ben">
      </TopBar>
    <View>
    <Text style={styles.text}>Discover Events</Text>
        <Text>Joined Events</Text>
        <Text>My Events</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
text:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'left',
}
});

export default Dashboard;
