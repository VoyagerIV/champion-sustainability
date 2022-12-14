// Formik x React Native example
import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text
} from "react-native";
import { Formik } from "formik";
import CustomButton from "../components/CustomButton";

const styles = StyleSheet.create({
  MainContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  SearchWindow: {
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

const Register = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => console.log(values)}
        style={{ ...styles.MainContainer, ...{ backgroundColor: "blue" } }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.MainContainer}>
            <View style={{ ...styles.MainContainer, flex: 11 }}>
              <Text style={styles.label}>Name</Text>

              <TextInput
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                style={styles.SearchWindow}
              />
              <Text style={styles.label}>Email</Text>

              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={styles.SearchWindow}
              />
              <Text style={styles.label}>Password</Text>

              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={styles.SearchWindow}
                secureTextEntry={true}
              />
              <Text style={styles.label}>Confirm Password</Text>

              <TextInput
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                style={styles.SearchWindow}
                secureTextEntry={true}
              />
            </View>
            <Text
              style={{ fontSize: 16, marginBottom: 5, color: "#00CA90" }}
              onPress={() => navigation.navigate("Login")}
            >
              Already have an account? Log in
            </Text>
            <View style={{ width: "90%", flex: 1 }}>
              <CustomButton
                onPress={() => {
                  handleSubmit;
                  navigation.navigate("DashBoard");
                }}
                title={"Register"}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};



export default Register;
