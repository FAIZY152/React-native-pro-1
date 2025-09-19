import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center px-4">
          <Text className="text-2xl font-bold text-black text-center">
            Khan is here for 
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
