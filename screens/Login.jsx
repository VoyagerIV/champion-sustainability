// Formik x React Native example
import React from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  Text
} from "react-native";
import { Formik } from "formik";
import CustomButton from "../components/CustomButton";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  MainContainer: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",


  },
  SearchWindow: {
    // backgroundColor: "grey",
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: "10%"
  }
});

const Login = ({ route, navigation }) => {

  return (
    <View style={styles.MainContainer}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        style={{ ...styles.MainContainer, ...{ backgroundColor: "blue" } }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View
            style={styles.MainContainer}
          >
            <View style={{ ...styles.MainContainer, flex: 11 }}>
              <Text style={styles.label}>Email</Text>

              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.SearchWindow}
              />
              <Text style={styles.label}>Password</Text>

              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.SearchWindow}
                secureTextEntry={true}
              />
            </View>
            <View style={{ width: "90%", flex: 1 }}>
              <CustomButton onPress={() => {
                handleSubmit
                navigation.navigate('Search')

              }} title={"Login"} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};



export default Login;
