// Formik x React Native example
import React from "react";
import {
    Button,
    TextInput,
    View,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Text
} from "react-native";

import { Formik } from "formik";
import CustomButton from "../components/CustomButton";
import { SmallButton } from "../components/CustomButton";
import { SliderWithVal } from "../components/Slider";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useEffect } from "react";
import DropDown from "../components/Dropdown";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const styles = StyleSheet.create({
    MainContainer: {
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
        marginTop: 20


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
        marginVertical: 10
    },
    label: {
        alignSelf: "flex-start",
        marginLeft: "10%"
    }
});

const Sect = ({ label, onChangeText, onBlur, value, height }) => {


    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                style={{ ...styles.SearchWindow, 'height': height }}
            />
        </>)

}

const DatePicker = ({ label, date, setDate }) => {
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        // setDateTop(currentDate)
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(false);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
        setShow(true)
    };

    const showTimepicker = () => {
        showMode('time');
        setShow(true)
    };

    return (
        <View style={{ marginBottom: 20 }}>

            <Text style={{ marginVertical: 10 }}> {label}{date.toLocaleString()}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <SmallButton onPress={showDatepicker} title="Date" style={{ backgroundColor: '#00CA90', paddingHorizontal: 25 }} />
                <SmallButton onPress={showTimepicker} title="Time" style={{ backgroundColor: '#00CA90', paddingHorizontal: 25 }} />

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}
            </View>

        </View >
    );
}

const HostEvent = ({ navigation }) => {
    const [slider, setSlider] = useState(0)
    const [dateStart, setDateStart] = useState(new Date(1598051730000));
    const [dateEnd, setDateEnd] = useState(new Date(1598051730000));
    const [selectedItems, setSelectedItems] = useState([]);

    // useEffect(() => {
    //     console.log({ 'dateTopEnd': dateTopEnd, 'dateTopStart': dateTopStart }),
    //         [dateTopStart, dateTopEnd]
    // })


    return (
        <ScrollView>
            <View style={styles.MainContainer}>
                <Formik
                    initialValues={{ title: '', location: '', description: '' }}
                    onSubmit={values => console.log(values)}
                    style={{ ...styles.MainContainer, ...{ backgroundColor: "blue" } }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View
                            style={styles.MainContainer}
                        >
                            <View style={{ ...styles.MainContainer, flex: 11 }}>


                                <Sect label={'Title'}
                                    onBlur={handleChange('title')}
                                    onChangeText={handleChange('title')}
                                    value={values.title}
                                />
                                <Sect label={'Location'}
                                    onBlur={handleChange('location')}
                                    onChangeText={handleChange('location')}
                                    value={values.location}
                                />

                                <SliderWithVal message={"Attendee Capacity"} start={1} end={500} step={1} value={slider} setValue={setSlider} />
                                <DropDown selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
                                <DatePicker label="Event start date and time: " date={dateStart} setDate={setDateStart} />
                                <DatePicker label="Event end date and time: " date={dateEnd} setDate={setDateEnd} />

                                <Sect label={'Description'}
                                    onBlur={handleChange('description')}
                                    onChangeText={handleChange('description')}
                                    value={values.description}
                                    height={200}
                                />

                            </View>
                            <View style={{ width: "90%", flex: 1 }}>
                                <CustomButton onPress={() => {
                                    handleSubmit
                                    navigation.navigate('DashBoard')
                                }} title={"HostEvent"} />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </ScrollView>
    );
};



export default HostEvent;
