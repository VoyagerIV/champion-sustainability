import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import SB from "../components/SearchBar";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import CustomButton from "../components/CustomButton";

const Search = () => {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.sbContainer}>
          <SB />
        </View>
        <View style={styles.sliderContainer}>
          <Slider message=" km from me" start={0} end={10} step={1} />
        </View>
        <Categories />
        <CustomButton
          title="Search"
          onPress={() => {
            console.log("search!!!");
          }}
          disabled={false}
          style={styles.searchButton}
        />
      </View>
    );
}


const styles = StyleSheet.create({
    screenContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 23,
    },
    searchButton: {
        marginTop: 15,
    },
    sbContainer: {
        width: "100%",
        marginTop: 10
    },
    sliderContainer: {
        width: "100%",
        marginTop: 10
    }
});

export default Search;