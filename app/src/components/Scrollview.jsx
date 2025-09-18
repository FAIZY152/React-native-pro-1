import { FlatList, Image, SafeAreaView, Text, View } from "react-native";

const users = [
  {
    name: "Ali Khan",
    age: 25,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Sara Ahmed",
    age: 22,
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Zain Raza",
    age: 30,
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Hina Tariq",
    age: 27,
    image: "https://randomuser.me/api/portraits/women/41.jpg",
  },
  {
    name: "Usman Ali",
    age: 24,
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Ayesha Khan",
    age: 26,
    image: "https://randomuser.me/api/portraits/women/61.jpg",
  },
  {
    name: "Bilal Saeed",
    age: 29,
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    name: "Fatima Noor",
    age: 23,
    image: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    name: "Hamza Sheikh",
    age: 28,
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    name: "Nimra Shah",
    age: 21,
    image: "https://randomuser.me/api/portraits/women/99.jpg",
  },
];

const Scrollview = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-full">
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View className=" bg-black text-white p-4 mx-6 rounded-md shadow flex justify-center items-center ">
              <Image
                source={{ uri: item.image }}
                style={{ width: 50, height: 50 }}
              />
              <Text className="text-white font-bold">{item.name}</Text>
              <Text className="text-white font-bold">{item.age}</Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<View style={{ height: 20 }} />}
          // columnWrapperStyle={{ justifyContent: "space-between" }} whole container wrapper
        />
      </View>
    </SafeAreaView>
  );
};

// const style = StyleSheet.create({
//   container: {
//     width: "100%",
//     minHeight: "auto",
//     backgroundColor: "white",
//   },
// });
export default Scrollview;
