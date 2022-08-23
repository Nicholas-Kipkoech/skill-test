import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Graph = () => {
  return (
    <LineChart
      data={{
        labels: ["IM", "3M", "6M", "IY", "ALL"],
        datasets: [
          {
            data: [
              1 * 100,
              2 * 100,
              2 * 100,
              3 * 100,
              4 * 100,
              5 * 100,
              4 * 100,
            ],
          },
        ],
      }}
      width={Dimensions.get("window").width} // from react-native
      height={170}
      //   yAxisLabel="$"
      //   yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "white",
        // backgroundGradientFrom: "#fb8c00",
        // backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
          margin: 5,
          shadowColor: "white",
        },
        propsForDots: {
          r: "3",
          strokeWidth: "2",
          stroke: "white",
        },
      }}
      bezier
      style={{
        marginVertical: 0.2,
        borderRadius: 10,
        margin: 10,
      }}
    />
  );
};

export default Graph;
