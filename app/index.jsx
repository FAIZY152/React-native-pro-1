import { View } from "react-native";
import Navbar from "../components/Navbar";
import Scrollview from "../components/Scrollview";
import StylesheetComp from "../components/Stylesheet";
import "../global.css";

// If the file is named 'StylesheetComp.jsx', update the import as follows:

export default function Index() {
  // const theme = useColorScheme();

  // console.log(theme === "dark");

  // const router = useRouter();
  return (
    <View className="w-full h-full bg-gray-100">
      <Navbar />
      <StylesheetComp />
      <View className="mx-2 mt-2 container ">
        <Scrollview />
      </View>
    </View>
  );
}
