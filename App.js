import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Graph from "./components/Graph";
import Enctypo from "react-native-vector-icons/Entypo";
import { MaterialIcons } from "react-native-vector-icons";
export default function App() {
  return (
    <View style={styles.body}>
      <View>
        <View style={styles.container}>
          <StatusBar style="auto" />
        </View>
        <View style={styles.menu}>
          <View>
            <Enctypo name="menu" size={24} />
          </View>
          <View>
            <Text style={styles.title}>My Shop</Text>
          </View>
          <View style={styles.menuEnd}></View>
        </View>
        <Text style={styles.texts}>This week</Text>
        <Text style={styles.text}>KES12,785</Text>
        <View style={styles.smallItems}>
          <Text style={styles.smallText}>Sold 234 Units</Text>
          <Text style={styles.smallText2}>+3.4%</Text>
        </View>
        <View>
          <Graph />
        </View>
        <View style={styles.div2}>
          <View>
            <Text style={styles.Text1}>2344</Text>

            <Text style={styles.smallTexts}>Minutes tracked today</Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View>
            <Text style={styles.Text2}>11%</Text>
            <Text style={styles.smallTexts}>Tasks Progress</Text>
          </View>
        </View>
        <View style={styles.div3}>
          <View style={styles.div3Text}>
            <Text style={styles.Texts}>This Week Goal</Text>
            <Text style={styles.details}>Details</Text>
          </View>
          <View style={styles.horizontalRule}></View>
          <View style={styles.div3Text2}>
            <Text style={styles.Texts2}>Progress</Text>
            <Text style={styles.progress}>56%</Text>
          </View>
          <View style={styles.barProgress}>
            <View style={styles.bar}>
              <View style={styles.progressBar}></View>
            </View>
            <View>
              <Text>You need to sell KES2,587 everyday to meet your goal</Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.div4title}>Latest Activity</Text>
          </View>
          <View style={styles.div4Text}>
            <View style={styles.div4styles}>
              <View>
                <Text>Transact1232</Text>
                <Text>10 Items (KES100 Total)</Text>
              </View>

              <Text>Today, 9pm</Text>
            </View>
          </View>
          <View style={styles.div4Text}>
            <View style={styles.div4styles}>
              <View>
                <Text>Transact1232</Text>
                <Text>10 Items (KES100 Total)</Text>
              </View>

              <Text>Today, 9pm</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#c1cde0",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menu: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container: {
    backgroundColor: "whitesmoke",
    alignItems: "center",
    padding: 30,
  },
  menuEnd: {
    width: "10%",
    borderColor: "gray",
    borderRadius: 5,
  },
  texts: {
    justifyContent: "center",
    padding: 10,

    marginBottom: -10,
    fontWeight: "bold",
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
  div2Text: {
    padding: 40,
    marginTop: 20,
  },
  div2: {
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    margin: 10,
    backgroundColor: "white",
  },
  verticleLine: {
    height: "80%",
    width: 1,
    backgroundColor: "#909090",
    marginTop: 10,
  },
  Text1: {
    fontSize: 30,
    paddingRight: 100,
    padding: 20,
    marginTop: 5,
  },
  Text2: {
    fontSize: 30,
    padding: 20,
    marginTop: 5,
  },
  smallTexts: {
    padding: 20,
    marginTop: -40,
    fontSize: 10,
    color: "black",
  },
  div3: {
    borderWidth: 1,
    borderRadius: 5,
    // flexDirection: "row",
    marginTop: 20,
    margin: 10,
    backgroundColor: "white",
  },
  div3Text: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },
  Texts: {
    marginEnd: "50%",
    justifyContent: "center",
  },
  details: {
    backgroundColor: "#91b4ed",
    width: 80,
    padding: 8,
    borderRadius: 15,
  },
  div3Text2: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progress: {
    fontWeight: "bold",
  },
  progressBar: {
    borderWidth: 4,
    borderRadius: 10,
    borderColor: "green",
    width: "56%",
  },
  bar: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "whitesmoke",
    width: "100%",
  },
  barProgress: {
    padding: 10,
  },
  horizontalRule: {
    borderWidth: 0.5,
    borderColor: "black",
    // margin: 10,
  },
  div4Text: {
    borderRadius: 8,
    borderWidth: 1,
    margin: 8,
    backgroundColor: "white",
  },
  div4styles: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  div4title: {
    fontSize: 18,
    margin: 10,
    fontWeight: "bold",
  },
});
