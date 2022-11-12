import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";

import { Feather } from "@expo/vector-icons"; 

const CategoryTag = ({ category }) => {
    return <View style={styles.tagContainer}>
        <Text style={styles.tagText}>{category}</Text>
    </View>
}

const Event = ({ image, title, organiser, date, time, location, categories, status }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? "rgba(0, 0, 0, 0.03)"
              : "rgba(0, 0, 0, 0)",
          },
          styles.container,
        ]}
      >
        <Image
          style={styles.image}
          source={{
            uri: `${image}`,
          }}
        />
        <View style={styles.infoBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.title}>{title}</Text>
            {status == "attending" && (
              <Feather name="clock" size={24} color="#FE881A" />
            )}
            {status == "attended" && (
              <Feather name="check-circle" size={23} color="#00CA90" />
            )}
          </View>
          <Text style={[styles.text, styles.organiserText]}>{organiser}</Text>
          <Text style={styles.text}>
            {date} · {time}
          </Text>
          <Text style={styles.text}>{location}</Text>
          <View style={styles.tagsRow}>
            {categories.map((item, indx) => {
              return <CategoryTag key={indx} category={`${item}`} />;
            })}
          </View>
        </View>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  image: {
    flex: 1,
    width: 135,
    height: 135,
    marginRight: 15,
  },
  infoBox: {
    flex: 2,
  },
  eventHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 7,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  organiserText: {
    color: "#2F4F4F",
  },
  tagsRow: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
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
    marginRight: 5,
  },
  tagText: {
    fontSize: 13,
    color: "#2F4F4F",
  },
});

export default Event;
