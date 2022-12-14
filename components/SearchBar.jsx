// Formik x React Native example
import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  SearchWindow: {
    backgroundColor: "#DAF6E6",
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});

const SearchIcon = () => (
  <>
    <Icon name="magnify" size={25} color="black" />
  </>
);

const SB = (props) => {
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.SearchWindow}>
          <TextInput
            onChangeText={handleChange("search")}
            onBlur={handleBlur("search")}
            value={values.email}
            placeholder="Search by Location or Event Name"
          />
          <TouchableHighlight onPress={handleSubmit}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <SearchIcon />
            </IconComponentProvider>
          </TouchableHighlight>
        </View>
      )}
    </Formik>
  );
};

export const SearchBar = ({ value, setValue, submitSearch }) => {
  return (
    <View
      style={styles.SearchWindow}
    >
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder="Search by Location or Event Name"
      />
      <TouchableHighlight onPress={submitSearch}>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          <SearchIcon />
        </IconComponentProvider>
      </TouchableHighlight>
    </View>
  );
};

export const DisabledSearch = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.SearchWindow}
      onPress={() => navigation.navigate("Search")}
    >
      <View pointerEvents="none" style={{ display: "flex", justifyContent: "center" }}>
        <TextInput
          placeholder="Search by Location or Event Name"
          editable={false}
          onFocus={() => navigation.navigate("Search")}
        />
      </View>
      <TouchableHighlight>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          <SearchIcon />
        </IconComponentProvider>
      </TouchableHighlight>
    </TouchableOpacity>
  );
};

export const NoButtonSB = ({ value, setValue }) => {
  return (
    <View style={styles.SearchWindow}>
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder="Search by Location or Event Name"
      />
      <MaterialIcons name="search" color="#d1d5db" size={25} />
    </View>
  );
};



export default SB;
