// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, StyleSheet, TouchableHighlight} from 'react-native';
import { Formik } from 'formik';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  
  SearchWindow: {
    backgroundColor: "#DAF6E6",
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  }
});

const SearchIcon = () => (
  <>
    <Icon name="magnify" size={25} color="black"/>
  </>
);


const SB = (props) => {
  return <Formik
    initialValues={{ search: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.SearchWindow}>
        <TextInput
          onChangeText={handleChange('search')}
          onBlur={handleBlur('search')}
          value={values.email}
          placeholder="Search by Location or Event Name"
        />
        <TouchableHighlight onPress={handleSubmit}>
          <IconComponentProvider  IconComponent={MaterialCommunityIcons}>
            <SearchIcon/>
          </IconComponentProvider>
        </TouchableHighlight>
      </View>
    )}
  </Formik>
};

export default SB;