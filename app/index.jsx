import { Link } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center px-4">
          <Text className="text-2xl font-bold text-black text-center">
            Khan is here for match
          </Text>
          <Link href={"/details"}>
            {" "}
            <Pressable className="bg-blue-600 px-6 py-3 rounded-xl">
              <Text className="text-white font-medium">Details</Text>
            </Pressable>
          </Link>
          <Link href={"/about"}>
            <TouchableOpacity className="bg-pink-600 px-6 py-3 rounded-xl">
              <Text className="text-white font-medium">About</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
