import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StylesheetComp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis vero veniam omnis alias tempore nostrum dicta nisi rerum esse
        sunt, tempora est magni. Aliquid repellat aliquam expedita at
        cupiditate?
      </Text>
      <TouchableHighlight
        onPress={() => alert("Button pressed")}
        className="w-full mx-auto">
        <Text className="px-3 mx-auto py-2 bg-green-500 text-white rounded-lg">
          Add
        </Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default StylesheetComp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "auto",
  },
  text: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    TextAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
    paddingLeft: 10,
    textAlign: "center",
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
