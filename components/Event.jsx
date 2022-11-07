import { StyleSheet, View, Text, Image, ScrollView, TextInput } from "react-native";

const CategoryTag = ({ category }) => {
    return <View style={styles.tagContainer}>
        <Text style={styles.tagText}>{category}</Text>
    </View>
}

const Event = ({ image, title, organiser, date, time, location, categories }) => {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: `${image}`,
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.text, styles.organiserText]}>{organiser}</Text>
          <Text style={styles.text}>{date} · {time}</Text>
          <Text style={styles.text}>{location}</Text>
          <View style={styles.tagsRow}>
            {categories.map((item) => {
              return <CategoryTag category={`${item}`} />;
            })}
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  image: {
    width: 135,
    height: 135,
    marginRight: 15,
  },
  text: {
    fontSize: "16px",
    marginBottom: 6,
  },
  title: {
    fontSize: "20px",
    fontWeight: "500",
    marginBottom: 7,
  },
  organiserText: {
    color: "#2F4F4F",
  },
  tagsRow: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
  },
  tagContainer: {
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#2F4F4F",
    paddingVertical: 4,
    paddingHorizontal: 15,
    marginRight: 5
  },
  tagText: {
    fontSize: "13px",
    color: "#2F4F4F",
  }
});

export default Event;
