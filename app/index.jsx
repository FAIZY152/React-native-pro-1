import { Text, View } from "react-native";
import "../gobal.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "green",
        alignItems: "center",
      }}>
      <Text style={{ color: "white" }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
