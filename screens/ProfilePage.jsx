import React from "react";
import {
    TextInput,
    View,
    StyleSheet,
    Text
} from "react-native";
import { Formik } from "formik";
import CustomButton, { SmallButton } from "../components/CustomButton";

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

const ProfilePage = ({ route, navigation }) => {
    return (
        <View style={styles.MainContainer}>
            <Formik
                initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                onSubmit={values => console.log(values)}
                style={{ ...styles.MainContainer, ...{ backgroundColor: "blue" } }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View
                        style={styles.MainContainer}
                    >
                        <View style={{ ...styles.MainContainer, flex: 11 }}>
                            <Text style={styles.label}>Name</Text>

                            <TextInput
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                style={styles.SearchWindow}
                                editable={false}
                                selectTextOnFocus={false}
                                placeholder='Ben Marcus'
                            />
                            <Text style={styles.label}>Email</Text>

                            <TextInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                style={styles.SearchWindow}
                                editable={false}
                                selectTextOnFocus={false}
                                placeholder='BenMarcus@gmail.com'
                            />
                            <Text style={styles.label}>Password</Text>

                            <TextInput
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                style={styles.SearchWindow}
                                secureTextEntry={true}
                                editable={false}
                                selectTextOnFocus={false}
                                placeholder='**************'
                            />

                            <SmallButton style={{ backgroundColor: 'orange', padding: 10, marginTop: 20 }} title='Change Password' />
                        </View>
                        <View style={{ width: "90%", flex: 1 }}>
                            <CustomButton onPress={() => {
                                handleSubmit
                                navigation.navigate('Register')

                            }} title={"Logout"} />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
};


export default ProfilePage;