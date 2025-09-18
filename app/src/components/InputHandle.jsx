import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

const InputHandle = () => {
  const [input, setinput] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    setText(input);
    setinput("");
  };

  return (
    <View className="w-full h-full ">
      <View className="mt-1 mr-3 w-full flex justify-center items-center">
        <Text className="text-xl font-bold mt-1 px-2">Form Handle : </Text>
        <TextInput
          onChangeText={(text) => setinput(text)}
          value={input}
          placeholder="Enter Your Name Here"
          className="px-8 py-8 w-full bg-white rounded-xl text-black text-pretty shadow-md mx-5"
        />
        <TouchableHighlight className="mt-4 w-1/2 rounded-xl">
          <Button
            title="Submit"
            className="mt-2"
            onPress={handleSubmit}></Button>
        </TouchableHighlight>
      </View>
      {text ? (
        <Text className="mt-3 text-xl font-bold">Result : {text}</Text>
      ) : null}
    </View>
  );
};

export default InputHandle;
