import { StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = ({ title, onPress, disabled, style }) => {
  return (
    <TouchableOpacity
      style={disabled ? [style, styles.button, styles.disabled] : [style, styles.button, styles.enabled]}
      onPress={() => {
        if (!disabled) {
          onPress();
        }
      }}
      activeOpacity={0.8}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export const SmallButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[style, styles.smallBtn]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 43,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  smallBtn: {
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  enabled: {
    backgroundColor: "#00CA90",
  },
  disabled: {
    backgroundColor: "#B3CBC4",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;