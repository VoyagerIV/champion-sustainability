import { useState, useEffect } from "react";

import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import { NoButtonSB } from "../components/SearchBar";
import Categories from "../components/Categories";
import { SliderWithVal } from "../components/Slider";
import CustomButton from "../components/CustomButton";

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const [distance, setDistance] = useState(0);
    const [categories, setCategories] = useState([]);
    
    const [canSubmit, setCanSubmit] = useState(false);
    
    useEffect(() => {
      // if all fields are filled, allow submission
      if (searchInput.trim() !== "" && categories.length > 0) {
        if (canSubmit === false) setCanSubmit(true)
      } else {
        // otherwise, disable submission
        if (canSubmit === true) setCanSubmit(false)
      }
    }, [searchInput, distance, categories])
    
    console.log({
      "distance": distance,
      "search": searchInput,
      "categories": categories
    })
    
    useEffect(() => {
        console.log(distance)
    }, [distance])
    
    return (
      <View style={styles.screenContainer}>
        <View style={styles.sbContainer}>
          <NoButtonSB value={searchInput} setValue={setSearchInput} />
        </View>
        <View style={styles.sliderContainer}>
          <SliderWithVal message=" km from me" start={0} end={10} step={1} value={distance} setValue={setDistance} />
        </View>
        <Categories selected={categories} setSelected={setCategories}/>
        <CustomButton
          title="Search"
          onPress={() => {
            console.log("search!!!");
          }}
          disabled={!canSubmit}
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