import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

const Navbar = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center bg-white px-4 py-3 shadow-md">
        <View className="">
          {/* Logo or Brand Name */}
          {/* <Text className="text-xl font-bold text-pink-600">Foodpanda</Text>
           */}

          <Image
            className="w-24 h-24 rounded-md mx-10"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIoYFrxjPX7PJumWT1y7yPQx8Z6wrVS6JbWQ&s",
            }}
          />
        </View>
        {/* Sign Up Button */}
        <View className="flex-row space-x-2 gap-4">
          <Pressable className="bg-pink-600 px-4 py-2 rounded-full">
            <Text className="text-white font-medium">Sign Up</Text>
          </Pressable>
          <TouchableOpacity className="bg-pink-600 px-4 py-2 rounded-full">
            <Text className="text-white font-medium">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full mx-2">
        <Image
          className="w-full"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_uX6epCRT0gKsG2BWJrjcPA6Ds6Dr-YDfA&s",
          }}
        />
      </View>
    </View>
  );
};

export default Navbar;
