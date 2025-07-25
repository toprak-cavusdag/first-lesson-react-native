import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constant/colors";

function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressData})=> pressData ? [styles.buttonInnerContainer, styles.pressed,]  : styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#ffff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
