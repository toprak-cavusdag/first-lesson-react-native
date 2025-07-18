import { StyleSheet, Text } from "react-native";
import Colors from "../../constant/colors";

function Title({ title }) {
  return <Text style={styles.titleStyle}>{title}</Text>;
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 12,
    borderColor: "white",
    borderWidth: 2,
  },
});

export default Title;
