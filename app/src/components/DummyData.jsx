import { FlatList, Image, Text, View } from "react-native";

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

const DummyData = () => {
  return (
    // <View className="w-full h-fullflex justify-center items-center">
    //   {users.map((user) => (
    //     <View key={user.name} className="p-4 rounded-md shadow flex ">
    //       <Text>{user.name}</Text>
    //       <Text>{user.age}</Text>
    //       <Image
    //         source={{ uri: user.image }}
    //         style={{ width: 50, height: 50 }}
    //       />
    //     </View>
    //   ))}
    // </View>

    // Flatlit
    <View className="">
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View className="p-4 rounded-md shadow  w-full h-full flex justify-center items-center ">
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Image
              source={{ uri: item.image }}
              style={{ width: 50, height: 50 }}
            />
          </View>
        )}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
        // columnWrapperStyle={{ justifyContent: "space-between" }} whole container wrapper
      />
    </View>
  );
};

export default DummyData;
