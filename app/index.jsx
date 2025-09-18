import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import { View } from "react-native";
import About from "../app/src/screens/About";
import Contact from "../app/src/screens/Contact";
import "../global.css";

// If the file is named 'Sty./src/components/Stylesheet the import as follows:

export default function Index() {
  // const theme = useColorScheme();

  // console.log(theme === "dark");

  // const router = useRouter();
  return (
    <View className="w-full h-full bg-gray-100">
      {/* <Navbar />
      <StylesheetComp />
      {/* <Scrollview /> */}
      {/* <InputHandle /> */}

      {/* Navigation */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
