import { Link } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center px-4 w-full">
          <Text className="text-2xl font-bold text-black text-center">
            Khan is here for match
          </Text>
          <View className="flex justify-start items-center gap-3 ">
            <Link href="/details" asChild>
              <Pressable className="bg-blue-600 px-6 py-3 rounded-xl">
                <Text className="text-white font-medium">Details</Text>
              </Pressable>
            </Link>

            {/* About button */}
            <Link href="/about" asChild>
              <TouchableOpacity className="bg-pink-600 px-6 py-3 rounded-xl">
                <Text className="text-white font-medium">About</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </SafeAreaView>
      {/* <View className="w-full min-h-screen">
        <ImageViewer
          uri={
            "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
          }
        />
      </View> */}
    </SafeAreaProvider>
  );
}
