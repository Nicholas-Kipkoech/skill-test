import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>My shop</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Text style={styles.texts}>This week</Text>
        <Text style={styles.text}>KES12,785</Text>
        <View style={styles.smallItems}>
          <Text style={styles.smallText}>Sold 234 Units</Text>
          <Text style={styles.smallText2}>+3.4%</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  texts: {
    justifyContent: "center",
    padding: 10,
    marginBottom: -10,
  },
  text: {
    padding: 10,
    marginBottom: -5,
    fontSize: 30,
  },
  smallText: {
    fontSize: 10,
    paddingRight: 45,
  },
  smallText2: {
    color: "green",
    fontSize: 10,
  },
  smallItems: {
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 10,
  },
});
