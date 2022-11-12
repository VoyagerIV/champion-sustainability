import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const data = [
  [
    {
      category: "Education",
      image: require("../assets/book.png"),
    },
    {
      category: "Climate",
      image: require("../assets/sun.png"),
    },
    {
      category: "Animal",
      image: require("../assets/animal.png"),
    },
  ],
  [
    {
      category: "Recycling",
      image: require("../assets/recycling-bin.png"),
    },
    {
      category: "Planting",
      image: require("../assets/farming.png"),
    },
    {
      category: "Water Polution",
      image: require("../assets/water-cycle.png"),
    },
  ],
  [
    {
      category: "Overfishing",
      image: require("../assets/fishing.png"),
    },
    {
      category: "Acidification",
      image: require("../assets/acid-rain.png"),
    },
    {
      category: "Air Pollution",
      image: require("../assets/factory.png"),
    },
  ],
  [
    {
      category: "Food Waste",
      image: require("../assets/waste.png"),
    },
    {
      category: "Land Degredation",
      image: require("../assets/land.png"),
    },
    {
      category: "Plastic Pollution",
      image: require("../assets/plastic-recycling.png"),
    },
  ],
];

const Category = ({ category, image, selected, setSelected }) => {
    return (
      <TouchableOpacity 
        style={
          selected.includes(category) ? [styles.categoryContainer, styles.categorySelected] : styles.categoryContainer
        }
        activeOpacity={1}
        onPress={() => {
          if (selected.includes(category)) {
            setSelected(selected.filter(item => item != category));
          } else {
            setSelected([...selected, category])
          }
        }}
      >
        <Image style={styles.icon} source={image} />
        <Text style={styles.categoryText}>{category}</Text>
      </TouchableOpacity>
    );
}

const Categories = ({ selected, setSelected }) => {  
  return (
    <View style={styles.container}>
      {
        [...Array(4).keys()].map((row, indx) => {
          return (
            <View style={styles.row} key={indx}>
              {data[row].map((item, indx) => {
                return (
                  <Category
                    key={indx}
                    category={item.category}
                    image={item.image}
                    selected={selected}
                    setSelected={setSelected}
                  />
                );
              })}
            </View>
          );
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  categoryContainer: {
    width: "30%",
    height: 110,
    backgroundColor: "#DAF6E6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  categorySelected: {
    backgroundColor: "#45C278",
  },
  icon: {
    width: 60,
    height: 60,
  },
  categoryText: {
    fontWeight: "500",
    marginTop: 7,
    textAlign: "center",
  },
});

export default Categories;
