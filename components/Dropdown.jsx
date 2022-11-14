import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [
    { id: 1, name: 'Planting' },
    { id: 2, name: 'Cleaning Beaches' },
    { id: 3, name: 'Forestation' },
    { id: 4, name: 'Animal Care' },
    { id: 5, name: 'Weed Removal' },
    { id: 6, name: 'Ocean Cleaning' },
];

const DropDown = ({ selectedItems, setSelectedItems }) => {
    // Data Source for the SearchableDropdown


    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItems(selectedItems);
    };


    return (

        <View style={styles.container}>
            <Text style={styles.titleText}>
                Type of Ventures:
            </Text>
            <MultiSelect
                hideTags
                items={items}
                uniqueKey="id"
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Pick Venture"
                searchInputPlaceholderText="Search Ventures..."
                onChangeInput={(text) => console.log(text)}
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#48d22b"
                submitButtonText="Submit"
            />
        </View>

    );
};

export default DropDown;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        justifyContent: 'center',

    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headingText: {
        padding: 8,
    },
});